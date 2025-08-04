// services/otpService.js

/**
 * Generates a numeric OTP of the given length (default 6).
 */
export function generateOtp(length = 6) {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // digits 0-9
    }
    return otp;
  }
  
  /**
   * Example function to send SMS via a gateway like Twilio, Nexmo, etc.
   * Replace with your SMS provider's code.
   */
  export async function sendSms(mobile, message) {
    // Example using Twilio (pseudo-code):
    /*
    await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobile,
    });
    */
    console.log(`Sending SMS to ${mobile}: ${message}`);
  }
  