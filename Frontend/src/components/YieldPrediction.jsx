


// import React, { useState } from "react";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({ soilType: "", rainfall: "", temperature: "" });
//   const [prediction, setPrediction] = useState(null);

//   const soilTypes = {
//     "Sandy Soil": 0.8,
//     "Clay Soil": 1.1,
//     "Loamy Soil": 1.3,
//     "Silty Soil": 1.2,
//     "Peaty Soil": 1.0,
//     "Saline Soil": 0.7,
//     "Black Soil": 1.4,
//     "Red Soil": 1.0,
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const calculateYield = () => {
//     const baseYield = 2.5; // Base yield in tons per hectare

//     const soilFactor = soilTypes[formData.soilType] || 1.0;
//     const rainfall = parseFloat(formData.rainfall);
//     const temperature = parseFloat(formData.temperature);

//     const rainfallFactor = rainfall >= 500 && rainfall <= 1000 ? 1.2 : rainfall < 500 ? 0.9 : 0.8;
//     const tempFactor = temperature >= 20 && temperature <= 35 ? 1.1 : temperature < 20 ? 0.85 : 0.9;

//     return `${(baseYield * soilFactor * rainfallFactor * tempFactor).toFixed(2)} Tons per Hectare`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPrediction(`🌾 Estimated Yield: ${calculateYield()}`);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
//         <h1 className="text-3xl font-bold text-center text-green-700">🌱 Yield Prediction</h1>
//         <p className="text-gray-600 text-center mb-6">Enter details to predict crop yield.</p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Soil Type Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700 mb-2">Soil Type:</label>
//             <select
//               name="soilType"
//               value={formData.soilType}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
//               required
//             >
//               <option value="">Select Soil Type</option>
//               {Object.keys(soilTypes).map((soil, index) => (
//                 <option key={index} value={soil}>{soil}</option>
//               ))}
//             </select>
//           </div>

//           {/* Rainfall Input */}
//           <div>
//             <label className="block font-semibold text-gray-700 mb-2">Rainfall (mm):</label>
//             <input
//               type="number"
//               name="rainfall"
//               value={formData.rainfall}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition"
//               placeholder="e.g., 500 (Annual rainfall in mm)"
//               required
//             />
//           </div>

//           {/* Temperature Input */}
//           <div>
//             <label className="block font-semibold text-gray-700 mb-2">Temperature (°C):</label>
//             <input
//               type="number"
//               name="temperature"
//               value={formData.temperature}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition"
//               placeholder="e.g., 30 (Average temperature in °C)"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full p-3 text-white font-bold rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition shadow-md"
//           >
//             Predict Yield
//           </button>
//         </form>

//         {/* Display Prediction */}
//         {prediction && (
//           <div className="mt-6 p-4 bg-gray-50 border-l-4 border-pink-500 rounded-lg shadow-md text-center text-lg font-semibold text-pink-700">
//             {prediction}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YieldPrediction;


// import { useState } from "react";
// import axios from "axios";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({
//     Crop: "",
//     Crop_Year: "",
//     Season: "",
//     State: "",
//     Area: "",
//     Production: "",
//     Annual_Rainfall: "",
//     Fertilizer: "",
//     Pesticide: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setPrediction(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       setPrediction(response.data.predicted_yield);
//     } catch (err) {
//       setError("Failed to fetch prediction. Please check inputs and try again.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Crop Yield Prediction</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {Object.keys(formData).map((key) => (
//           <div key={key}>
//             <label className="block font-semibold mb-1">{key.replace("_", " ")}</label>
//             <input
//               type="text"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//         ))}
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//           Predict Yield
//         </button>
//       </form>
//       {prediction && <p className="mt-4 text-green-600">Predicted Yield: {prediction} tons</p>}
//       {error && <p className="mt-4 text-red-600">{error}</p>}
//     </div>
//   );
// };

// export default YieldPrediction;


// import { useState } from "react";
// import axios from "axios";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({
//     Crop: "",
//     Crop_Year: "",
//     Season: "",
//     State: "",
//     Area: "",
//     Production: "",
//     Annual_Rainfall: "",
//     Fertilizer: "",
//     Pesticide: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   // Dropdown options
//   const states = ["Bihar", "Maharashtra", "Uttar Pradesh", "Punjab", "West Bengal"];
//   const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter"];
//   const crops = ["Rice", "Wheat", "Maize", "Sugarcane", "Pulses"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setPrediction(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       setPrediction(response.data.predicted_yield);
//     } catch (err) {
//       setError("Failed to fetch prediction. Please check inputs and try again.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Crop Yield Prediction</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
        
//         {/* Crop Dropdown */}
//         <div>
//           <label className="block font-semibold mb-1">Crop</label>
//           <select
//             name="Crop"
//             value={formData.Crop}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select Crop</option>
//             {crops.map((crop) => (
//               <option key={crop} value={crop}>
//                 {crop}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Crop Year */}
//         <div>
//           <label className="block font-semibold mb-1">Crop Year</label>
//           <input
//             type="number"
//             name="Crop_Year"
//             value={formData.Crop_Year}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         {/* Season Dropdown */}
//         <div>
//           <label className="block font-semibold mb-1">Season</label>
//           <select
//             name="Season"
//             value={formData.Season}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select Season</option>
//             {seasons.map((season) => (
//               <option key={season} value={season}>
//                 {season}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* State Dropdown */}
//         <div>
//           <label className="block font-semibold mb-1">State</label>
//           <select
//             name="State"
//             value={formData.State}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select State</option>
//             {states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Numerical Inputs */}
//         {["Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"].map((key) => (
//           <div key={key}>
//             <label className="block font-semibold mb-1">{key.replace("_", " ")}</label>
//             <input
//               type="number"
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//         ))}

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//           Predict Yield
//         </button>
//       </form>

//       {/* Prediction Result */}
//       {prediction && <p className="mt-4 text-green-600">Predicted Yield: {prediction} tons</p>}
//       {error && <p className="mt-4 text-red-600">{error}</p>}
//     </div>
//   );
// };

// export default YieldPrediction;


// import { useState } from "react";
// import axios from "axios";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({
//     Crop: "",
//     Crop_Year: "",
//     Season: "",
//     State: "",
//     Area: "",
//     Production: "",
//     Annual_Rainfall: "",
//     Fertilizer: "",
//     Pesticide: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   // Dropdown options
//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
//     "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
//     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];
//   const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter"];
//   const crops = ["Rice", "Wheat", "Maize", "Sugarcane", "Pulses"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setPrediction(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       setPrediction(response.data.predicted_yield);
//     } catch (err) {
//       setError("Failed to fetch prediction. Please check inputs and try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24">
//       {/* Navbar */}
//       <nav className="w-full bg-blue-600 p-4 fixed top-0 shadow-lg z-10">
//         <h1 className="text-white text-2xl font-bold text-center">Crop Yield Prediction</h1>
//       </nav>

//       {/* Main Form Section */}
//       <div className="max-w-xl w-full p-8 bg-white shadow-2xl rounded-2xl mt-8 transition-all transform hover:scale-105">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Predict Your Crop Yield</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {/* Crop Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">Crop</label>
//             <select
//               name="Crop"
//               value={formData.Crop}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Crop</option>
//               {crops.map((crop) => (
//                 <option key={crop} value={crop}>{crop}</option>
//               ))}
//             </select>
//           </div>

//           {/* Crop Year */}
//           <div>
//             <label className="block font-semibold text-gray-700">Crop Year</label>
//             <input
//               type="number"
//               name="Crop_Year"
//               value={formData.Crop_Year}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Season Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">Season</label>
//             <select
//               name="Season"
//               value={formData.Season}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Season</option>
//               {seasons.map((season) => (
//                 <option key={season} value={season}>{season}</option>
//               ))}
//             </select>
//           </div>

//           {/* State Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">State</label>
//             <select
//               name="State"
//               value={formData.State}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state} value={state}>{state}</option>
//               ))}
//             </select>
//           </div>

//           {/* Numerical Inputs */}
//           {["Area", "Production", "Annual_Rainfall", "Fertilizer", "Pesticide"].map((key) => (
//             <div key={key}>
//               <label className="block font-semibold text-gray-700">{key.replace("_", " ")}</label>
//               <input
//                 type="number"
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           ))}

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
//           >
//             Predict Yield
//           </button>
//         </form>

//         {/* Prediction Result */}
//         {prediction && (
//           <p className="mt-6 text-green-600 text-lg font-semibold text-center">
//             Predicted Yield: {prediction} tons
//           </p>
//         )}
//         {error && (
//           <p className="mt-6 text-red-600 text-lg font-semibold text-center">
//             {error}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YieldPrediction;


// import { useState } from "react";
// import axios from "axios";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({
//     Crop: "",
//     Crop_Year: "",
//     Season: "",
//     State: "",
//     Area: "",
//     Production: "",
//     Annual_Rainfall: "",
//     Fertilizer: "",
//     Pesticide: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
//     "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
//     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter"];
//   const crops = ["Rice", "Wheat", "Maize", "Sugarcane", "Pulses"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setPrediction(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       setPrediction(response.data.predicted_yield);
//     } catch (err) {
//       setError("Failed to fetch prediction. Please check inputs and try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-32">
//       <div className="max-w-xl w-full p-8 bg-white shadow-2xl rounded-2xl mt-8 transition-all transform hover:scale-105">
//         {/* <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Crop Yield Prediction</h2> */}
//         <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-500 to-green-600 drop-shadow-md">
//   🌿 Crop Yield Prediction</h2>


//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Crop Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">Crop Name</label>
//             <select
//               name="Crop"
//               value={formData.Crop}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Crop</option>
//               {crops.map((crop) => (
//                 <option key={crop} value={crop}>{crop}</option>
//               ))}
//             </select>
//           </div>

//           {/* Crop Year */}
//           <div>
//             <label className="block font-semibold text-gray-700">Year</label>
//             <input
//               type="number"
//               name="Crop_Year"
//               value={formData.Crop_Year}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Season Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">Season</label>
//             <select
//               name="Season"
//               value={formData.Season}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Season</option>
//               {seasons.map((season) => (
//                 <option key={season} value={season}>{season}</option>
//               ))}
//             </select>
//           </div>

//           {/* State Dropdown */}
//           <div>
//             <label className="block font-semibold text-gray-700">State</label>
//             <select
//               name="State"
//               value={formData.State}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state} value={state}>{state}</option>
//               ))}
//             </select>
//           </div>

//           {/* Inputs with Units */}
//           <div>
//             <label className="block font-semibold text-gray-700">Area (hectares)</label>
//             <input
//               type="number"
//               name="Area"
//               value={formData.Area}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Production (tons)</label>
//             <input
//               type="number"
//               name="Production"
//               value={formData.Production}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Annual Rainfall (mm)</label>
//             <input
//               type="number"
//               name="Annual_Rainfall"
//               value={formData.Annual_Rainfall}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Fertilizer Used (kg)</label>
//             <input
//               type="number"
//               name="Fertilizer"
//               value={formData.Fertilizer}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Pesticide Used (kg)</label>
//             <input
//               type="number"
//               name="Pesticide"
//               value={formData.Pesticide}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
//           >
//             Predict Yield
//           </button>
//         </form>

//         {/* Prediction Result */}
//         {/* Prediction Result */}
// {prediction && (
//   <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg shadow-md text-center">
//     <p className="text-xl font-bold">
//       🌾 Predicted Yield: <span className="text-green-900">{prediction} tons</span>
//     </p>
//     <p className="text-sm text-gray-700 mt-1">Based on your input data</p>
//   </div>
// )}
// {error && (
//   <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md text-center">
//     ❌ {error}
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default YieldPrediction;


// import { useState } from "react";
// import axios from "axios";

// const YieldPrediction = () => {
//   const [formData, setFormData] = useState({
//     Crop: "",
//     Crop_Year: "",
//     Season: "",
//     State: "",
//     Area: "",
//     Production: "",
//     Annual_Rainfall: "",
//     Fertilizer: "",
//     Pesticide: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
//     "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
//     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter"];
//   const crops = ["Rice", "Wheat", "Maize", "Sugarcane", "Pulses"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setPrediction(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       setPrediction(response.data.predicted_yield);
//     } catch (err) {
//       setError("Failed to fetch prediction. Please check inputs and try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center pt-28">
//       <div className="max-w-5xl w-full p-10 bg-white shadow-2xl rounded-2xl transition-all transform hover:scale-[1.02]">
//         <h2 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-500 to-green-600 drop-shadow-lg">
//           🌿 Crop Yield Prediction
//         </h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block font-semibold text-gray-700">Crop Name</label>
//             <select name="Crop" value={formData.Crop} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
//               <option value="">Select Crop</option>
//               {crops.map((crop) => (
//                 <option key={crop} value={crop}>{crop}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Year</label>
//             <input type="number" name="Crop_Year" value={formData.Crop_Year} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Season</label>
//             <select name="Season" value={formData.Season} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
//               <option value="">Select Season</option>
//               {seasons.map((season) => (
//                 <option key={season} value={season}>{season}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">State</label>
//             <select name="State" value={formData.State} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state} value={state}>{state}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Area (hectares)</label>
//             <input type="number" name="Area" value={formData.Area} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Production (tons)</label>
//             <input type="number" name="Production" value={formData.Production} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Annual Rainfall (mm)</label>
//             <input type="number" name="Annual_Rainfall" value={formData.Annual_Rainfall} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Fertilizer Used (kg)</label>
//             <input type="number" name="Fertilizer" value={formData.Fertilizer} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Pesticide Used (kg)</label>
//             <input type="number" name="Pesticide" value={formData.Pesticide} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
//           </div>

//           <div className="md:col-span-2">
//             <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all">
//               🌾 Predict Yield
//             </button>
//           </div>
//         </form>

//         {/* Prediction Result */}
//         {prediction && (
//           <div className="mt-8 p-5 bg-green-100 border border-green-400 text-green-800 rounded-lg shadow-md text-center">
//             <p className="text-2xl font-bold">
//               🌾 Predicted Yield: <span className="text-green-900">{prediction} tons</span>
//             </p>
//             <p className="text-sm text-gray-700 mt-1">Based on your input data</p>
//           </div>
//         )}
//         {error && (
//           <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md text-center">
//             ❌ {error}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YieldPrediction;


import { useState } from "react";
import axios from "axios";

const YieldPrediction = () => {
  const [formData, setFormData] = useState({
    Crop: "",
    Crop_Year: "",
    Season: "",
    State: "",
    Area: "",
    Production: "",
    Annual_Rainfall: "",
    Fertilizer: "",
    Pesticide: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const seasons = ["Kharif", "Rabi", "Zaid", "Summer", "Winter"];
  const crops = [
    "Rice", "Wheat", "Maize", "Sugarcane", "Pulses", "Bajra", "Barley", "Cotton", "Groundnut", "Jowar",
    "Millets", "Mustard", "Oilseeds", "Onion", "Potato", "Soybean", "Sunflower", "Tea", "Tobacco",
    "Turmeric", "Urad", "Moong", "Masoor", "Chickpea", "Lentil"
  ];

  const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 1990 + i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setPrediction(response.data.predicted_yield);
    } catch (err) {
      setError("Failed to fetch prediction. Please check inputs and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center pt-28">
      <div className="max-w-5xl w-full p-10 bg-white shadow-2xl rounded-2xl transition-all transform hover:scale-[1.02]">
        <h2 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-500 to-green-600 drop-shadow-lg">
          🌿 Crop Yield Prediction
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700">Crop Name</label>
            <select name="Crop" value={formData.Crop} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
              <option value="">Select Crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Year</label>
            <select name="Crop_Year" value={formData.Crop_Year} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Season</label>
            <select name="Season" value={formData.Season} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
              <option value="">Select Season</option>
              {seasons.map((season) => (
                <option key={season} value={season}>{season}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">State</label>
            <select name="State" value={formData.State} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Area (hectares)</label>
            <input type="number" name="Area" value={formData.Area} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Production (tons)</label>
            <input type="number" name="Production" value={formData.Production} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Annual Rainfall (mm)</label>
            <input type="number" name="Annual_Rainfall" value={formData.Annual_Rainfall} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Fertilizer Used (kg)</label>
            <input type="number" name="Fertilizer" value={formData.Fertilizer} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Pesticide Used (kg)</label>
            <input type="number" name="Pesticide" value={formData.Pesticide} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-green-500" required />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all">
              🌾 Predict Yield
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-8 p-5 bg-green-100 border border-green-400 text-green-800 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">
              🌾 Predicted Yield: <span className="text-green-900">{prediction} tons</span>
            </p>
            <p className="text-sm text-gray-700 mt-1">Based on your input data</p>
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md text-center">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldPrediction;
