// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//   fullname: { type: String, required: true },
//   email: { type: String },
//   mobile: { type: String, required: true, unique: true },
//   annualIncome: { type: Number, required: true },
//   bplStatus: { type: String, required: true },
//   loanCreditScore: { type: String },
//   farmerType: { type: String, required: true },
//   category: { type: String, required: true },
//   landOwnership: { type: String },
//   landSize: { type: String },
//   landType: { type: String },
//   soilQuality: { type: String },
//   cropsGrown: { type: String },
//   seasonalPattern: { type: String },
//   nationality: { type: String, default: "Indian" },
//   state: { type: String, required: true },
//   password: { type: String, required: true },

//   // Fields for OTP functionality
//   otp: { type: String },
//   otpExpiry: { type: Date },
// });

// const User = mongoose.model("User", userSchema);
// export default User;


import mongoose from "mongoose";

// Define a sub-schema for landSize
const landSizeSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  unit: { type: String, required: true }
}, { _id: false }); // _id:false prevents creating an _id for the sub-document

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String },
  mobile: { type: String, required: true, unique: true },
  annualIncome: { type: Number, required: true },
  bplStatus: { type: String, required: true },
  loanCreditScore: { type: String },
  farmerType: { type: String, required: true },
  category: { type: String, required: true },
  landOwnership: { type: String },
  landSize: { type: landSizeSchema, required: true }, // Updated to use sub-schema
  landType: { type: String },
  soilQuality: { type: String },
  cropsGrown: { type: String },
  seasonalPattern: { type: String },
  nationality: { type: String, default: "Indian" },
  state: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
