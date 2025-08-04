import { useState } from "react";

const EligibilityChecker = () => {
  const [landSize, setLandSize] = useState("");
  const [income, setIncome] = useState("");
  const [state, setState] = useState("");
  const [farmerType, setFarmerType] = useState("");
  const [centralSchemes, setCentralSchemes] = useState([]);
  const [stateSchemes, setStateSchemes] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [topScheme, setTopScheme] = useState(null);

  const checkEligibility = async () => {
    if (!landSize || !income || !state || !farmerType) {
      setMessage("❌ Please fill in all fields.");
      setCentralSchemes([]);
      setStateSchemes([]);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4008/api/schemes/check-eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          landSize: Number(landSize),
          income: Number(income),
          state,
          farmerType,
        }),
      });

      if (!response.ok) {
        throw new Error("Server error! Unable to fetch eligibility.");
      }

      const data = await response.json();

      const sortedCentralSchemes = data.centralSchemes
      ? data.centralSchemes.sort((a, b) => Number(b.profitability) - Number(a.profitability))
      : [];
    const sortedStateSchemes = data.stateSchemes
      ? data.stateSchemes.sort((a, b) => Number(b.profitability) - Number(a.profitability))
      : [];
      const allSchemes = [...sortedCentralSchemes, ...sortedStateSchemes];
      const bestScheme = allSchemes.length > 0 ? allSchemes[0] : null;

      setTopScheme(bestScheme);
      setMessage(
        sortedCentralSchemes.length && sortedStateSchemes.length
          ? "✅ You qualify for both Central & State schemes!"
          : sortedCentralSchemes.length
          ? "✅ You qualify for Central schemes!"
          : sortedStateSchemes.length
          ? "✅ You qualify for State schemes!"
          : "❌ Sorry, no schemes available for your criteria."
      );

      setCentralSchemes(sortedCentralSchemes);
      setStateSchemes(sortedStateSchemes);
    } catch (error) {
      setMessage("❌ Error fetching eligibility. Please try again.");
      setCentralSchemes([]);
      setStateSchemes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg transition transform hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-gray-800">Agriculture Eligibility Checker</h2>
      <p className="text-gray-600 text-center mb-6">Enter details to check eligibility for schemes.</p>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Land Size (in acres)"
          value={landSize}
          onChange={(e) => setLandSize(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        <input
          type="number"
          placeholder="Annual Income (in ₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select State</option>
          {[
           "Bihar", "Maharashtra", "Uttar Pradesh", "Karnataka", "Punjab",
          "Haryana", "Gujarat", "West Bengal", "Tamil Nadu", "Rajasthan",
          "Madhya Pradesh", "Andhra Pradesh", "Odisha", "Telangana", "Chhattisgarh",
          "Assam", "Jharkhand", "Himachal Pradesh", "Kerala", "Arunachal Pradesh",
          "Goa", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura",
          "Ladakh", "Jammu and Kashmir",  

          ].map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select
          value={farmerType}
          onChange={(e) => setFarmerType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select Farmer Type</option>
          <option value="Small Farmer">Small Farmer</option>
          <option value="Marginal Farmer">Marginal Farmer</option>
          <option value="Large Farmer">Large Farmer</option>
        </select>

        <button
          onClick={checkEligibility}
          className="w-full p-3 text-white font-bold rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition shadow-md"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Eligibility"}
        </button>

        {topScheme && (
          <p className="mt-4 text-center text-lg font-semibold text-red-700">
          🌟 Best Scheme: {topScheme.name} (Profitability Score: {topScheme.profitability})          </p>
        )}

        <button
          onClick={checkEligibility}
          className="w-full mt-2 p-3 text-white font-bold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition shadow-md"
        >
          Refresh Schemes
        </button>
      </div>

      {message && <p className="mt-6 text-center font-semibold text-gray-700">{message}</p>}

      {/* {centralSchemes.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow">
          <h3 className="text-lg font-bold text-blue-700">Central Government Schemes:</h3>
          <ul className="list-disc list-inside">
            {centralSchemes.map((scheme, index) => (
              <li key={index} className="text-blue-600 mt-4 text-center text-lg font-semibold">
            ✅ {scheme.name} (Profitability Score: {scheme.profitability})              </li>
            ))}
          </ul>
        </div>
      )} */}

{centralSchemes.length > 0 && (
  <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow">
    {/* Centered Title */}
    <h3 className="text-lg font-bold text-blue-700 text-center">Central Government Schemes:</h3>
    
    {/* Numbered List with Proper Alignment */}
    <ol className="list-decimal list-inside text-left mx-auto w-fit">
      {centralSchemes.map((scheme, index) => (
        <li key={index} className="mt-6 text-lg font-semibold text-blue-700">
          {scheme.name}
          <div className="text-red-500 text-center text-base font-medium mt-1">
            (Profitability Score: {scheme.profitability})
          </div>
        </li>
      ))}
    </ol>
  </div>
)}



{stateSchemes.length > 0 && (
  <div className="mt-6 p-4 bg-gray-50 border-l-4 border-green-500 rounded-lg shadow">
    {/* Centered Title */}
    <h3 className="text-lg font-bold text-green-700 text-center">State Government Schemes:</h3>

    {/* Numbered List with Proper Alignment */}
    <ol className="list-decimal list-outside mx-auto w-fit pl-6">
      {stateSchemes.map((scheme, index) => (
        <li key={index} className="mt-6 text-lg font-semibold text-green-700">
          {scheme.name}
          <div className="text-orange-500 text-center text-base font-medium mt-1">
            (Profitability Score: {scheme.profitability})
          </div>
        </li>
      ))}
    </ol>
  </div>
)}



    </div>
  );
};

export default EligibilityChecker;
