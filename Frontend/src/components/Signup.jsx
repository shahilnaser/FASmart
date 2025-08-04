// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// const statesOfIndia = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
//   "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//   "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
//   "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
//   "Uttar Pradesh", "Uttarakhand", "West Bengal"
// ];

// function Signup() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm();

//   // Watch the password field for confirm validation.
//   const password = watch("password");

//   const onSubmit = async (data) => {
//     const landSize = {
//       value: data.landSizeValue,
//       unit: data.landSizeUnit
//     };

//     const userInfo = {
//       fullname: data.fullname,
//       mobile: data.mobile,
//       email: data.email || "",
//       annualIncome: data.annualIncome,
//       bplStatus: data.bplStatus,
//       farmerType: data.farmerType,
//       category: data.category,
//       landSize,
//       landType: data.landType,
//       soilQuality: data.soilQuality || "",
//       cropsGrown: data.cropsGrown || "",
//       seasonalPattern: data.seasonalPattern || "",
//       nationality: "Indian",
//       state: data.state,
//       password: data.password
//     };

//     try {
//       const res = await axios.post("http://localhost:4008/user/signup", userInfo);
//       if (res.data) {
//         toast.success("Signup Successful");
//         navigate("/");
//       }
//       localStorage.setItem("Users", JSON.stringify(res.data.user));
//     } catch (err) {
//       toast.error("Error: " + err.response.data.message);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 pt-20 px-4">
//       <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
//         <h3 className="text-3xl font-bold text-center text-blue-600 mb-8 col-span-2">
//           Farmer Registration
//         </h3>
//         <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
//           {/* Full Name - full width */}
//           <div className="col-span-2">
//             <input
//               type="text"
//               placeholder="Full Name"
//               {...register("fullname", { required: "Full Name is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               {...register("mobile", { required: "Mobile Number is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
//           </div>

//           {/* Email (Optional) */}
//           <div>
//             <input
//               type="email"
//               placeholder="Email (Optional)"
//               {...register("email")}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Annual Income */}
//           <div>
//             <input
//               type="number"
//               placeholder="Annual Income (INR)"
//               {...register("annualIncome", { required: "Annual Income is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.annualIncome && <span className="text-red-500 text-sm">{errors.annualIncome.message}</span>}
//           </div>

//           {/* BPL Status */}
//           <div>
//             <select
//               {...register("bplStatus", { required: "BPL Status is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">BPL Status</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//             {errors.bplStatus && <span className="text-red-500 text-sm">{errors.bplStatus.message}</span>}
//           </div>

//           {/* Farmer Type */}
//           <div>
//             <select
//               {...register("farmerType", { required: "Farmer Type is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Farmer Type</option>
//               <option value="Small">Small</option>
//               <option value="Marginal">Marginal</option>
//               <option value="Large">Large</option>
//               <option value="Tenant">Tenant</option>
//               <option value="Sharecropper">Sharecropper</option>
//             </select>
//             {errors.farmerType && <span className="text-red-500 text-sm">{errors.farmerType.message}</span>}
//           </div>

//           {/* Category */}
//           <div>
//             <select
//               {...register("category", { required: "Category is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Category</option>
//               <option value="General">General</option>
//               <option value="SC/ST">SC/ST</option>
//               <option value="OBC">OBC</option>
//               <option value="Women Farmer">Women Farmer</option>
//               <option value="Disabled Farmer">Disabled Farmer</option>
//             </select>
//             {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
//           </div>

//           {/* Land Size (Unit & Value) */}
//           <div className="flex space-x-3">
//             <select
//               {...register("landSizeUnit", { required: "Unit is required" })}
//               className="w-1/3 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Unit</option>
//               <option value="Acre">Acre</option>
//               <option value="Hectare">Hectare</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Land Size"
//               {...register("landSizeValue", { required: "Land Size is required" })}
//               className="w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           {(errors.landSizeUnit || errors.landSizeValue) && (
//             <span className="text-red-500 text-sm col-span-2">
//               {errors.landSizeUnit?.message || errors.landSizeValue?.message}
//             </span>
//           )}

//           {/* Land Type */}
//           <div>
//             <select
//               {...register("landType", { required: "Land Type is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Land Type</option>
//               <option value="Irrigated">Irrigated</option>
//               <option value="Non-Irrigated">Non-Irrigated</option>
//               <option value="Rainfed">Rainfed</option>
//               <option value="Barren">Barren</option>
//               <option value="Hilly">Hilly</option>
//             </select>
//             {errors.landType && <span className="text-red-500 text-sm">{errors.landType.message}</span>}
//           </div>

//           {/* Soil Quality (Optional) */}
//           <div>
//             <select
//               {...register("soilQuality")}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Soil Quality (Optional)</option>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//           </div>

//           {/* Crops Grown (Optional) */}
//           <div>
//             <select
//               {...register("cropsGrown")}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Crops Grown (Optional)</option>
//               <option value="Cereals">Cereals</option>
//               <option value="Pulses">Pulses</option>
//               <option value="Cash Crops">Cash Crops</option>
//               <option value="Horticulture">Horticulture</option>
//             </select>
//           </div>

//           {/* Seasonal Pattern & Nationality in one row */}
//           <div>
//             <select
//               {...register("seasonalPattern")}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Seasonal Pattern (Optional)</option>
//               <option value="Rabi">Rabi</option>
//               <option value="Kharif">Kharif</option>
//               <option value="Zaid">Zaid</option>
//             </select>
//           </div>
//           <div>
//             <input
//               type="text"
//               value="Indian"
//               readOnly
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
//             />
//           </div>

//           {/* State Selection */}
//           <div className="col-span-2">
//             <select
//               {...register("state", { required: "State is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Select State</option>
//               {statesOfIndia.map((state) => (
//                 <option key={state} value={state}>{state}</option>
//               ))}
//             </select>
//             {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
//           </div>

//           {/* Password */}
//           <div className="col-span-2">
//             <input
//               type="password"
//               placeholder="Password"
//               {...register("password", { required: "Password is required" })}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
//           </div>

//           {/* Re-enter Password */}
//           <div className="col-span-2">
//             <input
//               type="password"
//               placeholder="Re-enter Password"
//               {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: (value) =>
//                   value === password || "Passwords do not match"
//               })}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-2">
//             <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
//               Signup
//             </button>
//           </div>

//           {/* Login Link */}
//           <div className="col-span-2 text-center mt-2 text-gray-600">
//             Already registered?{" "}
//             <Link to="/login" className="underline text-blue-600 hover:text-blue-800">
//               Login
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Form Data:", data); // Debug: Check the submitted payload

    // Create an object for landSize from two fields
    const landSize = {
      value: data.landSizeValue,
      unit: data.landSizeUnit
    };

    const userInfo = {
      fullname: data.fullname,
      mobile: data.mobile,
      email: data.email || "",
      annualIncome: data.annualIncome, // Must be a number
      bplStatus: data.bplStatus,
      farmerType: data.farmerType,
      category: data.category,
      landSize,
      landType: data.landType,
      soilQuality: data.soilQuality || "",
      cropsGrown: data.cropsGrown || "",
      seasonalPattern: data.seasonalPattern || "",
      nationality: "Indian",
      state: data.state,
      password: data.password
    };

    try {
      const res = await axios.post("http://localhost:4008/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (err) {
      console.error("Signup Error:", err.response ? err.response.data : err);
      toast.error("Error: " + (err.response ? err.response.data.message : "Internal server error"));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 pt-20 px-4">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-8 col-span-2">
          Farmer Registration
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          {/* Full Name (Full width) */}
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname", { required: "Full Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
          </div>

          {/* Mobile Number */}
          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              {...register("mobile", { required: "Mobile Number is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
          </div>

          {/* Email (Optional) */}
          <div>
            <input
              type="email"
              placeholder="Email (Optional)"
              {...register("email")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Annual Income */}
          <div>
            <input
              type="number"
              placeholder="Annual Income (INR)"
              {...register("annualIncome", { required: "Annual Income is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.annualIncome && <span className="text-red-500 text-sm">{errors.annualIncome.message}</span>}
          </div>

          {/* BPL Status */}
          <div>
            <select
              {...register("bplStatus", { required: "BPL Status is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">BPL Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.bplStatus && <span className="text-red-500 text-sm">{errors.bplStatus.message}</span>}
          </div>

          {/* Farmer Type */}
          <div>
            <select
              {...register("farmerType", { required: "Farmer Type is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Farmer Type</option>
              <option value="Small">Small</option>
              <option value="Marginal">Marginal</option>
              <option value="Large">Large</option>
              <option value="Tenant">Tenant</option>
              <option value="Sharecropper">Sharecropper</option>
            </select>
            {errors.farmerType && <span className="text-red-500 text-sm">{errors.farmerType.message}</span>}
          </div>

          {/* Category */}
          <div>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Category</option>
              <option value="General">General</option>
              <option value="SC/ST">SC/ST</option>
              <option value="OBC">OBC</option>
              <option value="Women Farmer">Women Farmer</option>
              <option value="Disabled Farmer">Disabled Farmer</option>
            </select>
            {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
          </div>

          {/* Land Size (Unit & Value) */}
          <div className="flex space-x-3">
            <select
              {...register("landSizeUnit", { required: "Unit is required" })}
              className="w-1/3 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Unit</option>
              <option value="Acre">Acre</option>
              <option value="Hectare">Hectare</option>
            </select>
            <input
              type="number"
              placeholder="Land Size"
              {...register("landSizeValue", { required: "Land Size is required" })}
              className="w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {(errors.landSizeUnit || errors.landSizeValue) && (
            <span className="text-red-500 text-sm col-span-2">
              {errors.landSizeUnit?.message || errors.landSizeValue?.message}
            </span>
          )}

          {/* Land Type */}
          <div>
            <select
              {...register("landType", { required: "Land Type is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Land Type</option>
              <option value="Irrigated">Irrigated</option>
              <option value="Non-Irrigated">Non-Irrigated</option>
              <option value="Rainfed">Rainfed</option>
              <option value="Barren">Barren</option>
              <option value="Hilly">Hilly</option>
            </select>
            {errors.landType && <span className="text-red-500 text-sm">{errors.landType.message}</span>}
          </div>

          {/* Soil Quality (Optional) */}
          <div>
            <select
              {...register("soilQuality")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Soil Quality (Optional)</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Crops Grown (Optional) */}
          <div>
            <select
              {...register("cropsGrown")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Crops Grown (Optional)</option>
              <option value="Cereals">Cereals</option>
              <option value="Pulses">Pulses</option>
              <option value="Cash Crops">Cash Crops</option>
              <option value="Horticulture">Horticulture</option>
            </select>
          </div>

          {/* Seasonal Pattern & Nationality (One Row) */}
          <div>
            <select
              {...register("seasonalPattern")}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Seasonal Pattern (Optional)</option>
              <option value="Rabi">Rabi</option>
              <option value="Kharif">Kharif</option>
              <option value="Zaid">Zaid</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              value="Indian"
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* State Selection */}
          <div className="col-span-2">
            <select
              {...register("state", { required: "State is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select State</option>
              {statesOfIndia.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
          </div>

          {/* Password */}
          <div className="col-span-2">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Re-enter Password */}
          <div className="col-span-2">
            <input
              type="password"
              placeholder="Re-enter Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Signup
            </button>
          </div>

          {/* Login Link */}
          <div className="col-span-2 text-center mt-2 text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="underline text-blue-600 hover:text-blue-800">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
