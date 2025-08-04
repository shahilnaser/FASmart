// controller/otp.controller.js

import { generateOtp, sendSms } from "../services/otpService.js";
import User from "../model/user.model.js";

export const sendOtpToUser = async (req, res) => {
  try {
    const { mobile } = req.body;

    // 1. Check if user with this mobile exists
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Generate OTP
    const otp = generateOtp(); // e.g., "123456"

    // 3. Store OTP in the user document (with an expiry)
    user.otp = otp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes from now
    await user.save();

    // 4. Send the OTP via SMS
    await sendSms(mobile, `Your OTP is ${otp}`);

    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in sendOtpToUser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const verifyUserOtp = async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    // 1. Find user by mobile
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Check if OTP matches and not expired
    if (user.otp !== otp || Date.now() > user.otpExpiry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // 3. Clear OTP and expiry after successful verification
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    // 4. Return success (could also generate a JWT token, etc.)
    return res.status(200).json({
      message: "OTP verified successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.error("Error in verifyUserOtp:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
