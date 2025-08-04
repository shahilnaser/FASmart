// import express from "express";
// import { signup, login } from "../controller/user.controller.js";
// import { sendOtpToUser, verifyUserOtp } from "../controller/otp.controller.js";

// import userRouter from "./route/user.route.js";
// app.use("/user", userRouter);


// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);

// // OTP endpoints
// router.post("/send-otp", sendOtpToUser);
// router.post("/verify-otp", verifyUserOtp);

// export default router;


// import express from "express";
// import { signup, login } from "../controller/user.controller.js";
// import { sendOtpToUser, verifyUserOtp } from "../controller/otp.controller.js";

// const router = express.Router();

// // Auth endpoints
// router.post("/signup", signup);
// router.post("/login", login);

// // OTP endpoints
// router.post("/send-otp", sendOtpToUser);
// router.post("/verify-otp", verifyUserOtp);

// export default router;


import express from "express";
import { signup, login } from "../controller/user.controller.js";
import { sendOtpToUser, verifyUserOtp } from "../controller/otp.controller.js";

const router = express.Router();

// User Authentication Endpoints
router.post("/signup", signup);
router.post("/login", login);

// OTP Endpoints
router.post("/send-otp", sendOtpToUser);
router.post("/verify-otp", verifyUserOtp);

export default router;
