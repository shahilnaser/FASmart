import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState("password"); // "password" or "otp"
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Handler for form submission.
  const onSubmit = async (data) => {
    try {
      const endpoint = "http://localhost:4008/user/login";
      const res = await axios.post(endpoint, data);

      if (res.data?.token) {  
        localStorage.setItem("token", res.data.token); // ✅ Store JWT token
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // ✅ Store user data
        toast.success("Logged in Successfully");
        navigate("/");
      } else {
        toast.error("Token not received from server");
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  // Function to send OTP for mobile login.
  const sendOTP = async () => {
    const mobile = document.getElementById("mobile")?.value;
    if (!mobile) {
      toast.error("Please enter your mobile number to receive OTP.");
      return;
    }
    try {
      await axios.post("http://localhost:4008/user/send-otp", { mobile });
      toast.success("OTP sent successfully");
    } catch (err) {
      if (err.response) {
        toast.error("Error sending OTP: " + err.response.data.message);
      } else {
        toast.error("Error sending OTP");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 pt-20 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Login
        </h3>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setLoginMethod("password")}
            className={`${loginMethod === "password" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} py-2 px-4 rounded transition-colors`}
          >
            Login with Password
          </button>
          <button
            onClick={() => setLoginMethod("otp")}
            className={`${loginMethod === "otp" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} py-2 px-4 rounded transition-colors`}
          >
            Login with OTP
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {loginMethod === "password" ? (
            <>
              {/* Email Field */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              {/* Password Field */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              {/* Forgot Password Link */}
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Forgot Password?
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Mobile Field */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  {...register("mobile", { required: "Mobile Number is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
              </div>
              {/* Send OTP Button */}
              <div>
                <button
                  type="button"
                  onClick={sendOTP}
                  className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send OTP
                </button>
              </div>
              {/* OTP Field */}
              <div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  {...register("otp", { required: "OTP is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.otp && <span className="text-red-500 text-sm">{errors.otp.message}</span>}
              </div>
            </>
          )}
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Not registered?{" "}
          <Link to="/signup" className="underline text-blue-600 hover:text-blue-800">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
