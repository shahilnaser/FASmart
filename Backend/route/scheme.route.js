// // import express from "express";
// // const router = express.Router();

// // // router.post("/check-eligibility", (req, res) => {
// // //     const { landSize, income, state, farmerType } = req.body;

// // //     // ✅ Validate request body
// // //     if (
// // //         typeof landSize !== "number" ||
// // //         typeof income !== "number" ||
// // //         typeof state !== "string" ||
// // //         typeof farmerType !== "string"
// // //     ) {
// // //         return res.status(400).json({ error: "Invalid input data. Please check your request format." });
// // //     }

// // //     let eligibilityMessage = "❌ No matching schemes found for your details.";

// // //     // ✅ Check eligibility conditions
// // //     if (landSize >= 1 && landSize <= 5 && income <= 500000) {
// // //         eligibilityMessage = "✅ You are eligible for PM Kisan Samman Nidhi Yojana.";
// // //     } else if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
// // //         eligibilityMessage = "✅ You are eligible for the Bihar Krishi Input Subsidy Scheme.";
// // //     } else if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
// // //         eligibilityMessage = "✅ You are eligible for Balasaheb Thackeray Krishi Yojana.";
// // //     } else if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
// // //         eligibilityMessage = "✅ You are eligible for Kisan Rin Mochan Yojana.";
// // //     } else if (landSize > 10 && income > 500000) {
// // //         eligibilityMessage = "❌ You are not eligible for small/marginal farmer schemes.";
// // //     }

// // //     res.json({ eligibility: eligibilityMessage });
// // // });

// // router.post("/check-eligibility", (req, res) => {
// //     console.log("Received Data:", req.body); // Debugging: Log the request body

// //     const { landSize, income, state, farmerType } = req.body;

// //     if (!landSize || !income || !state || !farmerType) {
// //         return res.status(400).json({ error: "Invalid input data. Please check your request format." });
// //     }

// //     let eligibilityMessage = "❌ No matching schemes found for your details.";

// //     if (landSize >= 1 && landSize <= 5 && income <= 500000) {
// //         eligibilityMessage = "✅ You are eligible for PM Kisan Samman Nidhi Yojana.";
// //     } else if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
// //         eligibilityMessage = "✅ You are eligible for the Bihar Krishi Input Subsidy Scheme.";
// //     } else if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
// //         eligibilityMessage = "✅ You are eligible for Balasaheb Thackeray Krishi Yojana.";
// //     } else if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
// //         eligibilityMessage = "✅ You are eligible for Kisan Rin Mochan Yojana.";
// //     } else if (landSize > 10 && income > 500000) {
// //         eligibilityMessage = "❌ You are not eligible for small/marginal farmer schemes.";
// //     }

// //     res.json({ eligibility: eligibilityMessage });
// // });


// // export default router; // ✅ Ensure default export


// // import express from "express";
// // const router = express.Router();

// // router.post("/check-eligibility", (req, res) => {
// //     console.log("Received Data:", req.body); // Debugging

// //     const { landSize, income, state, farmerType } = req.body;

// //     if (!landSize || !income || !state || !farmerType) {
// //         return res.status(400).json({ error: "Invalid input data. Please check your request format." });
// //     }

// //     let eligibilityMessage = "❌ No matching schemes found for your details.";

// //     if (landSize >= 1 && landSize <= 5 && income <= 500000) {
// //         eligibilityMessage = "✅ You are eligible for PM Kisan Samman Nidhi Yojana.";
// //     } else if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
// //         eligibilityMessage = "✅ You are eligible for the Bihar Krishi Input Subsidy Scheme.";
// //     } else if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
// //         eligibilityMessage = "✅ You are eligible for Balasaheb Thackeray Krishi Yojana.";
// //     } else if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
// //         eligibilityMessage = "✅ You are eligible for Kisan Rin Mochan Yojana.";
// //     } else if (landSize > 10 && income > 500000) {
// //         eligibilityMessage = "❌ You are not eligible for small/marginal farmer schemes.";
// //     }

// //     res.json({ eligibility: eligibilityMessage });
// // });

// // export default router;


// // import express from "express";
// // const router = express.Router();

// // router.post("/check-eligibility", (req, res) => {
// //     const { landSize, income, state, farmerType } = req.body;
// //     let eligibilityMessage = "❌ No matching schemes found.";

// //     if (landSize >= 1 && landSize <= 5 && income <= 500000) {
// //         eligibilityMessage = "✅ Eligible for PM Kisan Samman Nidhi Yojana.";
// //     }

// //     res.json({ eligibility: eligibilityMessage });
// // });

// // export default router;


// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   let eligibilityMessage = "❌ No matching schemes found.";

//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     eligibilityMessage = "✅ Eligible for PM Kisan Samman Nidhi Yojana.";
//   }

//   res.json({ eligibility: eligibilityMessage });
// });

// export default router;


// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   let eligibilityMessage = "❌ No matching schemes found.";

//   // ✅ PM Kisan Samman Nidhi Yojana (Central Government)
//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     eligibilityMessage = "✅ Eligible for PM Kisan Samman Nidhi Yojana.";
//   }

//   // ✅ Bihar Krishi Input Subsidy Scheme (Bihar Government)
//   if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
//     eligibilityMessage = "✅ Eligible for Bihar Krishi Input Subsidy Scheme.";
//   }

//   // ✅ Balasaheb Thackeray Krishi Yojana (Maharashtra Government)
//   if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
//     eligibilityMessage = "✅ Eligible for Balasaheb Thackeray Krishi Yojana.";
//   }

//   // ✅ Kisan Rin Mochan Yojana (Uttar Pradesh Government)
//   if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
//     eligibilityMessage = "✅ Eligible for Kisan Rin Mochan Yojana.";
//   }

//   // ✅ Rythu Bandhu Scheme (Telangana Government)
//   if (state.toLowerCase() === "telangana" && landSize >= 1 && landSize <= 10) {
//     eligibilityMessage = "✅ Eligible for Rythu Bandhu Scheme.";
//   }

//   // ✅ Krushak Assistance for Livelihood and Income Augmentation (KALIA) Scheme (Odisha Government)
//   if (state.toLowerCase() === "odisha" && income <= 200000) {
//     eligibilityMessage = "✅ Eligible for Odisha KALIA Scheme.";
//   }

//   // ✅ Mukhyamantri Krishi Ashirwad Yojana (Jharkhand Government)
//   if (state.toLowerCase() === "jharkhand" && landSize <= 5) {
//     eligibilityMessage = "✅ Eligible for Mukhyamantri Krishi Ashirwad Yojana.";
//   }

//   // ✅ PM Fasal Bima Yojana (Central Government - Crop Insurance)
//   if (farmerType.toLowerCase() === "small" || farmerType.toLowerCase() === "marginal") {
//     eligibilityMessage += " ✅ Also eligible for PM Fasal Bima Yojana (Crop Insurance).";
//   }

//   // ❌ Not eligible for small/marginal farmer schemes
//   if (landSize > 10 && income > 500000) {
//     eligibilityMessage = "❌ Not eligible for small/marginal farmer schemes.";
//   }

//   res.json({ eligibility: eligibilityMessage });
// });

// export default router;




// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   let centralSchemes = [];
//   let stateSchemes = [];

//   // Central Government Schemes
//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     centralSchemes.push({ name: "PM Kisan Samman Nidhi Yojana", benefit: 6000 });
//   }
//   if (farmerType.toLowerCase() === "small" || farmerType.toLowerCase() === "marginal") {
//     centralSchemes.push({ name: "PM Fasal Bima Yojana (Crop Insurance)", benefit: 10000 });
//   }

//   // State Government Schemes
//   if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
//     stateSchemes.push({ name: "Bihar Krishi Input Subsidy Scheme", benefit: 8000 });
//   }
//   if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
//     stateSchemes.push({ name: "Balasaheb Thackeray Krishi Yojana", benefit: 7000 });
//   }
//   if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
//     stateSchemes.push({ name: "Kisan Rin Mochan Yojana", benefit: 9000 });
//   }
//   if (state.toLowerCase() === "telangana" && landSize >= 1 && landSize <= 10) {
//     stateSchemes.push({ name: "Rythu Bandhu Scheme", benefit: 12000 });
//   }
//   if (state.toLowerCase() === "odisha" && income <= 200000) {
//     stateSchemes.push({ name: "Odisha KALIA Scheme", benefit: 11000 });
//   }
//   if (state.toLowerCase() === "jharkhand" && landSize <= 5) {
//     stateSchemes.push({ name: "Mukhyamantri Krishi Ashirwad Yojana", benefit: 7500 });
//   }

//   // Sorting schemes based on benefit (descending order)
//   centralSchemes.sort((a, b) => b.benefit - a.benefit);
//   stateSchemes.sort((a, b) => b.benefit - a.benefit);

//   let responseMessage = "";
//   if (centralSchemes.length > 0 && stateSchemes.length > 0) {
//     responseMessage = "✅ You are eligible for both Central and State schemes.";
//   } else if (centralSchemes.length > 0) {
//     responseMessage = "✅ You are eligible only for Central Government schemes.";
//   } else if (stateSchemes.length > 0) {
//     responseMessage = "✅ You are eligible only for State Government schemes.";
//   } else {
//     responseMessage = "❌ No matching schemes found.";
//   }

//   res.json({
//     message: responseMessage,
//     centralSchemes: centralSchemes.map(scheme => `✅ ${scheme.name}`),
//     stateSchemes: stateSchemes.map(scheme => `✅ ${scheme.name}`),
//   });
// });

// export default router;


// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   const centralSchemes = [];
//   const stateSchemes = [];
  
//   // ✅ PM Kisan Samman Nidhi Yojana (Central Government)
//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     centralSchemes.push("PM Kisan Samman Nidhi Yojana");
//   }

//   // ✅ Bihar Krishi Input Subsidy Scheme (Bihar Government)
//   if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
//     stateSchemes.push("Bihar Krishi Input Subsidy Scheme");
//   }

//   // ✅ Balasaheb Thackeray Krishi Yojana (Maharashtra Government)
//   if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
//     stateSchemes.push("Balasaheb Thackeray Krishi Yojana");
//   }

//   // ✅ Kisan Rin Mochan Yojana (Uttar Pradesh Government)
//   if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
//     stateSchemes.push("Kisan Rin Mochan Yojana");
//   }

//   // ✅ Rythu Bandhu Scheme (Telangana Government)
//   if (state.toLowerCase() === "telangana" && landSize >= 1 && landSize <= 10) {
//     stateSchemes.push("Rythu Bandhu Scheme");
//   }

//   // ✅ Krushak Assistance for Livelihood and Income Augmentation (KALIA) Scheme (Odisha Government)
//   if (state.toLowerCase() === "odisha" && income <= 200000) {
//     stateSchemes.push("Odisha KALIA Scheme");
//   }

//   // ✅ Mukhyamantri Krishi Ashirwad Yojana (Jharkhand Government)
//   if (state.toLowerCase() === "jharkhand" && landSize <= 5) {
//     stateSchemes.push("Mukhyamantri Krishi Ashirwad Yojana");
//   }

//   // ✅ PM Fasal Bima Yojana (Central Government - Crop Insurance)
//   if (farmerType.toLowerCase() === "small" || farmerType.toLowerCase() === "marginal") {
//     centralSchemes.push("PM Fasal Bima Yojana (Crop Insurance)");
//   }

//   // ❌ Not eligible for small/marginal farmer schemes
//   if (landSize > 10 && income > 500000) {
//     return res.json({ eligibility: "❌ Not eligible for small/marginal farmer schemes." });
//   }

//   // Sorting schemes by predefined ranking (Higher-ranked schemes first)
//   const rankSchemes = (schemes) => {
//     const ranking = {
//       "PM Kisan Samman Nidhi Yojana": 1,
//       "PM Fasal Bima Yojana (Crop Insurance)": 2,
//       "Kisan Rin Mochan Yojana": 3,
//       "Rythu Bandhu Scheme": 4,
//       "Odisha KALIA Scheme": 5,
//       "Mukhyamantri Krishi Ashirwad Yojana": 6,
//       "Bihar Krishi Input Subsidy Scheme": 7,
//       "Balasaheb Thackeray Krishi Yojana": 8,
//     };

//     return schemes.sort((a, b) => ranking[a] - ranking[b]);
//   };

//   const rankedCentralSchemes = rankSchemes(centralSchemes);
//   const rankedStateSchemes = rankSchemes(stateSchemes);

//   let eligibilityMessage = "❌ No matching schemes found.";
//   if (rankedCentralSchemes.length > 0 && rankedStateSchemes.length > 0) {
//     eligibilityMessage = "✅ You are eligible for both Central and State schemes.\n\n";
//     eligibilityMessage += `🟢 **Central Government Schemes:**\n`;
//     eligibilityMessage += rankedCentralSchemes.map((scheme) => `✅ ${scheme}`).join("\n") + "\n\n";
//     eligibilityMessage += `🔵 **State Government Schemes:**\n`;
//     eligibilityMessage += rankedStateSchemes.map((scheme) => `✅ ${scheme}`).join("\n");
//   } else if (rankedCentralSchemes.length > 0) {
//     eligibilityMessage = "✅ You are eligible only for Central Government schemes.\n\n";
//     eligibilityMessage += rankedCentralSchemes.map((scheme) => `✅ ${scheme}`).join("\n");
//   } else if (rankedStateSchemes.length > 0) {
//     eligibilityMessage = "✅ You are eligible only for State Government schemes.\n\n";
//     eligibilityMessage += rankedStateSchemes.map((scheme) => `✅ ${scheme}`).join("\n");
//   }

//   res.json({ eligibility: eligibilityMessage });
// });

// export default router;



// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (![landSize, income, state, farmerType].every(Boolean)) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   const centralSchemes = [];
//   const stateSchemes = [];
//   const lowerState = state.toLowerCase();
//   const lowerFarmerType = farmerType.toLowerCase();

//   const schemeRanking = {
//     "PM Kisan Samman Nidhi Yojana": 1,
//     "PM Fasal Bima Yojana (Crop Insurance)": 2,
//     "Kisan Rin Mochan Yojana": 3,
//     "Rythu Bandhu Scheme": 4,
//     "Odisha KALIA Scheme": 5,
//     "Mukhyamantri Krishi Ashirwad Yojana": 6,
//     "Bihar Krishi Input Subsidy Scheme": 7,
//     "Balasaheb Thackeray Krishi Yojana": 8,
//   };

//   // ✅ Central Government Schemes
//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     centralSchemes.push("PM Kisan Samman Nidhi Yojana");
//   }
//   if (lowerFarmerType === "small" || lowerFarmerType === "marginal") {
//     centralSchemes.push("PM Fasal Bima Yojana (Crop Insurance)");
//   }

//   // ✅ State Government Schemes
//   if (landSize > 5 && landSize <= 10 && lowerState === "bihar") {
//     stateSchemes.push("Bihar Krishi Input Subsidy Scheme");
//   }
//   if (lowerState === "maharashtra" && lowerFarmerType === "marginal") {
//     stateSchemes.push("Balasaheb Thackeray Krishi Yojana");
//   }
//   if (landSize >= 2 && landSize <= 8 && lowerState === "uttar pradesh") {
//     stateSchemes.push("Kisan Rin Mochan Yojana");
//   }
//   if (lowerState === "telangana" && landSize >= 1 && landSize <= 10) {
//     stateSchemes.push("Rythu Bandhu Scheme");
//   }
//   if (lowerState === "odisha" && income <= 200000) {
//     stateSchemes.push("Odisha KALIA Scheme");
//   }
//   if (lowerState === "jharkhand" && landSize <= 5) {
//     stateSchemes.push("Mukhyamantri Krishi Ashirwad Yojana");
//   }

//   if (landSize > 10 && income > 500000) {
//     return res.json({ eligibility: "❌ Not eligible for small/marginal farmer schemes." });
//   }

//   const rankSchemes = (schemes) => schemes.sort((a, b) => schemeRanking[a] - schemeRanking[b]);

//   const rankedCentralSchemes = rankSchemes(centralSchemes);
//   const rankedStateSchemes = rankSchemes(stateSchemes);

//   let eligibilityMessage = "❌ No matching schemes found.";

//   if (rankedCentralSchemes.length || rankedStateSchemes.length) {
//     eligibilityMessage = "✅ You are eligible for the following schemes:\n\n";
//     if (rankedCentralSchemes.length) {
//       eligibilityMessage += "🟢 **Central Government Schemes:**\n";
//       eligibilityMessage += rankedCentralSchemes.map(scheme => `✅ ${scheme}`).join("\n") + "\n\n";
//     }
//     if (rankedStateSchemes.length) {
//       eligibilityMessage += "🔵 **State Government Schemes:**\n";
//       eligibilityMessage += rankedStateSchemes.map(scheme => `✅ ${scheme}`).join("\n");
//     }
//   }

//   res.json({ eligibility: eligibilityMessage });
// });

// export default router;


// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   let eligibilityMessage = "❌ No matching schemes found.";

//   // ✅ PM Kisan Samman Nidhi Yojana (Central Government)
//   if (landSize >= 1 && landSize <= 5 && income <= 500000) {
//     eligibilityMessage = "✅ Eligible for PM Kisan Samman Nidhi Yojana.";
//   }

//   // ✅ Bihar Krishi Input Subsidy Scheme (Bihar Government)
//   if (landSize > 5 && landSize <= 10 && state.toLowerCase() === "bihar") {
//     eligibilityMessage = "✅ Eligible for Bihar Krishi Input Subsidy Scheme.";
//   }

//   // ✅ Balasaheb Thackeray Krishi Yojana (Maharashtra Government)
//   if (state.toLowerCase() === "maharashtra" && farmerType.toLowerCase() === "marginal") {
//     eligibilityMessage = "✅ Eligible for Balasaheb Thackeray Krishi Yojana.";
//   }

//   // ✅ Kisan Rin Mochan Yojana (Uttar Pradesh Government)
//   if (landSize >= 2 && landSize <= 8 && state.toLowerCase() === "uttar pradesh") {
//     eligibilityMessage = "✅ Eligible for Kisan Rin Mochan Yojana.";
//   }

//   // ✅ Rythu Bandhu Scheme (Telangana Government)
//   if (state.toLowerCase() === "telangana" && landSize >= 1 && landSize <= 10) {
//     eligibilityMessage = "✅ Eligible for Rythu Bandhu Scheme.";
//   }

//   // ✅ Krushak Assistance for Livelihood and Income Augmentation (KALIA) Scheme (Odisha Government)
//   if (state.toLowerCase() === "odisha" && income <= 200000) {
//     eligibilityMessage = "✅ Eligible for Odisha KALIA Scheme.";
//   }

//   // ✅ Mukhyamantri Krishi Ashirwad Yojana (Jharkhand Government)
//   if (state.toLowerCase() === "jharkhand" && landSize <= 5) {
//     eligibilityMessage = "✅ Eligible for Mukhyamantri Krishi Ashirwad Yojana.";
//   }

//   // ✅ PM Fasal Bima Yojana (Central Government - Crop Insurance)
//   if (farmerType.toLowerCase() === "small" || farmerType.toLowerCase() === "marginal") {
//     eligibilityMessage += " ✅ Also eligible for PM Fasal Bima Yojana (Crop Insurance).";
//   }

//   // ❌ Not eligible for small/marginal farmer schemes
//   if (landSize > 10 && income > 500000) {
//     eligibilityMessage = "❌ Not eligible for small/marginal farmer schemes.";
//   }

//   res.json({ eligibility: eligibilityMessage });
// });

// export default router;


// import express from "express";

// const router = express.Router();

// router.post("/check-eligibility", (req, res) => {
//   const { landSize, income, state, farmerType } = req.body;

//   if (!landSize || !income || !state || !farmerType) {
//     return res.status(400).json({ error: "❌ All fields are required." });
//   }

//   // 📌 List of schemes (with profitability scores)
//   const schemes = [
//     { name: "PM Kisan Samman Nidhi Yojana", state: "All", landMin: 1, landMax: 5, incomeMax: 500000, profitability: 90, type: "Central" },
//     { name: "Bihar Krishi Input Subsidy Scheme", state: "Bihar", landMin: 6, landMax: 10, incomeMax: 500000, profitability: 85, type: "State" },
//     { name: "Balasaheb Thackeray Krishi Yojana", state: "Maharashtra", farmerType: "Marginal", profitability: 80, type: "State" },
//     { name: "Kisan Rin Mochan Yojana", state: "Uttar Pradesh", landMin: 2, landMax: 8, profitability: 75, type: "State" },
//     { name: "Rythu Bandhu Scheme", state: "Telangana", landMin: 1, landMax: 10, profitability: 88, type: "State" },
//     { name: "Odisha KALIA Scheme", state: "Odisha", incomeMax: 200000, profitability: 78, type: "State" },
//     { name: "Mukhyamantri Krishi Ashirwad Yojana", state: "Jharkhand", landMax: 5, profitability: 82, type: "State" },
//     { name: "PM Fasal Bima Yojana", state: "All", farmerType: ["Small", "Marginal"], profitability: 95, type: "Central" }
//   ];

//   // 📌 Filtering schemes based on eligibility
//   const eligibleSchemes = schemes.filter(scheme => {
//     return (
//       (scheme.state === "All" || scheme.state.toLowerCase() === state.toLowerCase()) &&
//       (!scheme.landMin || landSize >= scheme.landMin) &&
//       (!scheme.landMax || landSize <= scheme.landMax) &&
//       (!scheme.incomeMax || income <= scheme.incomeMax) &&
//       (!scheme.farmerType || (Array.isArray(scheme.farmerType) ? scheme.farmerType.includes(farmerType) : scheme.farmerType === farmerType))
//     );
//   });

//   // ✅ Separate Central & State schemes
//   const centralSchemes = eligibleSchemes.filter(scheme => scheme.type === "Central").sort((a, b) => b.profitability - a.profitability);
//   const stateSchemes = eligibleSchemes.filter(scheme => scheme.type === "State").sort((a, b) => b.profitability - a.profitability);

//   // 📌 Prepare response
//   if (centralSchemes.length === 0 && stateSchemes.length === 0) {
//     return res.json({ eligibility: "❌ No matching schemes found." });
//   }

//   res.json({
//     message: "✅ Here are the applicable schemes:",
//     centralSchemes,
//     stateSchemes
//   });
// });

// export default router;


import express from "express";

const router = express.Router();

router.post("/check-eligibility", (req, res) => {
  const { landSize, income, state, farmerType } = req.body;

  if (!landSize || !income || !state || !farmerType) {
    return res.status(400).json({ error: "❌ All fields are required." });
  }

  const schemes = [
    // Central Government Schemes for Farmers:
    { "name": "PM Kisan Samman Nidhi", "state": "All", "landMin": 1, "landMax": 5, "incomeMax": 500000, "profitability": 90, "type": "Central" },
    { "name": "PM Kisan Maan Dhan", "state": "All", "landMin": 2, "landMax": 5, "incomeMax": 600000, "profitability": 80, "type": "Central" },
    { name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", state: "All India", profitability: 82, type: "Central" },
    { name: "Kisan Credit Card (KCC)", state: "All India", profitability: 88, type: "Central" },
    { name: "Soil Health Card Scheme", state: "All India", profitability: 87, type: "Central" },
    { name: "Paramparagat Krishi Vikas Yojana (PKVY)", state: "All India", profitability: 90, type: "Central" },
    { name: "Rashtriya Krishi Vikas Yojana (RKVY)", state: "All India", profitability: 86, type: "Central" },
    { name: "National Food Security Mission (NFSM)", state: "All India", profitability: 84, type: "Central" },
    { name: "National Horticulture Mission (NHM)", state: "All India", profitability: 83, type: "Central" },
    { name: "National Mission on Sustainable Agriculture (NMSA)", state: "All India", profitability: 85, type: "Central" },
    { name: "National Mission on Agricultural Extension and Technology (NMAET)", state: "All India", profitability: 82, type: "Central" },
    { name: "Micro Irrigation Fund (MIF)", state: "All India", profitability: 89, type: "Central" },
    { name: "Agricultural Mechanization Sub-Mission (SMAM)", state: "All India", profitability: 88, type: "Central" },
    { name: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)", state: "All India", profitability: 86, type: "Central" },
    { name: "Mission for Integrated Development of Horticulture (MIDH)", state: "All India", profitability: 83, type: "Central" },
    { name: "National Livestock Mission (NLM)", state: "All India", profitability: 84, type: "Central" },
    { name: "Blue Revolution (Neel Kranti Mission)", state: "All India", profitability: 82, type: "Central" },
    { name: "Agriculture Infrastructure Fund (AIF)", state: "All India", profitability: 88, type: "Central" },
    { name: "Formation and Promotion of 10,000 Farmer Producer Organizations (FPOs)", state: "All India", profitability: 87, type: "Central" },
    { name: "National Beekeeping and Honey Mission (NBHM)", state: "All India", profitability: 85, type: "Central" },
    { name: "Sub-Mission on Seeds and Planting Material (SMSP)", state: "All India", profitability: 83, type: "Central" },
    { name: "Sub-Mission on Agricultural Mechanization (SMAM)", state: "All India", profitability: 89, type: "Central" },
    { name: "National Bamboo Mission (NBM)", state: "All India", profitability: 84, type: "Central" },
    { name: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)", state: "All India", profitability: 86, type: "Central" },
    { name: "National Mission on Edible Oils - Oil Palm (NMEO-OP)", state: "All India", profitability: 88, type: "Central" },
    { name: "National Mission on Natural Farming (NMNF)", state: "All India", profitability: 90, type: "Central" },
    { name: "Kisan Rail", state: "All India", profitability: 82, type: "Central" },
    { name: "Agricultural Export Policy", state: "All India", profitability: 85, type: "Central" },
    { name: "e-NAM (National Agriculture Market)", state: "All India", profitability: 87, type: "Central" },
    { name: "Operation Greens", state: "All India", profitability: 84, type: "Central" },
    { name: "Dairy Entrepreneurship Development Scheme (DEDS)", state: "All India", profitability: 83, type: "Central" },
    { name: "National Agricultural Higher Education Project (NAHEP)", state: "All India", profitability: 89, type: "Central" },
    { name: "Mission for Integrated Development of Value Chains (MIDVC)", state: "All India", profitability: 86, type: "Central" },

    // State Schemes

    // Bihar State Government Schemes for Farmers:

    { name: "Bihar Krishi Input Subsidy Scheme", state: "Bihar", landMin: 1, landMax: 10, incomeMax: 500000, profitability: 85, type: "State" },
    { name: "Bihar Fasal Sahayata Yojana", state: "Bihar", profitability: 82, type: "State" },
    { name: "Bihar Beej Anudan Yojana", state: "Bihar", profitability: 80, type: "State" },
    { name: "Bihar Krishi Yantrikaran Yojana", state: "Bihar", profitability: 88, type: "State" },
    { name: "Bihar Bagwani Vikas Yojana", state: "Bihar", profitability: 78, type: "State" },
    { name: "Bihar Dairy Vikas Yojana", state: "Bihar", profitability: 83, type: "State" },
    { name: "Bihar Matsya Vikas Yojana", state: "Bihar", profitability: 79, type: "State" },
    { name: "Bihar Jal-Jeevan-Hariyali Abhiyan (Krishi)", state: "Bihar", profitability: 90, type: "State" },
    { name: "Bihar Organic Farming Promotion Scheme", state: "Bihar", profitability: 86, type: "State" },
    { name: "Bihar Integrated Farming System Scheme", state: "Bihar", profitability: 84, type: "State" },
    { name: "Bihar Kisan Credit Card (State Scheme)", state: "Bihar", profitability: 87, type: "State" },
    { name: "Bihar Micro Irrigation Scheme", state: "Bihar", profitability: 81, type: "State" },
    { name: "Bihar Horticulture Mission", state: "Bihar", profitability: 89, type: "State" },
    { name: "Bihar Agriculture Road Scheme", state: "Bihar", profitability: 77, type: "State" },
    { name: "Bihar Agriculture Warehouse Scheme", state: "Bihar", profitability: 85, type: "State" },
    { name: "Bihar Agriculture Marketing Scheme", state: "Bihar", profitability: 83, type: "State" },
    { name: "Bihar Animal Husbandry Development Scheme", state: "Bihar", profitability: 80, type: "State" },
    { name: "Bihar Soil Health Improvement Scheme", state: "Bihar", profitability: 88, type: "State" },
    { name: "Bihar Farmer Training and Extension Scheme", state: "Bihar", profitability: 82, type: "State" },
    { name: "Bihar Agriculture Diversification Scheme", state: "Bihar", profitability: 86, type: "State" },

    // Maharashtra State Government Schemes for Farmers:

    { name: "Maharashtra Mahatma Jyotirao Phule Shetkari Karj Mukti Yojana", state: "Maharashtra", profitability: 85, type: "State" },
    { name: "Maharashtra Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Maharashtra", profitability: 80, type: "State" },
    { name: "Maharashtra Beej Anudan Yojana", state: "Maharashtra", profitability: 82, type: "State" },
    { name: "Maharashtra Krishi Yantra Anudan Yojana", state: "Maharashtra", profitability: 88, type: "State" },
    { name: "Maharashtra Horticulture Mission", state: "Maharashtra", profitability: 78, type: "State" },
    { name: "Maharashtra Pashudhan Vikas Yojana", state: "Maharashtra", profitability: 83, type: "State" },
    { name: "Maharashtra Matsya Palan Yojana", state: "Maharashtra", profitability: 79, type: "State" },
    { name: "Maharashtra Soil Health Card Scheme (State)", state: "Maharashtra", profitability: 85, type: "State" },
    { name: "Maharashtra Kisan Credit Card (State Scheme)", state: "Maharashtra", profitability: 81, type: "State" },
    { name: "Maharashtra Micro Irrigation Scheme", state: "Maharashtra", profitability: 87, type: "State" },
    { name: "Maharashtra Organic Farming Promotion Scheme", state: "Maharashtra", profitability: 90, type: "State" },
    { name: "Maharashtra Integrated Farming System Scheme", state: "Maharashtra", profitability: 84, type: "State" },
    { name: "Maharashtra Agriculture Warehouse Scheme", state: "Maharashtra", profitability: 77, type: "State" },
    { name: "Maharashtra Agriculture Marketing Scheme", state: "Maharashtra", profitability: 89, type: "State" },
    { name: "Maharashtra Farm Mechanization Scheme", state: "Maharashtra", profitability: 82, type: "State" },
    { name: "Maharashtra Jal Shakti Abhiyan (Krishi)", state: "Maharashtra", profitability: 85, type: "State" },
    { name: "Maharashtra Farmer Producer Organization (FPO) Promotion Scheme", state: "Maharashtra", profitability: 88, type: "State" },
    { name: "Maharashtra Agriculture Diversification Scheme", state: "Maharashtra", profitability: 84, type: "State" },
    { name: "Maharashtra Agriculture Technology Management Agency (ATMA) Scheme", state: "Maharashtra", profitability: 87, type: "State" },
    { name: "Maharashtra Rashtriya Krishi Vikas Yojana (State Component)", state: "Maharashtra", profitability: 90, type: "State" },
    { name: "Maharashtra Seed Replacement Scheme", state: "Maharashtra", profitability: 77, type: "State" },
    { name: "Maharashtra Food Processing Mission", state: "Maharashtra", profitability: 89, type: "State" },
    { name: "Maharashtra Protected Cultivation Scheme", state: "Maharashtra", profitability: 83, type: "State" },
    { name: "Maharashtra Post Harvest Management Scheme", state: "Maharashtra", profitability: 80, type: "State" },
    { name: "Maharashtra Agriculture Export Promotion Scheme", state: "Maharashtra", profitability: 82, type: "State" },
    { name: "Maharashtra Agro Forestry Scheme", state: "Maharashtra", profitability: 85, type: "State" },
    { name: "Maharashtra Cold Storage Construction Scheme", state: "Maharashtra", profitability: 88, type: "State" },
    { name: "Maharashtra Farm Pond Scheme", state: "Maharashtra", profitability: 81, type: "State" },
    { name: "Maharashtra Agriculture Road Scheme", state: "Maharashtra", profitability: 84, type: "State" },
    { name: "Maharashtra Dairy Development Scheme", state: "Maharashtra", profitability: 87, type: "State" },
    { name: "Maharashtra Nanaji Deshmukh Krishi Sanjeevani Prakalp", state: "Maharashtra", profitability: 86, type: "State" },
    { name: "Maharashtra Balasaheb Thackeray Agribusiness and Rural Transformation (SMART) Project", state: "Maharashtra", profitability: 83, type: "State" },

        
    // Uttar Pradesh State Government Schemes for Farmers (Expanded):

    { name: "Kisan Rin Mochan Yojana", state: "Uttar Pradesh", landMin: 2, landMax: 8, profitability: 75, type: "State" },
    { name: "Uttar Pradesh Fasal Rin Mochan Yojana", state: "Uttar Pradesh", profitability: 78, type: "State" },
    { name: "Uttar Pradesh Kisan Samman Nidhi Yojana (State)", state: "Uttar Pradesh", profitability: 80, type: "State" },
    { name: "Uttar Pradesh Beej Anudan Yojana", state: "Uttar Pradesh", profitability: 82, type: "State" },
    { name: "Uttar Pradesh Krishi Yantrikaran Yojana", state: "Uttar Pradesh", profitability: 85, type: "State" },
    { name: "Uttar Pradesh Bagwani Mission", state: "Uttar Pradesh", profitability: 83, type: "State" },
    { name: "Uttar Pradesh Gopalan Yojana", state: "Uttar Pradesh", profitability: 81, type: "State" },
    { name: "Uttar Pradesh Matsya Palan Yojana", state: "Uttar Pradesh", profitability: 79, type: "State" },
    { name: "Uttar Pradesh Soil Health Card Scheme (State)", state: "Uttar Pradesh", profitability: 86, type: "State" },
    { name: "Uttar Pradesh Kisan Pathshala", state: "Uttar Pradesh", profitability: 84, type: "State" },
    { name: "Uttar Pradesh Micro Irrigation Scheme", state: "Uttar Pradesh", profitability: 87, type: "State" },
    { name: "Uttar Pradesh Organic Farming Promotion Scheme", state: "Uttar Pradesh", profitability: 88, type: "State" },
    { name: "Uttar Pradesh Integrated Farming System Scheme", state: "Uttar Pradesh", profitability: 90, type: "State" },
    { name: "Uttar Pradesh Agriculture Warehouse Scheme", state: "Uttar Pradesh", profitability: 77, type: "State" },
    { name: "Uttar Pradesh Agriculture Marketing Scheme", state: "Uttar Pradesh", profitability: 89, type: "State" },
    { name: "Uttar Pradesh Animal Husbandry Scheme", state: "Uttar Pradesh", profitability: 83, type: "State" },
    { name: "Uttar Pradesh Crop Insurance Scheme (State)", state: "Uttar Pradesh", profitability: 80, type: "State" },
    { name: "Uttar Pradesh Farm Mechanization Scheme", state: "Uttar Pradesh", profitability: 82, type: "State" },
    { name: "Uttar Pradesh Jal Shakti Abhiyan (Krishi)", state: "Uttar Pradesh", profitability: 85, type: "State" },
    { name: "Uttar Pradesh Chief Minister Krishak Durghatna Kalyan Yojana", state: "Uttar Pradesh", profitability: 76, type: "State" },
    { name: "Uttar Pradesh Kisan Pension Yojana", state: "Uttar Pradesh", profitability: 79, type: "State" },
    { name: "Uttar Pradesh Solar Irrigation Pump Scheme", state: "Uttar Pradesh", profitability: 81, type: "State" },
    { name: "Uttar Pradesh Food Processing Mission", state: "Uttar Pradesh", profitability: 84, type: "State" },
    { name: "Uttar Pradesh Protected Cultivation Scheme", state: "Uttar Pradesh", profitability: 87, type: "State" },
    { name: "Uttar Pradesh Post Harvest Management Scheme", state: "Uttar Pradesh", profitability: 88, type: "State" },
    { name: "Uttar Pradesh Agriculture Export Promotion Scheme", state: "Uttar Pradesh", profitability: 90, type: "State" },
    { name: "Uttar Pradesh Agro Forestry Scheme", state: "Uttar Pradesh", profitability: 78, type: "State" },
    { name: "Uttar Pradesh Farmer Producer Organization (FPO) Promotion Scheme", state: "Uttar Pradesh", profitability: 82, type: "State" },
    { name: "Uttar Pradesh Cold Storage Construction Scheme", state: "Uttar Pradesh", profitability: 85, type: "State" },
    { name: "Uttar Pradesh Seed Replacement Scheme", state: "Uttar Pradesh", profitability: 83, type: "State" },
    { name: "Uttar Pradesh Integrated Agriculture Development Scheme", state: "Uttar Pradesh", profitability: 77, type: "State" },
    { name: "Uttar Pradesh State Horticulture Mission", state: "Uttar Pradesh", profitability: 89, type: "State" },
    { name: "Uttar Pradesh Agriculture Diversification Scheme", state: "Uttar Pradesh", profitability: 80, type: "State" },
    { name: "Uttar Pradesh Farm Pond Scheme", state: "Uttar Pradesh", profitability: 86, type: "State" },
    { name: "Uttar Pradesh Agriculture Technology Management Agency (ATMA) Scheme", state: "Uttar Pradesh", profitability: 81, type: "State" },
    { name: "Uttar Pradesh Rashtriya Krishi Vikas Yojana (State Component)", state: "Uttar Pradesh", profitability: 84, type: "State" },

    // Telangana State Government Schemes for Farmers:

    { name: "Telangana Rythu Bandhu", state: "Telangana", profitability: 87, type: "State" },
    { name: "Telangana Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Telangana", profitability: 80, type: "State" },
    { name: "Telangana Beej Anudan Yojana", state: "Telangana", profitability: 82, type: "State" },
    { name: "Telangana Krishi Yantra Anudan Yojana", state: "Telangana", profitability: 88, type: "State" },
    { name: "Telangana Horticulture Mission", state: "Telangana", profitability: 78, type: "State" },
    { name: "Telangana Pashudhan Vikas Yojana", state: "Telangana", profitability: 83, type: "State" },
    { name: "Telangana Matsya Palan Yojana", state: "Telangana", profitability: 79, type: "State" },
    { name: "Telangana Soil Health Card Scheme (State)", state: "Telangana", profitability: 85, type: "State" },
    { name: "Telangana Kisan Credit Card (State Scheme)", state: "Telangana", profitability: 81, type: "State" },
    { name: "Telangana Micro Irrigation Scheme", state: "Telangana", profitability: 87, type: "State" },
    { name: "Telangana Organic Farming Promotion Scheme", state: "Telangana", profitability: 90, type: "State" },
    { name: "Telangana Integrated Farming System Scheme", state: "Telangana", profitability: 84, type: "State" },
    { name: "Telangana Agriculture Warehouse Scheme", state: "Telangana", profitability: 77, type: "State" },
    { name: "Telangana Agriculture Marketing Scheme", state: "Telangana", profitability: 89, type: "State" },
    { name: "Telangana Farm Mechanization Scheme", state: "Telangana", profitability: 82, type: "State" },
    { name: "Telangana Jal Shakti Abhiyan (Krishi)", state: "Telangana", profitability: 85, type: "State" },
    { name: "Telangana Farmer Producer Organization (FPO) Promotion Scheme", state: "Telangana", profitability: 88, type: "State" },
    { name: "Telangana Agriculture Diversification Scheme", state: "Telangana", profitability: 84, type: "State" },
    { name: "Telangana Agriculture Technology Management Agency (ATMA) Scheme", state: "Telangana", profitability: 87, type: "State" },
    { name: "Telangana Rashtriya Krishi Vikas Yojana (State Component)", state: "Telangana", profitability: 90, type: "State" },
    { name: "Telangana Seed Replacement Scheme", state: "Telangana", profitability: 77, type: "State" },
    { name: "Telangana Food Processing Mission", state: "Telangana", profitability: 89, type: "State" },
    { name: "Telangana Protected Cultivation Scheme", state: "Telangana", profitability: 83, type: "State" },
    { name: "Telangana Post Harvest Management Scheme", state: "Telangana", profitability: 80, type: "State" },
    { name: "Telangana Agriculture Export Promotion Scheme", state: "Telangana", profitability: 82, type: "State" },
    { name: "Telangana Agro Forestry Scheme", state: "Telangana", profitability: 85, type: "State" },
    { name: "Telangana Cold Storage Construction Scheme", state: "Telangana", profitability: 88, type: "State" },
    { name: "Telangana Farm Pond Scheme", state: "Telangana", profitability: 81, type: "State" },
    { name: "Telangana Agriculture Road Scheme", state: "Telangana", profitability: 84, type: "State" },
    { name: "Telangana Dairy Development Scheme", state: "Telangana", profitability: 87, type: "State" },
    { name: "Telangana Rythu Bima", state: "Telangana", profitability: 86, type: "State" },
    { name: "Telangana Mission Kakatiya (Agriculture Component)", state: "Telangana", profitability: 83, type: "State" },

        
    // Odisha State Government Schemes for Farmers:

    { name: "Odisha KALIA (Krushak Assistance for Livelihood and Income Augmentation)", state: "Odisha", profitability: 86, type: "State" },
    { name: "Odisha Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Odisha", profitability: 80, type: "State" },
    { name: "Odisha Beej Anudan Yojana", state: "Odisha", profitability: 82, type: "State" },
    { name: "Odisha Krishi Yantra Anudan Yojana", state: "Odisha", profitability: 88, type: "State" },
    { name: "Odisha Horticulture Mission", state: "Odisha", profitability: 78, type: "State" },
    { name: "Odisha Pashudhan Vikas Yojana", state: "Odisha", profitability: 83, type: "State" },
    { name: "Odisha Matsya Palan Yojana", state: "Odisha", profitability: 79, type: "State" },
    { name: "Odisha Soil Health Card Scheme (State)", state: "Odisha", profitability: 85, type: "State" },
    { name: "Odisha Kisan Credit Card (State Scheme)", state: "Odisha", profitability: 81, type: "State" },
    { name: "Odisha Micro Irrigation Scheme", state: "Odisha", profitability: 87, type: "State" },
    { name: "Odisha Organic Farming Promotion Scheme", state: "Odisha", profitability: 90, type: "State" },
    { name: "Odisha Integrated Farming System Scheme", state: "Odisha", profitability: 84, type: "State" },
    { name: "Odisha Agriculture Warehouse Scheme", state: "Odisha", profitability: 77, type: "State" },
    { name: "Odisha Agriculture Marketing Scheme", state: "Odisha", profitability: 89, type: "State" },
    { name: "Odisha Farm Mechanization Scheme", state: "Odisha", profitability: 82, type: "State" },
    { name: "Odisha Jal Shakti Abhiyan (Krishi)", state: "Odisha", profitability: 85, type: "State" },
    { name: "Odisha Farmer Producer Organization (FPO) Promotion Scheme", state: "Odisha", profitability: 88, type: "State" },
    { name: "Odisha Agriculture Diversification Scheme", state: "Odisha", profitability: 84, type: "State" },
    { name: "Odisha Agriculture Technology Management Agency (ATMA) Scheme", state: "Odisha", profitability: 87, type: "State" },
    { name: "Odisha Rashtriya Krishi Vikas Yojana (State Component)", state: "Odisha", profitability: 90, type: "State" },
    { name: "Odisha Seed Replacement Scheme", state: "Odisha", profitability: 77, type: "State" },
    { name: "Odisha Food Processing Mission", state: "Odisha", profitability: 89, type: "State" },
    { name: "Odisha Protected Cultivation Scheme", state: "Odisha", profitability: 83, type: "State" },
    { name: "Odisha Post Harvest Management Scheme", state: "Odisha", profitability: 80, type: "State" },
    { name: "Odisha Agriculture Export Promotion Scheme", state: "Odisha", profitability: 82, type: "State" },
    { name: "Odisha Agro Forestry Scheme", state: "Odisha", profitability: 85, type: "State" },
    { name: "Odisha Cold Storage Construction Scheme", state: "Odisha", profitability: 88, type: "State" },
    { name: "Odisha Farm Pond Scheme", state: "Odisha", profitability: 81, type: "State" },
    { name: "Odisha Agriculture Road Scheme", state: "Odisha", profitability: 84, type: "State" },
    { name: "Odisha Dairy Development Scheme", state: "Odisha", profitability: 87, type: "State" },
    { name: "Odisha Biju Krushak Vikas Yojana", state: "Odisha", profitability: 86, type: "State" },
    { name: "Odisha Mukhyamantri Krushi Udyog Yojana", state: "Odisha", profitability: 83, type: "State" },

   // Jharkhand State Government Schemes for Farmers:

    { name: "Mukhyamantri Krishi Ashirwad Yojana", state: "Jharkhand", landMax: 5, profitability: 82, type: "State" },
    { name: "Jharkhand Fasal Rahat Yojana", state: "Jharkhand", profitability: 85, type: "State" },
    { name: "Jharkhand Beej Vitran Yojana", state: "Jharkhand", profitability: 80, type: "State" },
    { name: "Jharkhand Krishi Yantrikaran Yojana", state: "Jharkhand", profitability: 88, type: "State" },
    { name: "Jharkhand Bagwani Mission", state: "Jharkhand", profitability: 78, type: "State" },
    { name: "Jharkhand Godhan Nyay Yojana", state: "Jharkhand", profitability: 83, type: "State" },
    { name: "Jharkhand Matsya Palan Yojana", state: "Jharkhand", profitability: 79, type: "State" },
    { name: "Jharkhand Soil Health Card Scheme (State)", state: "Jharkhand", profitability: 86, type: "State" },
    { name: "Jharkhand Kisan Credit Card (State Scheme)", state: "Jharkhand", profitability: 81, type: "State" },
    { name: "Jharkhand Micro Irrigation Scheme", state: "Jharkhand", profitability: 84, type: "State" },
    { name: "Jharkhand Organic Farming Promotion Scheme", state: "Jharkhand", profitability: 87, type: "State" },
    { name: "Jharkhand Integrated Farming System Scheme", state: "Jharkhand", profitability: 90, type: "State" },
    { name: "Jharkhand Agriculture Warehouse Scheme", state: "Jharkhand", profitability: 77, type: "State" },
    { name: "Jharkhand Agriculture Marketing Scheme", state: "Jharkhand", profitability: 89, type: "State" },
    { name: "Jharkhand Animal Husbandry Scheme", state: "Jharkhand", profitability: 83, type: "State" },
    { name: "Jharkhand Crop Insurance Scheme (State)", state: "Jharkhand", profitability: 80, type: "State" },
    { name: "Jharkhand Farm Mechanization Scheme", state: "Jharkhand", profitability: 82, type: "State" },
    { name: "Jharkhand Jal Shakti Abhiyan (Krishi)", state: "Jharkhand", profitability: 85, type: "State" },
    { name: "Jharkhand Farmer Producer Organization (FPO) Promotion Scheme", state: "Jharkhand", profitability: 88, type: "State" },
    { name: "Jharkhand Horticulture Mission", state: "Jharkhand", profitability: 81, type: "State" },
    { name: "Jharkhand Agriculture Diversification Scheme", state: "Jharkhand", profitability: 84, type: "State" },
    { name: "Jharkhand Agriculture Technology Management Agency (ATMA) Scheme", state: "Jharkhand", profitability: 87, type: "State" },
    { name: "Jharkhand Rashtriya Krishi Vikas Yojana (State Component)", state: "Jharkhand", profitability: 90, type: "State" },
    { name: "Jharkhand Seed Replacement Scheme", state: "Jharkhand", profitability: 77, type: "State" },
    { name: "Jharkhand Food Processing Mission", state: "Jharkhand", profitability: 89, type: "State" },
    { name: "Jharkhand Protected Cultivation Scheme", state: "Jharkhand", profitability: 83, type: "State" },
    { name: "Jharkhand Post Harvest Management Scheme", state: "Jharkhand", profitability: 80, type: "State" },
    { name: "Jharkhand Agriculture Export Promotion Scheme", state: "Jharkhand", profitability: 82, type: "State" },
    { name: "Jharkhand Agro Forestry Scheme", state: "Jharkhand", profitability: 85, type: "State" },
    { name: "Jharkhand Cold Storage Construction Scheme", state: "Jharkhand", profitability: 88, type: "State" },
    { name: "Jharkhand Farm Pond Scheme", state: "Jharkhand", profitability: 81, type: "State" },
    { name: "Jharkhand Agriculture Road Scheme", state: "Jharkhand", profitability: 84, type: "State" },
    { name: "Jharkhand Dairy Development Scheme", state: "Jharkhand", profitability: 87, type: "State" },

    
   // Gujarat State Government Schemes for Farmers:

    { name: "Gujarat Kisan Sahay Yojana", state: "Gujarat", profitability: 84, type: "State" },
    { name: "Gujarat Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Gujarat", profitability: 80, type: "State" },
    { name: "Gujarat Beej Anudan Yojana", state: "Gujarat", profitability: 82, type: "State" },
    { name: "Gujarat Krishi Yantra Anudan Yojana", state: "Gujarat", profitability: 88, type: "State" },
    { name: "Gujarat Horticulture Mission", state: "Gujarat", profitability: 78, type: "State" },
    { name: "Gujarat Pashupalan Sahay Yojana", state: "Gujarat", profitability: 83, type: "State" },
    { name: "Gujarat Matsya Palan Sahay Yojana", state: "Gujarat", profitability: 79, type: "State" },
    { name: "Gujarat Soil Health Card Scheme (State)", state: "Gujarat", profitability: 85, type: "State" },
    { name: "Gujarat Kisan Credit Card (State Scheme)", state: "Gujarat", profitability: 81, type: "State" },
    { name: "Gujarat Micro Irrigation Scheme", state: "Gujarat", profitability: 87, type: "State" },
    { name: "Gujarat Organic Farming Promotion Scheme", state: "Gujarat", profitability: 90, type: "State" },
    { name: "Gujarat Integrated Farming System Scheme", state: "Gujarat", profitability: 84, type: "State" },
    { name: "Gujarat Agriculture Warehouse Scheme", state: "Gujarat", profitability: 77, type: "State" },
    { name: "Gujarat Agriculture Marketing Scheme", state: "Gujarat", profitability: 89, type: "State" },
    { name: "Gujarat Farm Mechanization Scheme", state: "Gujarat", profitability: 82, type: "State" },
    { name: "Gujarat Jal Shakti Abhiyan (Krishi)", state: "Gujarat", profitability: 85, type: "State" },
    { name: "Gujarat Farmer Producer Organization (FPO) Promotion Scheme", state: "Gujarat", profitability: 88, type: "State" },
    { name: "Gujarat Agriculture Diversification Scheme", state: "Gujarat", profitability: 84, type: "State" },
    { name: "Gujarat Agriculture Technology Management Agency (ATMA) Scheme", state: "Gujarat", profitability: 87, type: "State" },
    { name: "Gujarat Rashtriya Krishi Vikas Yojana (State Component)", state: "Gujarat", profitability: 90, type: "State" },
    { name: "Gujarat Seed Replacement Scheme", state: "Gujarat", profitability: 77, type: "State" },
    { name: "Gujarat Food Processing Mission", state: "Gujarat", profitability: 89, type: "State" },
    { name: "Gujarat Protected Cultivation Scheme", state: "Gujarat", profitability: 83, type: "State" },
    { name: "Gujarat Post Harvest Management Scheme", state: "Gujarat", profitability: 80, type: "State" },
    { name: "Gujarat Agriculture Export Promotion Scheme", state: "Gujarat", profitability: 82, type: "State" },
    { name: "Gujarat Agro Forestry Scheme", state: "Gujarat", profitability: 85, type: "State" },
    { name: "Gujarat Cold Storage Construction Scheme", state: "Gujarat", profitability: 88, type: "State" },
    { name: "Gujarat Farm Pond Scheme", state: "Gujarat", profitability: 81, type: "State" },
    { name: "Gujarat Agriculture Road Scheme", state: "Gujarat", profitability: 84, type: "State" },
    { name: "Gujarat Dairy Development Scheme", state: "Gujarat", profitability: 87, type: "State" },
    { name: "Gujarat Solar Pump Yojana", state: "Gujarat", profitability: 86, type: "State" },
    { name: "Gujarat Mukhyamantri Pak Sangraha Godown Yojana", state: "Gujarat", profitability: 83, type: "State" },

        
// Andhra Pradesh State Government Schemes for Farmers:

    { name: "Andhra Pradesh YSR Rythu Bharosa", state: "Andhra Pradesh", profitability: 86, type: "State" },
    { name: "Andhra Pradesh Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Andhra Pradesh", profitability: 80, type: "State" },
    { name: "Andhra Pradesh Beej Anudan Yojana", state: "Andhra Pradesh", profitability: 82, type: "State" },
    { name: "Andhra Pradesh Krishi Yantra Anudan Yojana", state: "Andhra Pradesh", profitability: 88, type: "State" },
    { name: "Andhra Pradesh Horticulture Mission", state: "Andhra Pradesh", profitability: 78, type: "State" },
    { name: "Andhra Pradesh Pashudhan Vikas Yojana", state: "Andhra Pradesh", profitability: 83, type: "State" },
    { name: "Andhra Pradesh Matsya Palan Yojana", state: "Andhra Pradesh", profitability: 79, type: "State" },
    { name: "Andhra Pradesh Soil Health Card Scheme (State)", state: "Andhra Pradesh", profitability: 85, type: "State" },
    { name: "Andhra Pradesh Kisan Credit Card (State Scheme)", state: "Andhra Pradesh", profitability: 81, type: "State" },
    { name: "Andhra Pradesh Micro Irrigation Scheme", state: "Andhra Pradesh", profitability: 87, type: "State" },
    { name: "Andhra Pradesh Organic Farming Promotion Scheme", state: "Andhra Pradesh", profitability: 90, type: "State" },
    { name: "Andhra Pradesh Integrated Farming System Scheme", state: "Andhra Pradesh", profitability: 84, type: "State" },
    { name: "Andhra Pradesh Agriculture Warehouse Scheme", state: "Andhra Pradesh", profitability: 77, type: "State" },
    { name: "Andhra Pradesh Agriculture Marketing Scheme", state: "Andhra Pradesh", profitability: 89, type: "State" },
    { name: "Andhra Pradesh Farm Mechanization Scheme", state: "Andhra Pradesh", profitability: 82, type: "State" },
    { name: "Andhra Pradesh Jal Shakti Abhiyan (Krishi)", state: "Andhra Pradesh", profitability: 85, type: "State" },
    { name: "Andhra Pradesh Farmer Producer Organization (FPO) Promotion Scheme", state: "Andhra Pradesh", profitability: 88, type: "State" },
    { name: "Andhra Pradesh Agriculture Diversification Scheme", state: "Andhra Pradesh", profitability: 84, type: "State" },
    { name: "Andhra Pradesh Agriculture Technology Management Agency (ATMA) Scheme", state: "Andhra Pradesh", profitability: 87, type: "State" },
    { name: "Andhra Pradesh Rashtriya Krishi Vikas Yojana (State Component)", state: "Andhra Pradesh", profitability: 90, type: "State" },
    { name: "Andhra Pradesh Seed Replacement Scheme", state: "Andhra Pradesh", profitability: 77, type: "State" },
    { name: "Andhra Pradesh Food Processing Mission", state: "Andhra Pradesh", profitability: 89, type: "State" },
    { name: "Andhra Pradesh Protected Cultivation Scheme", state: "Andhra Pradesh", profitability: 83, type: "State" },
    { name: "Andhra Pradesh Post Harvest Management Scheme", state: "Andhra Pradesh", profitability: 80, type: "State" },
    { name: "Andhra Pradesh Agriculture Export Promotion Scheme", state: "Andhra Pradesh", profitability: 82, type: "State" },
    { name: "Andhra Pradesh Agro Forestry Scheme", state: "Andhra Pradesh", profitability: 85, type: "State" },
    { name: "Andhra Pradesh Cold Storage Construction Scheme", state: "Andhra Pradesh", profitability: 88, type: "State" },
    { name: "Andhra Pradesh Farm Pond Scheme", state: "Andhra Pradesh", profitability: 81, type: "State" },
    { name: "Andhra Pradesh Agriculture Road Scheme", state: "Andhra Pradesh", profitability: 84, type: "State" },
    { name: "Andhra Pradesh Dairy Development Scheme", state: "Andhra Pradesh", profitability: 87, type: "State" },
    { name: "Andhra Pradesh YSR Jala Kala", state: "Andhra Pradesh", profitability: 85, type: "State" },
    { name: "Andhra Pradesh YSR Zero Interest Crop Loan Scheme", state: "Andhra Pradesh", profitability: 83, type: "State" },

        
   // Chhattisgarh State Government Schemes for Farmers:

    { name: "Chhattisgarh Rajiv Gandhi Kisan Nyay Yojana", state: "Chhattisgarh", profitability: 85, type: "State" },
    { name: "Chhattisgarh Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Chhattisgarh", profitability: 80, type: "State" },
    { name: "Chhattisgarh Beej Anudan Yojana", state: "Chhattisgarh", profitability: 82, type: "State" },
    { name: "Chhattisgarh Krishi Yantra Anudan Yojana", state: "Chhattisgarh", profitability: 88, type: "State" },
    { name: "Chhattisgarh Horticulture Mission", state: "Chhattisgarh", profitability: 78, type: "State" },
    { name: "Chhattisgarh Pashudhan Vikas Yojana", state: "Chhattisgarh", profitability: 83, type: "State" },
    { name: "Chhattisgarh Matsya Palan Yojana", state: "Chhattisgarh", profitability: 79, type: "State" },
    { name: "Chhattisgarh Soil Health Card Scheme (State)", state: "Chhattisgarh", profitability: 85, type: "State" },
    { name: "Chhattisgarh Kisan Credit Card (State Scheme)", state: "Chhattisgarh", profitability: 81, type: "State" },
    { name: "Chhattisgarh Micro Irrigation Scheme", state: "Chhattisgarh", profitability: 87, type: "State" },
    { name: "Chhattisgarh Organic Farming Promotion Scheme", state: "Chhattisgarh", profitability: 90, type: "State" },
    { name: "Chhattisgarh Integrated Farming System Scheme", state: "Chhattisgarh", profitability: 84, type: "State" },
    { name: "Chhattisgarh Agriculture Warehouse Scheme", state: "Chhattisgarh", profitability: 77, type: "State" },
    { name: "Chhattisgarh Agriculture Marketing Scheme", state: "Chhattisgarh", profitability: 89, type: "State" },
    { name: "Chhattisgarh Farm Mechanization Scheme", state: "Chhattisgarh", profitability: 82, type: "State" },
    { name: "Chhattisgarh Jal Shakti Abhiyan (Krishi)", state: "Chhattisgarh", profitability: 85, type: "State" },
    { name: "Chhattisgarh Farmer Producer Organization (FPO) Promotion Scheme", state: "Chhattisgarh", profitability: 88, type: "State" },
    { name: "Chhattisgarh Agriculture Diversification Scheme", state: "Chhattisgarh", profitability: 84, type: "State" },
    { name: "Chhattisgarh Agriculture Technology Management Agency (ATMA) Scheme", state: "Chhattisgarh", profitability: 87, type: "State" },
    { name: "Chhattisgarh Rashtriya Krishi Vikas Yojana (State Component)", state: "Chhattisgarh", profitability: 90, type: "State" },
    { name: "Chhattisgarh Seed Replacement Scheme", state: "Chhattisgarh", profitability: 77, type: "State" },
    { name: "Chhattisgarh Food Processing Mission", state: "Chhattisgarh", profitability: 89, type: "State" },
    { name: "Chhattisgarh Protected Cultivation Scheme", state: "Chhattisgarh", profitability: 83, type: "State" },
    { name: "Chhattisgarh Post Harvest Management Scheme", state: "Chhattisgarh", profitability: 80, type: "State" },
    { name: "Chhattisgarh Agriculture Export Promotion Scheme", state: "Chhattisgarh", profitability: 82, type: "State" },
    { name: "Chhattisgarh Agro Forestry Scheme", state: "Chhattisgarh", profitability: 85, type: "State" },
    { name: "Chhattisgarh Cold Storage Construction Scheme", state: "Chhattisgarh", profitability: 88, type: "State" },
    { name: "Chhattisgarh Farm Pond Scheme", state: "Chhattisgarh", profitability: 81, type: "State" },
    { name: "Chhattisgarh Agriculture Road Scheme", state: "Chhattisgarh", profitability: 84, type: "State" },
    { name: "Chhattisgarh Dairy Development Scheme", state: "Chhattisgarh", profitability: 87, type: "State" },
    { name: "Chhattisgarh Godhan Nyay Yojana", state: "Chhattisgarh", profitability: 86, type: "State" },
    { name: "Chhattisgarh Millet Mission", state: "Chhattisgarh", profitability: 83, type: "State" },

   // Haryana State Government Schemes for Farmers:

    { name: "Samman Nidhi Yojana", state: "Haryana", landMax: 5, incomeMax: 300000, profitability: 75, type: "State" },
    { name: "Haryana Fasal Bima Yojana", state: "Haryana", profitability: 80, type: "State" },
    { name: "Haryana Beej Anudan Yojana", state: "Haryana", profitability: 82, type: "State" },
    { name: "Haryana Krishi Yantra Anudan Yojana", state: "Haryana", profitability: 88, type: "State" },
    { name: "Haryana Bagwani Mission", state: "Haryana", profitability: 78, type: "State" },
    { name: "Haryana Pashudhan Bima Yojana", state: "Haryana", profitability: 83, type: "State" },
    { name: "Haryana Matsya Palan Yojana", state: "Haryana", profitability: 79, type: "State" },
    { name: "Haryana Soil Health Card Scheme (State)", state: "Haryana", profitability: 85, type: "State" },
    { name: "Haryana Kisan Credit Card (State Scheme)", state: "Haryana", profitability: 81, type: "State" },
    { name: "Haryana Micro Irrigation Scheme", state: "Haryana", profitability: 87, type: "State" },
    { name: "Haryana Organic Farming Promotion Scheme", state: "Haryana", profitability: 90, type: "State" },
    { name: "Haryana Integrated Farming System Scheme", state: "Haryana", profitability: 84, type: "State" },
    { name: "Haryana Agriculture Warehouse Scheme", state: "Haryana", profitability: 77, type: "State" },
    { name: "Haryana Agriculture Marketing Scheme", state: "Haryana", profitability: 89, type: "State" },
    { name: "Haryana Farm Mechanization Scheme", state: "Haryana", profitability: 82, type: "State" },
    { name: "Haryana Jal Shakti Abhiyan (Krishi)", state: "Haryana", profitability: 85, type: "State" },
    { name: "Haryana Farmer Producer Organization (FPO) Promotion Scheme", state: "Haryana", profitability: 88, type: "State" },
    { name: "Haryana Horticulture Mission", state: "Haryana", profitability: 81, type: "State" },
    { name: "Haryana Agriculture Diversification Scheme", state: "Haryana", profitability: 84, type: "State" },
    { name: "Haryana Agriculture Technology Management Agency (ATMA) Scheme", state: "Haryana", profitability: 87, type: "State" },
    { name: "Haryana Rashtriya Krishi Vikas Yojana (State Component)", state: "Haryana", profitability: 90, type: "State" },
    { name: "Haryana Seed Replacement Scheme", state: "Haryana", profitability: 77, type: "State" },
    { name: "Haryana Food Processing Mission", state: "Haryana", profitability: 89, type: "State" },
    { name: "Haryana Protected Cultivation Scheme", state: "Haryana", profitability: 83, type: "State" },
    { name: "Haryana Post Harvest Management Scheme", state: "Haryana", profitability: 80, type: "State" },
    { name: "Haryana Agriculture Export Promotion Scheme", state: "Haryana", profitability: 82, type: "State" },
    { name: "Haryana Agro Forestry Scheme", state: "Haryana", profitability: 85, type: "State" },
    { name: "Haryana Cold Storage Construction Scheme", state: "Haryana", profitability: 88, type: "State" },
    { name: "Haryana Farm Pond Scheme", state: "Haryana", profitability: 81, type: "State" },
    { name: "Haryana Agriculture Road Scheme", state: "Haryana", profitability: 84, type: "State" },
    { name: "Haryana Dairy Development Scheme", state: "Haryana", profitability: 87, type: "State" },
    { name: "Haryana Kisan Mitra Yojana", state: "Haryana", profitability: 83, type: "State" },
    { name: "Haryana Jal Jeevan Mission (Krishi)", state: "Haryana", profitability: 79, type: "State" },

        
    // Assam State Government Schemes for Farmers:

    { name: "Mukhya Mantri Krishi Sa Sajuli Yojana", state: "Assam", landMin: 1, landMax: 5, profitability: 77, type: "State" },
    { name: "Assam Fasal Bima Yojana", state: "Assam", profitability: 80, type: "State" },
    { name: "Assam Beej Anudan Yojana", state: "Assam", profitability: 82, type: "State" },
    { name: "Assam Krishi Yantra Anudan Yojana", state: "Assam", profitability: 88, type: "State" },
    { name: "Assam Horticulture Mission", state: "Assam", profitability: 78, type: "State" },
    { name: "Assam Pashudhan Vikas Yojana", state: "Assam", profitability: 83, type: "State" },
    { name: "Assam Matsya Palan Yojana", state: "Assam", profitability: 79, type: "State" },
    { name: "Assam Soil Health Card Scheme (State)", state: "Assam", profitability: 85, type: "State" },
    { name: "Assam Kisan Credit Card (State Scheme)", state: "Assam", profitability: 81, type: "State" },
    { name: "Assam Micro Irrigation Scheme", state: "Assam", profitability: 87, type: "State" },
    { name: "Assam Organic Farming Promotion Scheme", state: "Assam", profitability: 90, type: "State" },
    { name: "Assam Integrated Farming System Scheme", state: "Assam", profitability: 84, type: "State" },
    { name: "Assam Agriculture Warehouse Scheme", state: "Assam", profitability: 77, type: "State" },
    { name: "Assam Agriculture Marketing Scheme", state: "Assam", profitability: 89, type: "State" },
    { name: "Assam Farm Mechanization Scheme", state: "Assam", profitability: 82, type: "State" },
    { name: "Assam Jal Shakti Abhiyan (Krishi)", state: "Assam", profitability: 85, type: "State" },
    { name: "Assam Farmer Producer Organization (FPO) Promotion Scheme", state: "Assam", profitability: 88, type: "State" },
    { name: "Assam Agriculture Diversification Scheme", state: "Assam", profitability: 84, type: "State" },
    { name: "Assam Agriculture Technology Management Agency (ATMA) Scheme", state: "Assam", profitability: 87, type: "State" },
    { name: "Assam Rashtriya Krishi Vikas Yojana (State Component)", state: "Assam", profitability: 90, type: "State" },
    { name: "Assam Seed Replacement Scheme", state: "Assam", profitability: 77, type: "State" },
    { name: "Assam Food Processing Mission", state: "Assam", profitability: 89, type: "State" },
    { name: "Assam Protected Cultivation Scheme", state: "Assam", profitability: 83, type: "State" },
    { name: "Assam Post Harvest Management Scheme", state: "Assam", profitability: 80, type: "State" },
    { name: "Assam Agriculture Export Promotion Scheme", state: "Assam", profitability: 82, type: "State" },
    { name: "Assam Agro Forestry Scheme", state: "Assam", profitability: 85, type: "State" },
    { name: "Assam Cold Storage Construction Scheme", state: "Assam", profitability: 88, type: "State" },
    { name: "Assam Farm Pond Scheme", state: "Assam", profitability: 81, type: "State" },
    { name: "Assam Agriculture Road Scheme", state: "Assam", profitability: 84, type: "State" },
    { name: "Assam Dairy Development Scheme", state: "Assam", profitability: 87, type: "State" },
    { name: "Assam Chief Minister Samagra Gramya Unnayan Yojana (CMSGUY) - Agriculture Component", state: "Assam", profitability: 86, type: "State" },
    { name: "Assam Integrated Bee Development Centre Scheme", state: "Assam", profitability: 83, type: "State" },

        
  // Tamil Nadu State Government Schemes for Farmers:

    { name: "Tamil Nadu Crop Loan Waiver Scheme", state: "Tamil Nadu", profitability: 84, type: "State" },
    { name: "Tamil Nadu Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Tamil Nadu", profitability: 80, type: "State" },
    { name: "Tamil Nadu Beej Anudan Yojana", state: "Tamil Nadu", profitability: 82, type: "State" },
    { name: "Tamil Nadu Krishi Yantra Anudan Yojana", state: "Tamil Nadu", profitability: 88, type: "State" },
    { name: "Tamil Nadu Horticulture Mission", state: "Tamil Nadu", profitability: 78, type: "State" },
    { name: "Tamil Nadu Pashudhan Vikas Yojana", state: "Tamil Nadu", profitability: 83, type: "State" },
    { name: "Tamil Nadu Matsya Valarchi Thittam", state: "Tamil Nadu", profitability: 79, type: "State" },
    { name: "Tamil Nadu Soil Health Card Scheme (State)", state: "Tamil Nadu", profitability: 85, type: "State" },
    { name: "Tamil Nadu Kisan Credit Card (State Scheme)", state: "Tamil Nadu", profitability: 81, type: "State" },
    { name: "Tamil Nadu Micro Irrigation Scheme", state: "Tamil Nadu", profitability: 87, type: "State" },
    { name: "Tamil Nadu Organic Farming Promotion Scheme", state: "Tamil Nadu", profitability: 90, type: "State" },
    { name: "Tamil Nadu Integrated Farming System Scheme", state: "Tamil Nadu", profitability: 84, type: "State" },
    { name: "Tamil Nadu Agriculture Warehouse Scheme", state: "Tamil Nadu", profitability: 77, type: "State" },
    { name: "Tamil Nadu Agriculture Marketing Scheme", state: "Tamil Nadu", profitability: 89, type: "State" },
    { name: "Tamil Nadu Farm Mechanization Scheme", state: "Tamil Nadu", profitability: 82, type: "State" },
    { name: "Tamil Nadu Jal Shakti Abhiyan (Krishi)", state: "Tamil Nadu", profitability: 85, type: "State" },
    { name: "Tamil Nadu Farmer Producer Organization (FPO) Promotion Scheme", state: "Tamil Nadu", profitability: 88, type: "State" },
    { name: "Tamil Nadu Agriculture Diversification Scheme", state: "Tamil Nadu", profitability: 84, type: "State" },
    { name: "Tamil Nadu Agriculture Technology Management Agency (ATMA) Scheme", state: "Tamil Nadu", profitability: 87, type: "State" },
    { name: "Tamil Nadu Rashtriya Krishi Vikas Yojana (State Component)", state: "Tamil Nadu", profitability: 90, type: "State" },
    { name: "Tamil Nadu Seed Replacement Scheme", state: "Tamil Nadu", profitability: 77, type: "State" },
    { name: "Tamil Nadu Food Processing Mission", state: "Tamil Nadu", profitability: 89, type: "State" },
    { name: "Tamil Nadu Protected Cultivation Scheme", state: "Tamil Nadu", profitability: 83, type: "State" },
    { name: "Tamil Nadu Post Harvest Management Scheme", state: "Tamil Nadu", profitability: 80, type: "State" },
    { name: "Tamil Nadu Agriculture Export Promotion Scheme", state: "Tamil Nadu", profitability: 82, type: "State" },
    { name: "Tamil Nadu Agro Forestry Scheme", state: "Tamil Nadu", profitability: 85, type: "State" },
    { name: "Tamil Nadu Cold Storage Construction Scheme", state: "Tamil Nadu", profitability: 88, type: "State" },
    { name: "Tamil Nadu Farm Pond Scheme", state: "Tamil Nadu", profitability: 81, type: "State" },
    { name: "Tamil Nadu Agriculture Road Scheme", state: "Tamil Nadu", profitability: 84, type: "State" },
    { name: "Tamil Nadu Dairy Development Scheme", state: "Tamil Nadu", profitability: 87, type: "State" },
    { name: "Tamil Nadu Chief Minister's Solar Powered Pump Set Scheme", state: "Tamil Nadu", profitability: 86, type: "State" },
    { name: "Tamil Nadu Precision Farming Scheme", state: "Tamil Nadu", profitability: 83, type: "State" },

    
    // Kerala State Government Schemes for Farmers:

    { name: "Kerala Karshaka Kshemanidhi Board", state: "Kerala", profitability: 81, type: "State" },
    { name: "Kerala Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Kerala", profitability: 80, type: "State" },
    { name: "Kerala Beej Anudan Yojana", state: "Kerala", profitability: 82, type: "State" },
    { name: "Kerala Krishi Yantra Anudan Yojana", state: "Kerala", profitability: 88, type: "State" },
    { name: "Kerala Horticulture Mission", state: "Kerala", profitability: 78, type: "State" },
    { name: "Kerala Pashudhan Vikas Yojana", state: "Kerala", profitability: 83, type: "State" },
    { name: "Kerala Matsya Vikas Yojana", state: "Kerala", profitability: 79, type: "State" },
    { name: "Kerala Soil Health Card Scheme (State)", state: "Kerala", profitability: 85, type: "State" },
    { name: "Kerala Kisan Credit Card (State Scheme)", state: "Kerala", profitability: 81, type: "State" },
    { name: "Kerala Micro Irrigation Scheme", state: "Kerala", profitability: 87, type: "State" },
    { name: "Kerala Organic Farming Promotion Scheme", state: "Kerala", profitability: 90, type: "State" },
    { name: "Kerala Integrated Farming System Scheme", state: "Kerala", profitability: 84, type: "State" },
    { name: "Kerala Agriculture Warehouse Scheme", state: "Kerala", profitability: 77, type: "State" },
    { name: "Kerala Agriculture Marketing Scheme", state: "Kerala", profitability: 89, type: "State" },
    { name: "Kerala Farm Mechanization Scheme", state: "Kerala", profitability: 82, type: "State" },
    { name: "Kerala Jal Shakti Abhiyan (Krishi)", state: "Kerala", profitability: 85, type: "State" },
    { name: "Kerala Farmer Producer Organization (FPO) Promotion Scheme", state: "Kerala", profitability: 88, type: "State" },
    { name: "Kerala Agriculture Diversification Scheme", state: "Kerala", profitability: 84, type: "State" },
    { name: "Kerala Agriculture Technology Management Agency (ATMA) Scheme", state: "Kerala", profitability: 87, type: "State" },
    { name: "Kerala Rashtriya Krishi Vikas Yojana (State Component)", state: "Kerala", profitability: 90, type: "State" },
    { name: "Kerala Seed Replacement Scheme", state: "Kerala", profitability: 77, type: "State" },
    { name: "Kerala Food Processing Mission", state: "Kerala", profitability: 89, type: "State" },
    { name: "Kerala Protected Cultivation Scheme", state: "Kerala", profitability: 83, type: "State" },
    { name: "Kerala Post Harvest Management Scheme", state: "Kerala", profitability: 80, type: "State" },
    { name: "Kerala Agriculture Export Promotion Scheme", state: "Kerala", profitability: 82, type: "State" },
    { name: "Kerala Agro Forestry Scheme", state: "Kerala", profitability: 85, type: "State" },
    { name: "Kerala Cold Storage Construction Scheme", state: "Kerala", profitability: 88, type: "State" },
    { name: "Kerala Farm Pond Scheme", state: "Kerala", profitability: 81, type: "State" },
    { name: "Kerala Agriculture Road Scheme", state: "Kerala", profitability: 84, type: "State" },
    { name: "Kerala Dairy Development Scheme", state: "Kerala", profitability: 87, type: "State" },
    { name: "Kerala State Horticulture Mission", state: "Kerala", profitability: 86, type: "State" },
    { name: "Kerala Coconut Development Programme", state: "Kerala", profitability: 83, type: "State" },

    // Punjab State Government Schemes for Farmers:

    { name: "Punjab Crop Diversification Programme", state: "Punjab", profitability: 79, type: "State" },
    { name: "Punjab Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Punjab", profitability: 80, type: "State" },
    { name: "Punjab Beej Anudan Yojana", state: "Punjab", profitability: 82, type: "State" },
    { name: "Punjab Krishi Yantra Anudan Yojana", state: "Punjab", profitability: 88, type: "State" },
    { name: "Punjab Horticulture Mission", state: "Punjab", profitability: 78, type: "State" },
    { name: "Punjab Pashudhan Vikas Yojana", state: "Punjab", profitability: 83, type: "State" },
    { name: "Punjab Matsya Palan Yojana", state: "Punjab", profitability: 79, type: "State" },
    { name: "Punjab Soil Health Card Scheme (State)", state: "Punjab", profitability: 85, type: "State" },
    { name: "Punjab Kisan Credit Card (State Scheme)", state: "Punjab", profitability: 81, type: "State" },
    { name: "Punjab Micro Irrigation Scheme", state: "Punjab", profitability: 87, type: "State" },
    { name: "Punjab Organic Farming Promotion Scheme", state: "Punjab", profitability: 90, type: "State" },
    { name: "Punjab Integrated Farming System Scheme", state: "Punjab", profitability: 84, type: "State" },
    { name: "Punjab Agriculture Warehouse Scheme", state: "Punjab", profitability: 77, type: "State" },
    { name: "Punjab Agriculture Marketing Scheme", state: "Punjab", profitability: 89, type: "State" },
    { name: "Punjab Farm Mechanization Scheme", state: "Punjab", profitability: 82, type: "State" },
    { name: "Punjab Jal Shakti Abhiyan (Krishi)", state: "Punjab", profitability: 85, type: "State" },
    { name: "Punjab Farmer Producer Organization (FPO) Promotion Scheme", state: "Punjab", profitability: 88, type: "State" },
    { name: "Punjab Agriculture Diversification Scheme", state: "Punjab", profitability: 84, type: "State" },
    { name: "Punjab Agriculture Technology Management Agency (ATMA) Scheme", state: "Punjab", profitability: 87, type: "State" },
    { name: "Punjab Rashtriya Krishi Vikas Yojana (State Component)", state: "Punjab", profitability: 90, type: "State" },
    { name: "Punjab Seed Replacement Scheme", state: "Punjab", profitability: 77, type: "State" },
    { name: "Punjab Food Processing Mission", state: "Punjab", profitability: 89, type: "State" },
    { name: "Punjab Protected Cultivation Scheme", state: "Punjab", profitability: 83, type: "State" },
    { name: "Punjab Post Harvest Management Scheme", state: "Punjab", profitability: 80, type: "State" },
    { name: "Punjab Agriculture Export Promotion Scheme", state: "Punjab", profitability: 82, type: "State" },
    { name: "Punjab Agro Forestry Scheme", state: "Punjab", profitability: 85, type: "State" },
    { name: "Punjab Cold Storage Construction Scheme", state: "Punjab", profitability: 88, type: "State" },
    { name: "Punjab Farm Pond Scheme", state: "Punjab", profitability: 81, type: "State" },
    { name: "Punjab Agriculture Road Scheme", state: "Punjab", profitability: 84, type: "State" },
    { name: "Punjab Dairy Development Scheme", state: "Punjab", profitability: 87, type: "State" },
    { name: "Punjab State Farmers' Commission Schemes", state: "Punjab", profitability: 86, type: "State" },
    { name: "Punjab Water Conservation Schemes for Agriculture", state: "Punjab", profitability: 83, type: "State" },

    
  // Rajasthan State Government Schemes for Farmers:

    { name: "Rajasthan Kisan Karj Mafi Yojana", state: "Rajasthan", profitability: 83, type: "State" },
    { name: "Rajasthan Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Rajasthan", profitability: 80, type: "State" },
    { name: "Rajasthan Beej Anudan Yojana", state: "Rajasthan", profitability: 82, type: "State" },
    { name: "Rajasthan Krishi Yantra Anudan Yojana", state: "Rajasthan", profitability: 88, type: "State" },
    { name: "Rajasthan Horticulture Mission", state: "Rajasthan", profitability: 78, type: "State" },
    { name: "Rajasthan Pashudhan Vikas Yojana", state: "Rajasthan", profitability: 83, type: "State" },
    { name: "Rajasthan Matsya Palan Yojana", state: "Rajasthan", profitability: 79, type: "State" },
    { name: "Rajasthan Soil Health Card Scheme (State)", state: "Rajasthan", profitability: 85, type: "State" },
    { name: "Rajasthan Kisan Credit Card (State Scheme)", state: "Rajasthan", profitability: 81, type: "State" },
    { name: "Rajasthan Micro Irrigation Scheme", state: "Rajasthan", profitability: 87, type: "State" },
    { name: "Rajasthan Organic Farming Promotion Scheme", state: "Rajasthan", profitability: 90, type: "State" },
    { name: "Rajasthan Integrated Farming System Scheme", state: "Rajasthan", profitability: 84, type: "State" },
    { name: "Rajasthan Agriculture Warehouse Scheme", state: "Rajasthan", profitability: 77, type: "State" },
    { name: "Rajasthan Agriculture Marketing Scheme", state: "Rajasthan", profitability: 89, type: "State" },
    { name: "Rajasthan Farm Mechanization Scheme", state: "Rajasthan", profitability: 82, type: "State" },
    { name: "Rajasthan Jal Shakti Abhiyan (Krishi)", state: "Rajasthan", profitability: 85, type: "State" },
    { name: "Rajasthan Farmer Producer Organization (FPO) Promotion Scheme", state: "Rajasthan", profitability: 88, type: "State" },
    { name: "Rajasthan Agriculture Diversification Scheme", state: "Rajasthan", profitability: 84, type: "State" },
    { name: "Rajasthan Agriculture Technology Management Agency (ATMA) Scheme", state: "Rajasthan", profitability: 87, type: "State" },
    { name: "Rajasthan Rashtriya Krishi Vikas Yojana (State Component)", state: "Rajasthan", profitability: 90, type: "State" },
    { name: "Rajasthan Seed Replacement Scheme", state: "Rajasthan", profitability: 77, type: "State" },
    { name: "Rajasthan Food Processing Mission", state: "Rajasthan", profitability: 89, type: "State" },
    { name: "Rajasthan Protected Cultivation Scheme", state: "Rajasthan", profitability: 83, type: "State" },
    { name: "Rajasthan Post Harvest Management Scheme", state: "Rajasthan", profitability: 80, type: "State" },
    { name: "Rajasthan Agriculture Export Promotion Scheme", state: "Rajasthan", profitability: 82, type: "State" },
    { name: "Rajasthan Agro Forestry Scheme", state: "Rajasthan", profitability: 85, type: "State" },
    { name: "Rajasthan Cold Storage Construction Scheme", state: "Rajasthan", profitability: 88, type: "State" },
    { name: "Rajasthan Farm Pond Scheme", state: "Rajasthan", profitability: 81, type: "State" },
    { name: "Rajasthan Agriculture Road Scheme", state: "Rajasthan", profitability: 84, type: "State" },
    { name: "Rajasthan Dairy Development Scheme", state: "Rajasthan", profitability: 87, type: "State" },
    { name: "Rajasthan Mukhyamantri Kisan Urja Suraksha Utthan Mahabhiyan (KUSUM-C)", state: "Rajasthan", profitability: 86, type: "State" },
    { name: "Rajasthan Jal Swavlamban Abhiyan (Agriculture Component)", state: "Rajasthan", profitability: 83, type: "State" },

        
    // Madhya Pradesh State Government Schemes for Farmers:

    { name: "Madhya Pradesh Bhavantar Bhugtan Yojana", state: "Madhya Pradesh", profitability: 86, type: "State" },
    { name: "Madhya Pradesh Kisan Kalyan Yojana", state: "Madhya Pradesh", profitability: 84, type: "State" },
    { name: "Madhya Pradesh Beej Anudan Yojana", state: "Madhya Pradesh", profitability: 80, type: "State" },
    { name: "Madhya Pradesh Krishi Yantrikaran Yojana", state: "Madhya Pradesh", profitability: 88, type: "State" },
    { name: "Madhya Pradesh Bagwani Mission", state: "Madhya Pradesh", profitability: 78, type: "State" },
    { name: "Madhya Pradesh Pashupalan Vikas Yojana", state: "Madhya Pradesh", profitability: 83, type: "State" },
    { name: "Madhya Pradesh Matsya Palan Yojana", state: "Madhya Pradesh", profitability: 79, type: "State" },
    { name: "Madhya Pradesh Soil Health Card Scheme (State)", state: "Madhya Pradesh", profitability: 85, type: "State" },
    { name: "Madhya Pradesh Kisan Credit Card (State Scheme)", state: "Madhya Pradesh", profitability: 81, type: "State" },
    { name: "Madhya Pradesh Micro Irrigation Scheme", state: "Madhya Pradesh", profitability: 87, type: "State" },
    { name: "Madhya Pradesh Organic Farming Promotion Scheme", state: "Madhya Pradesh", profitability: 90, type: "State" },
    { name: "Madhya Pradesh Integrated Farming System Scheme", state: "Madhya Pradesh", profitability: 82, type: "State" },
    { name: "Madhya Pradesh Agriculture Warehouse Scheme", state: "Madhya Pradesh", profitability: 77, type: "State" },
    { name: "Madhya Pradesh Agriculture Marketing Scheme", state: "Madhya Pradesh", profitability: 89, type: "State" },
    { name: "Madhya Pradesh Crop Insurance Scheme (State)", state: "Madhya Pradesh", profitability: 80, type: "State" },
    { name: "Madhya Pradesh Farm Mechanization Scheme", state: "Madhya Pradesh", profitability: 82, type: "State" },
    { name: "Madhya Pradesh Jal Shakti Abhiyan (Krishi)", state: "Madhya Pradesh", profitability: 85, type: "State" },
    { name: "Madhya Pradesh Farmer Producer Organization (FPO) Promotion Scheme", state: "Madhya Pradesh", profitability: 88, type: "State" },
    { name: "Madhya Pradesh Horticulture Mission", state: "Madhya Pradesh", profitability: 81, type: "State" },
    { name: "Madhya Pradesh Agriculture Diversification Scheme", state: "Madhya Pradesh", profitability: 84, type: "State" },
    { name: "Madhya Pradesh Agriculture Technology Management Agency (ATMA) Scheme", state: "Madhya Pradesh", profitability: 87, type: "State" },
    { name: "Madhya Pradesh Rashtriya Krishi Vikas Yojana (State Component)", state: "Madhya Pradesh", profitability: 90, type: "State" },
    { name: "Madhya Pradesh Seed Replacement Scheme", state: "Madhya Pradesh", profitability: 77, type: "State" },
    { name: "Madhya Pradesh Food Processing Mission", state: "Madhya Pradesh", profitability: 89, type: "State" },
    { name: "Madhya Pradesh Protected Cultivation Scheme", state: "Madhya Pradesh", profitability: 83, type: "State" },
    { name: "Madhya Pradesh Post Harvest Management Scheme", state: "Madhya Pradesh", profitability: 80, type: "State" },
    { name: "Madhya Pradesh Agriculture Export Promotion Scheme", state: "Madhya Pradesh", profitability: 82, type: "State" },
    { name: "Madhya Pradesh Agro Forestry Scheme", state: "Madhya Pradesh", profitability: 85, type: "State" },
    { name: "Madhya Pradesh Cold Storage Construction Scheme", state: "Madhya Pradesh", profitability: 88, type: "State" },
    { name: "Madhya Pradesh Farm Pond Scheme", state: "Madhya Pradesh", profitability: 81, type: "State" },
    { name: "Madhya Pradesh Agriculture Road Scheme", state: "Madhya Pradesh", profitability: 84, type: "State" },
    { name: "Madhya Pradesh Dairy Development Scheme", state: "Madhya Pradesh", profitability: 87, type: "State" },
    { name: "Madhya Pradesh Kisan Anudan Yojana", state: "Madhya Pradesh", profitability: 83, type: "State" },

        
    // Goa State Government Schemes for Farmers:

    { name: "Goa Krishi Card Scheme", state: "Goa", profitability: 76, type: "State" },
    { name: "Goa Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Goa", profitability: 80, type: "State" },
    { name: "Goa Beej Anudan Yojana", state: "Goa", profitability: 82, type: "State" },
    { name: "Goa Krishi Yantra Anudan Yojana", state: "Goa", profitability: 88, type: "State" },
    { name: "Goa Horticulture Mission", state: "Goa", profitability: 78, type: "State" },
    { name: "Goa Pashudhan Vikas Yojana", state: "Goa", profitability: 83, type: "State" },
    { name: "Goa Matsya Palan Yojana", state: "Goa", profitability: 79, type: "State" },
    { name: "Goa Soil Health Card Scheme (State)", state: "Goa", profitability: 85, type: "State" },
    { name: "Goa Kisan Credit Card (State Scheme)", state: "Goa", profitability: 81, type: "State" },
    { name: "Goa Micro Irrigation Scheme", state: "Goa", profitability: 87, type: "State" },
    { name: "Goa Organic Farming Promotion Scheme", state: "Goa", profitability: 90, type: "State" },
    { name: "Goa Integrated Farming System Scheme", state: "Goa", profitability: 84, type: "State" },
    { name: "Goa Agriculture Warehouse Scheme", state: "Goa", profitability: 77, type: "State" },
    { name: "Goa Agriculture Marketing Scheme", state: "Goa", profitability: 89, type: "State" },
    { name: "Goa Farm Mechanization Scheme", state: "Goa", profitability: 82, type: "State" },
    { name: "Goa Jal Shakti Abhiyan (Krishi)", state: "Goa", profitability: 85, type: "State" },
    { name: "Goa Farmer Producer Organization (FPO) Promotion Scheme", state: "Goa", profitability: 88, type: "State" },
    { name: "Goa Agriculture Diversification Scheme", state: "Goa", profitability: 84, type: "State" },
    { name: "Goa Agriculture Technology Management Agency (ATMA) Scheme", state: "Goa", profitability: 87, type: "State" },
    { name: "Goa Rashtriya Krishi Vikas Yojana (State Component)", state: "Goa", profitability: 90, type: "State" },
    { name: "Goa Seed Replacement Scheme", state: "Goa", profitability: 77, type: "State" },
    { name: "Goa Food Processing Mission", state: "Goa", profitability: 89, type: "State" },
    { name: "Goa Protected Cultivation Scheme", state: "Goa", profitability: 83, type: "State" },
    { name: "Goa Post Harvest Management Scheme", state: "Goa", profitability: 80, type: "State" },
    { name: "Goa Agriculture Export Promotion Scheme", state: "Goa", profitability: 82, type: "State" },
    { name: "Goa Agro Forestry Scheme", state: "Goa", profitability: 85, type: "State" },
    { name: "Goa Cold Storage Construction Scheme", state: "Goa", profitability: 88, type: "State" },
    { name: "Goa Farm Pond Scheme", state: "Goa", profitability: 81, type: "State" },
    { name: "Goa Agriculture Road Scheme", state: "Goa", profitability: 84, type: "State" },
    { name: "Goa Dairy Development Scheme", state: "Goa", profitability: 87, type: "State" },
    { name: "Goa Cashew Development Scheme", state: "Goa", profitability: 86, type: "State" },
    { name: "Goa Spices Development Scheme", state: "Goa", profitability: 83, type: "State" },

        
    // Himachal Pradesh State Government Schemes for Farmers:

    { name: "Himachal Pradesh Pushp Kranti Yojana", state: "Himachal Pradesh", profitability: 78, type: "State" },
    { name: "Himachal Pradesh Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Himachal Pradesh", profitability: 80, type: "State" },
    { name: "Himachal Pradesh Beej Anudan Yojana", state: "Himachal Pradesh", profitability: 82, type: "State" },
    { name: "Himachal Pradesh Krishi Yantra Anudan Yojana", state: "Himachal Pradesh", profitability: 88, type: "State" },
    { name: "Himachal Pradesh Horticulture Mission", state: "Himachal Pradesh", profitability: 81, type: "State" },
    { name: "Himachal Pradesh Pashudhan Vikas Yojana", state: "Himachal Pradesh", profitability: 83, type: "State" },
    { name: "Himachal Pradesh Matsya Palan Yojana", state: "Himachal Pradesh", profitability: 79, type: "State" },
    { name: "Himachal Pradesh Soil Health Card Scheme (State)", state: "Himachal Pradesh", profitability: 85, type: "State" },
    { name: "Himachal Pradesh Kisan Credit Card (State Scheme)", state: "Himachal Pradesh", profitability: 81, type: "State" },
    { name: "Himachal Pradesh Micro Irrigation Scheme", state: "Himachal Pradesh", profitability: 87, type: "State" },
    { name: "Himachal Pradesh Organic Farming Promotion Scheme", state: "Himachal Pradesh", profitability: 90, type: "State" },
    { name: "Himachal Pradesh Integrated Farming System Scheme", state: "Himachal Pradesh", profitability: 84, type: "State" },
    { name: "Himachal Pradesh Agriculture Warehouse Scheme", state: "Himachal Pradesh", profitability: 77, type: "State" },
    { name: "Himachal Pradesh Agriculture Marketing Scheme", state: "Himachal Pradesh", profitability: 89, type: "State" },
    { name: "Himachal Pradesh Farm Mechanization Scheme", state: "Himachal Pradesh", profitability: 82, type: "State" },
    { name: "Himachal Pradesh Jal Shakti Abhiyan (Krishi)", state: "Himachal Pradesh", profitability: 85, type: "State" },
    { name: "Himachal Pradesh Farmer Producer Organization (FPO) Promotion Scheme", state: "Himachal Pradesh", profitability: 88, type: "State" },
    { name: "Himachal Pradesh Agriculture Diversification Scheme", state: "Himachal Pradesh", profitability: 84, type: "State" },
    { name: "Himachal Pradesh Agriculture Technology Management Agency (ATMA) Scheme", state: "Himachal Pradesh", profitability: 87, type: "State" },
    { name: "Himachal Pradesh Rashtriya Krishi Vikas Yojana (State Component)", state: "Himachal Pradesh", profitability: 90, type: "State" },
    { name: "Himachal Pradesh Seed Replacement Scheme", state: "Himachal Pradesh", profitability: 77, type: "State" },
    { name: "Himachal Pradesh Food Processing Mission", state: "Himachal Pradesh", profitability: 89, type: "State" },
    { name: "Himachal Pradesh Protected Cultivation Scheme", state: "Himachal Pradesh", profitability: 83, type: "State" },
    { name: "Himachal Pradesh Post Harvest Management Scheme", state: "Himachal Pradesh", profitability: 80, type: "State" },
    { name: "Himachal Pradesh Agriculture Export Promotion Scheme", state: "Himachal Pradesh", profitability: 82, type: "State" },
    { name: "Himachal Pradesh Agro Forestry Scheme", state: "Himachal Pradesh", profitability: 85, type: "State" },
    { name: "Himachal Pradesh Cold Storage Construction Scheme", state: "Himachal Pradesh", profitability: 88, type: "State" },
    { name: "Himachal Pradesh Farm Pond Scheme", state: "Himachal Pradesh", profitability: 81, type: "State" },
    { name: "Himachal Pradesh Agriculture Road Scheme", state: "Himachal Pradesh", profitability: 84, type: "State" },
    { name: "Himachal Pradesh Dairy Development Scheme", state: "Himachal Pradesh", profitability: 87, type: "State" },
    { name: "Himachal Pradesh Apple Replantation Scheme", state: "Himachal Pradesh", profitability: 86, type: "State" },
    { name: "Himachal Pradesh Polyhouse Construction Scheme", state: "Himachal Pradesh", profitability: 83, type: "State" },


   // Uttarakhand State Government Schemes for Farmers:

    { name: "Uttarakhand Kisan Pension Yojana", state: "Uttarakhand", profitability: 80, type: "State" },
    { name: "Uttarakhand Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Uttarakhand", profitability: 80, type: "State" },
    { name: "Uttarakhand Beej Anudan Yojana", state: "Uttarakhand", profitability: 82, type: "State" },
    { name: "Uttarakhand Krishi Yantra Anudan Yojana", state: "Uttarakhand", profitability: 88, type: "State" },
    { name: "Uttarakhand Horticulture Mission", state: "Uttarakhand", profitability: 78, type: "State" },
    { name: "Uttarakhand Pashudhan Vikas Yojana", state: "Uttarakhand", profitability: 83, type: "State" },
    { name: "Uttarakhand Matsya Palan Yojana", state: "Uttarakhand", profitability: 79, type: "State" },
    { name: "Uttarakhand Soil Health Card Scheme (State)", state: "Uttarakhand", profitability: 85, type: "State" },
    { name: "Uttarakhand Kisan Credit Card (State Scheme)", state: "Uttarakhand", profitability: 81, type: "State" },
    { name: "Uttarakhand Micro Irrigation Scheme", state: "Uttarakhand", profitability: 87, type: "State" },
    { name: "Uttarakhand Organic Farming Promotion Scheme", state: "Uttarakhand", profitability: 90, type: "State" },
    { name: "Uttarakhand Integrated Farming System Scheme", state: "Uttarakhand", profitability: 84, type: "State" },
    { name: "Uttarakhand Agriculture Warehouse Scheme", state: "Uttarakhand", profitability: 77, type: "State" },
    { name: "Uttarakhand Agriculture Marketing Scheme", state: "Uttarakhand", profitability: 89, type: "State" },
    { name: "Uttarakhand Farm Mechanization Scheme", state: "Uttarakhand", profitability: 82, type: "State" },
    { name: "Uttarakhand Jal Shakti Abhiyan (Krishi)", state: "Uttarakhand", profitability: 85, type: "State" },
    { name: "Uttarakhand Farmer Producer Organization (FPO) Promotion Scheme", state: "Uttarakhand", profitability: 88, type: "State" },
    { name: "Uttarakhand Agriculture Diversification Scheme", state: "Uttarakhand", profitability: 84, type: "State" },
    { name: "Uttarakhand Agriculture Technology Management Agency (ATMA) Scheme", state: "Uttarakhand", profitability: 87, type: "State" },
    { name: "Uttarakhand Rashtriya Krishi Vikas Yojana (State Component)", state: "Uttarakhand", profitability: 90, type: "State" },
    { name: "Uttarakhand Seed Replacement Scheme", state: "Uttarakhand", profitability: 77, type: "State" },
    { name: "Uttarakhand Food Processing Mission", state: "Uttarakhand", profitability: 89, type: "State" },
    { name: "Uttarakhand Protected Cultivation Scheme", state: "Uttarakhand", profitability: 83, type: "State" },
    { name: "Uttarakhand Post Harvest Management Scheme", state: "Uttarakhand", profitability: 80, type: "State" },
    { name: "Uttarakhand Agriculture Export Promotion Scheme", state: "Uttarakhand", profitability: 82, type: "State" },
    { name: "Uttarakhand Agro Forestry Scheme", state: "Uttarakhand", profitability: 85, type: "State" },
    { name: "Uttarakhand Cold Storage Construction Scheme", state: "Uttarakhand", profitability: 88, type: "State" },
    { name: "Uttarakhand Farm Pond Scheme", state: "Uttarakhand", profitability: 81, type: "State" },
    { name: "Uttarakhand Agriculture Road Scheme", state: "Uttarakhand", profitability: 84, type: "State" },
    { name: "Uttarakhand Dairy Development Scheme", state: "Uttarakhand", profitability: 87, type: "State" },
    { name: "Uttarakhand Chief Minister's Ghasyari Kalyan Yojana", state: "Uttarakhand", profitability: 86, type: "State" },
    { name: "Uttarakhand Integrated Livelihood Support Project (ILSP)", state: "Uttarakhand", profitability: 83, type: "State" },

        
// Sikkim State Government Schemes for Farmers:

    { name: "Sikkim Organic Mission", state: "Sikkim", profitability: 85, type: "State" },
    { name: "Sikkim Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Sikkim", profitability: 80, type: "State" },
    { name: "Sikkim Beej Anudan Yojana", state: "Sikkim", profitability: 82, type: "State" },
    { name: "Sikkim Krishi Yantra Anudan Yojana", state: "Sikkim", profitability: 88, type: "State" },
    { name: "Sikkim Horticulture Mission", state: "Sikkim", profitability: 78, type: "State" },
    { name: "Sikkim Pashudhan Vikas Yojana", state: "Sikkim", profitability: 83, type: "State" },
    { name: "Sikkim Matsya Palan Yojana", state: "Sikkim", profitability: 79, type: "State" },
    { name: "Sikkim Soil Health Card Scheme (State)", state: "Sikkim", profitability: 85, type: "State" },
    { name: "Sikkim Kisan Credit Card (State Scheme)", state: "Sikkim", profitability: 81, type: "State" },
    { name: "Sikkim Micro Irrigation Scheme", state: "Sikkim", profitability: 87, type: "State" },
    { name: "Sikkim Integrated Farming System Scheme", state: "Sikkim", profitability: 84, type: "State" },
    { name: "Sikkim Agriculture Warehouse Scheme", state: "Sikkim", profitability: 77, type: "State" },
    { name: "Sikkim Agriculture Marketing Scheme", state: "Sikkim", profitability: 89, type: "State" },
    { name: "Sikkim Farm Mechanization Scheme", state: "Sikkim", profitability: 82, type: "State" },
    { name: "Sikkim Jal Shakti Abhiyan (Krishi)", state: "Sikkim", profitability: 85, type: "State" },
    { name: "Sikkim Farmer Producer Organization (FPO) Promotion Scheme", state: "Sikkim", profitability: 88, type: "State" },
    { name: "Sikkim Agriculture Diversification Scheme", state: "Sikkim", profitability: 84, type: "State" },
    { name: "Sikkim Agriculture Technology Management Agency (ATMA) Scheme", state: "Sikkim", profitability: 87, type: "State" },
    { name: "Sikkim Rashtriya Krishi Vikas Yojana (State Component)", state: "Sikkim", profitability: 90, type: "State" },
    { name: "Sikkim Seed Replacement Scheme", state: "Sikkim", profitability: 77, type: "State" },
    { name: "Sikkim Food Processing Mission", state: "Sikkim", profitability: 89, type: "State" },
    { name: "Sikkim Protected Cultivation Scheme", state: "Sikkim", profitability: 83, type: "State" },
    { name: "Sikkim Post Harvest Management Scheme", state: "Sikkim", profitability: 80, type: "State" },
    { name: "Sikkim Agriculture Export Promotion Scheme", state: "Sikkim", profitability: 82, type: "State" },
    { name: "Sikkim Agro Forestry Scheme", state: "Sikkim", profitability: 85, type: "State" },
    { name: "Sikkim Cold Storage Construction Scheme", state: "Sikkim", profitability: 88, type: "State" },
    { name: "Sikkim Farm Pond Scheme", state: "Sikkim", profitability: 81, type: "State" },
    { name: "Sikkim Agriculture Road Scheme", state: "Sikkim", profitability: 84, type: "State" },
    { name: "Sikkim Dairy Development Scheme", state: "Sikkim", profitability: 87, type: "State" },
    { name: "Sikkim Large Cardamom Development Scheme", state: "Sikkim", profitability: 86, type: "State" },
    { name: "Sikkim Ginger Development Scheme", state: "Sikkim", profitability: 83, type: "State" },

        
// Arunachal Pradesh State Government Schemes for Farmers:

    { name: "Arunachal Pradesh CM's Sustainable Agriculture Mission", state: "Arunachal Pradesh", profitability: 82, type: "State" },
    { name: "Arunachal Pradesh Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Arunachal Pradesh", profitability: 80, type: "State" },
    { name: "Arunachal Pradesh Beej Anudan Yojana", state: "Arunachal Pradesh", profitability: 82, type: "State" },
    { name: "Arunachal Pradesh Krishi Yantra Anudan Yojana", state: "Arunachal Pradesh", profitability: 88, type: "State" },
    { name: "Arunachal Pradesh Horticulture Mission", state: "Arunachal Pradesh", profitability: 78, type: "State" },
    { name: "Arunachal Pradesh Pashudhan Vikas Yojana", state: "Arunachal Pradesh", profitability: 83, type: "State" },
    { name: "Arunachal Pradesh Matsya Palan Yojana", state: "Arunachal Pradesh", profitability: 79, type: "State" },
    { name: "Arunachal Pradesh Soil Health Card Scheme (State)", state: "Arunachal Pradesh", profitability: 85, type: "State" },
    { name: "Arunachal Pradesh Kisan Credit Card (State Scheme)", state: "Arunachal Pradesh", profitability: 81, type: "State" },
    { name: "Arunachal Pradesh Micro Irrigation Scheme", state: "Arunachal Pradesh", profitability: 87, type: "State" },
    { name: "Arunachal Pradesh Organic Farming Promotion Scheme", state: "Arunachal Pradesh", profitability: 90, type: "State" },
    { name: "Arunachal Pradesh Integrated Farming System Scheme", state: "Arunachal Pradesh", profitability: 84, type: "State" },
    { name: "Arunachal Pradesh Agriculture Warehouse Scheme", state: "Arunachal Pradesh", profitability: 77, type: "State" },
    { name: "Arunachal Pradesh Agriculture Marketing Scheme", state: "Arunachal Pradesh", profitability: 89, type: "State" },
    { name: "Arunachal Pradesh Farm Mechanization Scheme", state: "Arunachal Pradesh", profitability: 82, type: "State" },
    { name: "Arunachal Pradesh Jal Shakti Abhiyan (Krishi)", state: "Arunachal Pradesh", profitability: 85, type: "State" },
    { name: "Arunachal Pradesh Farmer Producer Organization (FPO) Promotion Scheme", state: "Arunachal Pradesh", profitability: 88, type: "State" },
    { name: "Arunachal Pradesh Agriculture Diversification Scheme", state: "Arunachal Pradesh", profitability: 84, type: "State" },
    { name: "Arunachal Pradesh Agriculture Technology Management Agency (ATMA) Scheme", state: "Arunachal Pradesh", profitability: 87, type: "State" },
    { name: "Arunachal Pradesh Rashtriya Krishi Vikas Yojana (State Component)", state: "Arunachal Pradesh", profitability: 90, type: "State" },
    { name: "Arunachal Pradesh Seed Replacement Scheme", state: "Arunachal Pradesh", profitability: 77, type: "State" },
    { name: "Arunachal Pradesh Food Processing Mission", state: "Arunachal Pradesh", profitability: 89, type: "State" },
    { name: "Arunachal Pradesh Protected Cultivation Scheme", state: "Arunachal Pradesh", profitability: 83, type: "State" },
    { name: "Arunachal Pradesh Post Harvest Management Scheme", state: "Arunachal Pradesh", profitability: 80, type: "State" },
    { name: "Arunachal Pradesh Agriculture Export Promotion Scheme", state: "Arunachal Pradesh", profitability: 82, type: "State" },
    { name: "Arunachal Pradesh Agro Forestry Scheme", state: "Arunachal Pradesh", profitability: 85, type: "State" },
    { name: "Arunachal Pradesh Cold Storage Construction Scheme", state: "Arunachal Pradesh", profitability: 88, type: "State" },
    { name: "Arunachal Pradesh Farm Pond Scheme", state: "Arunachal Pradesh", profitability: 81, type: "State" },
    { name: "Arunachal Pradesh Agriculture Road Scheme", state: "Arunachal Pradesh", profitability: 84, type: "State" },
    { name: "Arunachal Pradesh Dairy Development Scheme", state: "Arunachal Pradesh", profitability: 87, type: "State" },
    { name: "Arunachal Pradesh Kiwi Development Scheme", state: "Arunachal Pradesh", profitability: 86, type: "State" },
    { name: "Arunachal Pradesh Cardamom Development Scheme", state: "Arunachal Pradesh", profitability: 83, type: "State" },

        
   // Nagaland State Government Schemes for Farmers:

    { name: "Nagaland Agri Link Scheme", state: "Nagaland", profitability: 77, type: "State" },
    { name: "Nagaland Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Nagaland", profitability: 80, type: "State" },
    { name: "Nagaland Beej Anudan Yojana", state: "Nagaland", profitability: 82, type: "State" },
    { name: "Nagaland Krishi Yantra Anudan Yojana", state: "Nagaland", profitability: 88, type: "State" },
    { name: "Nagaland Horticulture Mission", state: "Nagaland", profitability: 78, type: "State" },
    { name: "Nagaland Pashudhan Vikas Yojana", state: "Nagaland", profitability: 83, type: "State" },
    { name: "Nagaland Matsya Palan Yojana", state: "Nagaland", profitability: 79, type: "State" },
    { name: "Nagaland Soil Health Card Scheme (State)", state: "Nagaland", profitability: 85, type: "State" },
    { name: "Nagaland Kisan Credit Card (State Scheme)", state: "Nagaland", profitability: 81, type: "State" },
    { name: "Nagaland Micro Irrigation Scheme", state: "Nagaland", profitability: 87, type: "State" },
    { name: "Nagaland Organic Farming Promotion Scheme", state: "Nagaland", profitability: 90, type: "State" },
    { name: "Nagaland Integrated Farming System Scheme", state: "Nagaland", profitability: 84, type: "State" },
    { name: "Nagaland Agriculture Warehouse Scheme", state: "Nagaland", profitability: 77, type: "State" },
    { name: "Nagaland Agriculture Marketing Scheme", state: "Nagaland", profitability: 89, type: "State" },
    { name: "Nagaland Farm Mechanization Scheme", state: "Nagaland", profitability: 82, type: "State" },
    { name: "Nagaland Jal Shakti Abhiyan (Krishi)", state: "Nagaland", profitability: 85, type: "State" },
    { name: "Nagaland Farmer Producer Organization (FPO) Promotion Scheme", state: "Nagaland", profitability: 88, type: "State" },
    { name: "Nagaland Agriculture Diversification Scheme", state: "Nagaland", profitability: 84, type: "State" },
    { name: "Nagaland Agriculture Technology Management Agency (ATMA) Scheme", state: "Nagaland", profitability: 87, type: "State" },
    { name: "Nagaland Rashtriya Krishi Vikas Yojana (State Component)", state: "Nagaland", profitability: 90, type: "State" },
    { name: "Nagaland Seed Replacement Scheme", state: "Nagaland", profitability: 77, type: "State" },
    { name: "Nagaland Food Processing Mission", state: "Nagaland", profitability: 89, type: "State" },
    { name: "Nagaland Protected Cultivation Scheme", state: "Nagaland", profitability: 83, type: "State" },
    { name: "Nagaland Post Harvest Management Scheme", state: "Nagaland", profitability: 80, type: "State" },
    { name: "Nagaland Agriculture Export Promotion Scheme", state: "Nagaland", profitability: 82, type: "State" },
    { name: "Nagaland Agro Forestry Scheme", state: "Nagaland", profitability: 85, type: "State" },
    { name: "Nagaland Cold Storage Construction Scheme", state: "Nagaland", profitability: 88, type: "State" },
    { name: "Nagaland Farm Pond Scheme", state: "Nagaland", profitability: 81, type: "State" },
    { name: "Nagaland Agriculture Road Scheme", state: "Nagaland", profitability: 84, type: "State" },
    { name: "Nagaland Dairy Development Scheme", state: "Nagaland", profitability: 87, type: "State" },
    { name: "Nagaland Coffee Development Scheme", state: "Nagaland", profitability: 86, type: "State" },
    { name: "Nagaland Spices Development Scheme", state: "Nagaland", profitability: 83, type: "State" },

    
   // Manipur State Government Schemes for Farmers:

    { name: "Manipur Chief Minister's Farmers Livelihood Support Scheme", state: "Manipur", profitability: 79, type: "State" },
    { name: "Manipur Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Manipur", profitability: 80, type: "State" },
    { name: "Manipur Beej Anudan Yojana", state: "Manipur", profitability: 82, type: "State" },
    { name: "Manipur Krishi Yantra Anudan Yojana", state: "Manipur", profitability: 88, type: "State" },
    { name: "Manipur Horticulture Mission", state: "Manipur", profitability: 78, type: "State" },
    { name: "Manipur Pashudhan Vikas Yojana", state: "Manipur", profitability: 83, type: "State" },
    { name: "Manipur Matsya Palan Yojana", state: "Manipur", profitability: 79, type: "State" },
    { name: "Manipur Soil Health Card Scheme (State)", state: "Manipur", profitability: 85, type: "State" },
    { name: "Manipur Kisan Credit Card (State Scheme)", state: "Manipur", profitability: 81, type: "State" },
    { name: "Manipur Micro Irrigation Scheme", state: "Manipur", profitability: 87, type: "State" },
    { name: "Manipur Organic Farming Promotion Scheme", state: "Manipur", profitability: 90, type: "State" },
    { name: "Manipur Integrated Farming System Scheme", state: "Manipur", profitability: 84, type: "State" },
    { name: "Manipur Agriculture Warehouse Scheme", state: "Manipur", profitability: 77, type: "State" },
    { name: "Manipur Agriculture Marketing Scheme", state: "Manipur", profitability: 89, type: "State" },
    { name: "Manipur Farm Mechanization Scheme", state: "Manipur", profitability: 82, type: "State" },
    { name: "Manipur Jal Shakti Abhiyan (Krishi)", state: "Manipur", profitability: 85, type: "State" },
    { name: "Manipur Farmer Producer Organization (FPO) Promotion Scheme", state: "Manipur", profitability: 88, type: "State" },
    { name: "Manipur Agriculture Diversification Scheme", state: "Manipur", profitability: 84, type: "State" },
    { name: "Manipur Agriculture Technology Management Agency (ATMA) Scheme", state: "Manipur", profitability: 87, type: "State" },
    { name: "Manipur Rashtriya Krishi Vikas Yojana (State Component)", state: "Manipur", profitability: 90, type: "State" },
    { name: "Manipur Seed Replacement Scheme", state: "Manipur", profitability: 77, type: "State" },
    { name: "Manipur Food Processing Mission", state: "Manipur", profitability: 89, type: "State" },
    { name: "Manipur Protected Cultivation Scheme", state: "Manipur", profitability: 83, type: "State" },
    { name: "Manipur Post Harvest Management Scheme", state: "Manipur", profitability: 80, type: "State" },
    { name: "Manipur Agriculture Export Promotion Scheme", state: "Manipur", profitability: 82, type: "State" },
    { name: "Manipur Agro Forestry Scheme", state: "Manipur", profitability: 85, type: "State" },
    { name: "Manipur Cold Storage Construction Scheme", state: "Manipur", profitability: 88, type: "State" },
    { name: "Manipur Farm Pond Scheme", state: "Manipur", profitability: 81, type: "State" },
    { name: "Manipur Agriculture Road Scheme", state: "Manipur", profitability: 84, type: "State" },
    { name: "Manipur Dairy Development Scheme", state: "Manipur", profitability: 87, type: "State" },
    { name: "Manipur Bamboo Development Scheme", state: "Manipur", profitability: 86, type: "State" },
    { name: "Manipur Ginger Development Scheme", state: "Manipur", profitability: 83, type: "State" },

        
    // Meghalaya State Government Schemes for Farmers:

    { name: "Meghalaya Mission Organic Value Chain Development", state: "Meghalaya", profitability: 81, type: "State" },
    { name: "Meghalaya Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Meghalaya", profitability: 80, type: "State" },
    { name: "Meghalaya Beej Anudan Yojana", state: "Meghalaya", profitability: 82, type: "State" },
    { name: "Meghalaya Krishi Yantra Anudan Yojana", state: "Meghalaya", profitability: 88, type: "State" },
    { name: "Meghalaya Horticulture Mission", state: "Meghalaya", profitability: 78, type: "State" },
    { name: "Meghalaya Pashudhan Vikas Yojana", state: "Meghalaya", profitability: 83, type: "State" },
    { name: "Meghalaya Matsya Palan Yojana", state: "Meghalaya", profitability: 79, type: "State" },
    { name: "Meghalaya Soil Health Card Scheme (State)", state: "Meghalaya", profitability: 85, type: "State" },
    { name: "Meghalaya Kisan Credit Card (State Scheme)", state: "Meghalaya", profitability: 81, type: "State" },
    { name: "Meghalaya Micro Irrigation Scheme", state: "Meghalaya", profitability: 87, type: "State" },
    { name: "Meghalaya Integrated Farming System Scheme", state: "Meghalaya", profitability: 84, type: "State" },
    { name: "Meghalaya Agriculture Warehouse Scheme", state: "Meghalaya", profitability: 77, type: "State" },
    { name: "Meghalaya Agriculture Marketing Scheme", state: "Meghalaya", profitability: 89, type: "State" },
    { name: "Meghalaya Farm Mechanization Scheme", state: "Meghalaya", profitability: 82, type: "State" },
    { name: "Meghalaya Jal Shakti Abhiyan (Krishi)", state: "Meghalaya", profitability: 85, type: "State" },
    { name: "Meghalaya Farmer Producer Organization (FPO) Promotion Scheme", state: "Meghalaya", profitability: 88, type: "State" },
    { name: "Meghalaya Agriculture Diversification Scheme", state: "Meghalaya", profitability: 84, type: "State" },
    { name: "Meghalaya Agriculture Technology Management Agency (ATMA) Scheme", state: "Meghalaya", profitability: 87, type: "State" },
    { name: "Meghalaya Rashtriya Krishi Vikas Yojana (State Component)", state: "Meghalaya", profitability: 90, type: "State" },
    { name: "Meghalaya Seed Replacement Scheme", state: "Meghalaya", profitability: 77, type: "State" },
    { name: "Meghalaya Food Processing Mission", state: "Meghalaya", profitability: 89, type: "State" },
    { name: "Meghalaya Protected Cultivation Scheme", state: "Meghalaya", profitability: 83, type: "State" },
    { name: "Meghalaya Post Harvest Management Scheme", state: "Meghalaya", profitability: 80, type: "State" },
    { name: "Meghalaya Agriculture Export Promotion Scheme", state: "Meghalaya", profitability: 82, type: "State" },
    { name: "Meghalaya Agro Forestry Scheme", state: "Meghalaya", profitability: 85, type: "State" },
    { name: "Meghalaya Cold Storage Construction Scheme", state: "Meghalaya", profitability: 88, type: "State" },
    { name: "Meghalaya Farm Pond Scheme", state: "Meghalaya", profitability: 81, type: "State" },
    { name: "Meghalaya Agriculture Road Scheme", state: "Meghalaya", profitability: 84, type: "State" },
    { name: "Meghalaya Dairy Development Scheme", state: "Meghalaya", profitability: 87, type: "State" },
    { name: "Meghalaya Lakadong Turmeric Development Scheme", state: "Meghalaya", profitability: 86, type: "State" },
    { name: "Meghalaya Pineapple Development Scheme", state: "Meghalaya", profitability: 83, type: "State" },

   // Tripura State Government Schemes for Farmers:

    { name: "Tripura Horticulture Mission", state: "Tripura", profitability: 78, type: "State" },
    { name: "Tripura Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Tripura", profitability: 80, type: "State" },
    { name: "Tripura Beej Anudan Yojana", state: "Tripura", profitability: 82, type: "State" },
    { name: "Tripura Krishi Yantra Anudan Yojana", state: "Tripura", profitability: 88, type: "State" },
    { name: "Tripura Pashudhan Vikas Yojana", state: "Tripura", profitability: 83, type: "State" },
    { name: "Tripura Matsya Palan Yojana", state: "Tripura", profitability: 79, type: "State" },
    { name: "Tripura Soil Health Card Scheme (State)", state: "Tripura", profitability: 85, type: "State" },
    { name: "Tripura Kisan Credit Card (State Scheme)", state: "Tripura", profitability: 81, type: "State" },
    { name: "Tripura Micro Irrigation Scheme", state: "Tripura", profitability: 87, type: "State" },
    { name: "Tripura Organic Farming Promotion Scheme", state: "Tripura", profitability: 90, type: "State" },
    { name: "Tripura Integrated Farming System Scheme", state: "Tripura", profitability: 84, type: "State" },
    { name: "Tripura Agriculture Warehouse Scheme", state: "Tripura", profitability: 77, type: "State" },
    { name: "Tripura Agriculture Marketing Scheme", state: "Tripura", profitability: 89, type: "State" },
    { name: "Tripura Farm Mechanization Scheme", state: "Tripura", profitability: 82, type: "State" },
    { name: "Tripura Jal Shakti Abhiyan (Krishi)", state: "Tripura", profitability: 85, type: "State" },
    { name: "Tripura Farmer Producer Organization (FPO) Promotion Scheme", state: "Tripura", profitability: 88, type: "State" },
    { name: "Tripura Agriculture Diversification Scheme", state: "Tripura", profitability: 84, type: "State" },
    { name: "Tripura Agriculture Technology Management Agency (ATMA) Scheme", state: "Tripura", profitability: 87, type: "State" },
    { name: "Tripura Rashtriya Krishi Vikas Yojana (State Component)", state: "Tripura", profitability: 90, type: "State" },
    { name: "Tripura Seed Replacement Scheme", state: "Tripura", profitability: 77, type: "State" },
    { name: "Tripura Food Processing Mission", state: "Tripura", profitability: 89, type: "State" },
    { name: "Tripura Protected Cultivation Scheme", state: "Tripura", profitability: 83, type: "State" },
    { name: "Tripura Post Harvest Management Scheme", state: "Tripura", profitability: 80, type: "State" },
    { name: "Tripura Agriculture Export Promotion Scheme", state: "Tripura", profitability: 82, type: "State" },
    { name: "Tripura Agro Forestry Scheme", state: "Tripura", profitability: 85, type: "State" },
    { name: "Tripura Cold Storage Construction Scheme", state: "Tripura", profitability: 88, type: "State" },
    { name: "Tripura Farm Pond Scheme", state: "Tripura", profitability: 81, type: "State" },
    { name: "Tripura Agriculture Road Scheme", state: "Tripura", profitability: 84, type: "State" },
    { name: "Tripura Dairy Development Scheme", state: "Tripura", profitability: 87, type: "State" },
    { name: "Tripura Rubber Development Scheme", state: "Tripura", profitability: 86, type: "State" },
    { name: "Tripura Bamboo Development Scheme", state: "Tripura", profitability: 83, type: "State" },

// Mizoram State Government Schemes for Farmers:

    { name: "Mizoram Agriculture Technology Management Agency (ATMA) Scheme", state: "Mizoram", profitability: 83, type: "State" },
    { name: "Mizoram Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Mizoram", profitability: 80, type: "State" },
    { name: "Mizoram Beej Anudan Yojana", state: "Mizoram", profitability: 82, type: "State" },
    { name: "Mizoram Krishi Yantra Anudan Yojana", state: "Mizoram", profitability: 88, type: "State" },
    { name: "Mizoram Horticulture Mission", state: "Mizoram", profitability: 78, type: "State" },
    { name: "Mizoram Pashudhan Vikas Yojana", state: "Mizoram", profitability: 83, type: "State" },
    { name: "Mizoram Matsya Palan Yojana", state: "Mizoram", profitability: 79, type: "State" },
    { name: "Mizoram Soil Health Card Scheme (State)", state: "Mizoram", profitability: 85, type: "State" },
    { name: "Mizoram Kisan Credit Card (State Scheme)", state: "Mizoram", profitability: 81, type: "State" },
    { name: "Mizoram Micro Irrigation Scheme", state: "Mizoram", profitability: 87, type: "State" },
    { name: "Mizoram Organic Farming Promotion Scheme", state: "Mizoram", profitability: 90, type: "State" },
    { name: "Mizoram Integrated Farming System Scheme", state: "Mizoram", profitability: 84, type: "State" },
    { name: "Mizoram Agriculture Warehouse Scheme", state: "Mizoram", profitability: 77, type: "State" },
    { name: "Mizoram Agriculture Marketing Scheme", state: "Mizoram", profitability: 89, type: "State" },
    { name: "Mizoram Farm Mechanization Scheme", state: "Mizoram", profitability: 82, type: "State" },
    { name: "Mizoram Jal Shakti Abhiyan (Krishi)", state: "Mizoram", profitability: 85, type: "State" },
    { name: "Mizoram Farmer Producer Organization (FPO) Promotion Scheme", state: "Mizoram", profitability: 88, type: "State" },
    { name: "Mizoram Agriculture Diversification Scheme", state: "Mizoram", profitability: 84, type: "State" },
    { name: "Mizoram Rashtriya Krishi Vikas Yojana (State Component)", state: "Mizoram", profitability: 90, type: "State" },
    { name: "Mizoram Seed Replacement Scheme", state: "Mizoram", profitability: 77, type: "State" },
    { name: "Mizoram Food Processing Mission", state: "Mizoram", profitability: 89, type: "State" },
    { name: "Mizoram Protected Cultivation Scheme", state: "Mizoram", profitability: 83, type: "State" },
    { name: "Mizoram Post Harvest Management Scheme", state: "Mizoram", profitability: 80, type: "State" },
    { name: "Mizoram Agriculture Export Promotion Scheme", state: "Mizoram", profitability: 82, type: "State" },
    { name: "Mizoram Agro Forestry Scheme", state: "Mizoram", profitability: 85, type: "State" },
    { name: "Mizoram Cold Storage Construction Scheme", state: "Mizoram", profitability: 88, type: "State" },
    { name: "Mizoram Farm Pond Scheme", state: "Mizoram", profitability: 81, type: "State" },
    { name: "Mizoram Agriculture Road Scheme", state: "Mizoram", profitability: 84, type: "State" },
    { name: "Mizoram Dairy Development Scheme", state: "Mizoram", profitability: 87, type: "State" },
    { name: "Mizoram Bamboo Development Scheme", state: "Mizoram", profitability: 86, type: "State" },
    { name: "Mizoram Ginger Development Scheme", state: "Mizoram", profitability: 83, type: "State" },

        
// Andaman and Nicobar Islands State Government Schemes for Farmers:

    { name: "Andaman and Nicobar Islands Integrated Development of Agriculture", state: "Andaman and Nicobar Islands", profitability: 84, type: "State" },
    { name: "Andaman and Nicobar Islands Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Andaman and Nicobar Islands", profitability: 80, type: "State" },
    { name: "Andaman and Nicobar Islands Beej Anudan Yojana", state: "Andaman and Nicobar Islands", profitability: 82, type: "State" },
    { name: "Andaman and Nicobar Islands Krishi Yantra Anudan Yojana", state: "Andaman and Nicobar Islands", profitability: 88, type: "State" },
    { name: "Andaman and Nicobar Islands Horticulture Mission", state: "Andaman and Nicobar Islands", profitability: 78, type: "State" },
    { name: "Andaman and Nicobar Islands Pashudhan Vikas Yojana", state: "Andaman and Nicobar Islands", profitability: 83, type: "State" },
    { name: "Andaman and Nicobar Islands Matsya Palan Yojana", state: "Andaman and Nicobar Islands", profitability: 79, type: "State" },
    { name: "Andaman and Nicobar Islands Soil Health Card Scheme (State)", state: "Andaman and Nicobar Islands", profitability: 85, type: "State" },
    { name: "Andaman and Nicobar Islands Kisan Credit Card (State Scheme)", state: "Andaman and Nicobar Islands", profitability: 81, type: "State" },
    { name: "Andaman and Nicobar Islands Micro Irrigation Scheme", state: "Andaman and Nicobar Islands", profitability: 87, type: "State" },
    { name: "Andaman and Nicobar Islands Organic Farming Promotion Scheme", state: "Andaman and Nicobar Islands", profitability: 90, type: "State" },
    { name: "Andaman and Nicobar Islands Integrated Farming System Scheme", state: "Andaman and Nicobar Islands", profitability: 84, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Warehouse Scheme", state: "Andaman and Nicobar Islands", profitability: 77, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Marketing Scheme", state: "Andaman and Nicobar Islands", profitability: 89, type: "State" },
    { name: "Andaman and Nicobar Islands Farm Mechanization Scheme", state: "Andaman and Nicobar Islands", profitability: 82, type: "State" },
    { name: "Andaman and Nicobar Islands Jal Shakti Abhiyan (Krishi)", state: "Andaman and Nicobar Islands", profitability: 85, type: "State" },
    { name: "Andaman and Nicobar Islands Farmer Producer Organization (FPO) Promotion Scheme", state: "Andaman and Nicobar Islands", profitability: 88, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Diversification Scheme", state: "Andaman and Nicobar Islands", profitability: 84, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Technology Management Agency (ATMA) Scheme", state: "Andaman and Nicobar Islands", profitability: 87, type: "State" },
    { name: "Andaman and Nicobar Islands Rashtriya Krishi Vikas Yojana (State Component)", state: "Andaman and Nicobar Islands", profitability: 90, type: "State" },
    { name: "Andaman and Nicobar Islands Seed Replacement Scheme", state: "Andaman and Nicobar Islands", profitability: 77, type: "State" },
    { name: "Andaman and Nicobar Islands Food Processing Mission", state: "Andaman and Nicobar Islands", profitability: 89, type: "State" },
    { name: "Andaman and Nicobar Islands Protected Cultivation Scheme", state: "Andaman and Nicobar Islands", profitability: 83, type: "State" },
    { name: "Andaman and Nicobar Islands Post Harvest Management Scheme", state: "Andaman and Nicobar Islands", profitability: 80, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Export Promotion Scheme", state: "Andaman and Nicobar Islands", profitability: 82, type: "State" },
    { name: "Andaman and Nicobar Islands Agro Forestry Scheme", state: "Andaman and Nicobar Islands", profitability: 85, type: "State" },
    { name: "Andaman and Nicobar Islands Cold Storage Construction Scheme", state: "Andaman and Nicobar Islands", profitability: 88, type: "State" },
    { name: "Andaman and Nicobar Islands Farm Pond Scheme", state: "Andaman and Nicobar Islands", profitability: 81, type: "State" },
    { name: "Andaman and Nicobar Islands Agriculture Road Scheme", state: "Andaman and Nicobar Islands", profitability: 84, type: "State" },
    { name: "Andaman and Nicobar Islands Dairy Development Scheme", state: "Andaman and Nicobar Islands", profitability: 87, type: "State" },
    { name: "Andaman and Nicobar Islands Coconut Development Scheme", state: "Andaman and Nicobar Islands", profitability: 86, type: "State" },
    { name: "Andaman and Nicobar Islands Spices Development Scheme", state: "Andaman and Nicobar Islands", profitability: 83, type: "State" },

        
    // Delhi State Government Schemes for Farmers:

    { name: "Delhi Kisan Vikas Ayog Schemes", state: "Delhi", profitability: 81, type: "State" },
    { name: "Delhi Pradhan Mantri Kisan Samman Nidhi (State Component)", state: "Delhi", profitability: 80, type: "State" },
    { name: "Delhi Beej Anudan Yojana", state: "Delhi", profitability: 82, type: "State" },
    { name: "Delhi Krishi Yantra Anudan Yojana", state: "Delhi", profitability: 88, type: "State" },
    { name: "Delhi Horticulture Mission", state: "Delhi", profitability: 78, type: "State" },
    { name: "Delhi Pashudhan Vikas Yojana", state: "Delhi", profitability: 83, type: "State" },
    { name: "Delhi Matsya Palan Yojana", state: "Delhi", profitability: 79, type: "State" },
    { name: "Delhi Soil Health Card Scheme (State)", state: "Delhi", profitability: 85, type: "State" },
    { name: "Delhi Kisan Credit Card (State Scheme)", state: "Delhi", profitability: 81, type: "State" },
    { name: "Delhi Micro Irrigation Scheme", state: "Delhi", profitability: 87, type: "State" },
    { name: "Delhi Organic Farming Promotion Scheme", state: "Delhi", profitability: 90, type: "State" },
    { name: "Delhi Integrated Farming System Scheme", state: "Delhi", profitability: 84, type: "State" },
    { name: "Delhi Agriculture Warehouse Scheme", state: "Delhi", profitability: 77, type: "State" },
    { name: "Delhi Agriculture Marketing Scheme", state: "Delhi", profitability: 89, type: "State" },
    { name: "Delhi Farm Mechanization Scheme", state: "Delhi", profitability: 82, type: "State" },
    { name: "Delhi Jal Shakti Abhiyan (Krishi)", state: "Delhi", profitability: 85, type: "State" },
    { name: "Delhi Farmer Producer Organization (FPO) Promotion Scheme", state: "Delhi", profitability: 88, type: "State" },
    { name: "Delhi Agriculture Diversification Scheme", state: "Delhi", profitability: 84, type: "State" },
    { name: "Delhi Agriculture Technology Management Agency (ATMA) Scheme", state: "Delhi", profitability: 87, type: "State" },
    { name: "Delhi Rashtriya Krishi Vikas Yojana (State Component)", state: "Delhi", profitability: 90, type: "State" },
    { name: "Delhi Seed Replacement Scheme", state: "Delhi", profitability: 77, type: "State" },
    { name: "Delhi Food Processing Mission", state: "Delhi", profitability: 89, type: "State" },
    { name: "Delhi Protected Cultivation Scheme", state: "Delhi", profitability: 83, type: "State" },
    { name: "Delhi Post Harvest Management Scheme", state: "Delhi", profitability: 80, type: "State" },
    { name: "Delhi Agriculture Export Promotion Scheme", state: "Delhi", profitability: 82, type: "State" },
    { name: "Delhi Agro Forestry Scheme", state: "Delhi", profitability: 85, type: "State" },
    { name: "Delhi Cold Storage Construction Scheme", state: "Delhi", profitability: 88, type: "State" },
    { name: "Delhi Farm Pond Scheme", state: "Delhi", profitability: 81, type: "State" },
    { name: "Delhi Agriculture Road Scheme", state: "Delhi", profitability: 84, type: "State" },
    { name: "Delhi Dairy Development Scheme", state: "Delhi", profitability: 87, type: "State" },
    { name: "Delhi Urban Farming Initiatives", state: "Delhi", profitability: 86, type: "State" },
    { name: "Delhi Mushroom Cultivation Promotion Scheme", state: "Delhi", profitability: 83, type: "State" },


    // West Bengal State Government Schemes for Farmers:

    { name: "Krishak Bandhu Scheme", state: "West Bengal", profitability: 88, type: "State" },
    { name: "Bangla Shasya Bima", state: "West Bengal", profitability: 85, type: "State" },
    { name: "Mukhyamantri Krishi Sinchayee Yojana", state: "West Bengal", profitability: 82, type: "State" },
    { name: "Rastriya Krishi Vikas Yojana (State Component)", state: "West Bengal", profitability: 80, type: "State" },
    { name: "Soil Health Card Scheme (West Bengal)", state: "West Bengal", profitability: 86, type: "State" },
    { name: "National Food Security Mission (State Component)", state: "West Bengal", profitability: 83, type: "State" },
    { name: "Mission for Integrated Development of Horticulture (State Component)", state: "West Bengal", profitability: 81, type: "State" },
    { name: "Sub-Mission on Agricultural Mechanization (State Component)", state: "West Bengal", profitability: 79, type: "State" },
    { name: "West Bengal Beej Nigam Yojana", state: "West Bengal", profitability: 84, type: "State" },
    { name: "West Bengal Horticulture Mission", state: "West Bengal", profitability: 87, type: "State" },
    { name: "West Bengal Matsya Chash Prakalpa", state: "West Bengal", profitability: 90, type: "State" },
    { name: "West Bengal Pashu Sampad Bikash Yojana", state: "West Bengal", profitability: 78, type: "State" },
    { name: "West Bengal Krishak Bazaar", state: "West Bengal", profitability: 85, type: "State" },
    { name: "West Bengal Farmer Producer Organization (FPO) Promotion", state: "West Bengal", profitability: 82, type: "State" },
    { name: "West Bengal Agricultural Marketing Infrastructure Scheme", state: "West Bengal", profitability: 80, type: "State" },
    { name: "West Bengal Cold Storage Scheme", state: "West Bengal", profitability: 86, type: "State" },
    { name: "West Bengal Food Processing Industries Development Scheme", state: "West Bengal", profitability: 83, type: "State" },
    { name: "West Bengal Agricultural Diversification Programme", state: "West Bengal", profitability: 81, type: "State" },
    { name: "West Bengal Organic Farming Promotion", state: "West Bengal", profitability: 79, type: "State" },
    { name: "West Bengal Micro Irrigation Scheme", state: "West Bengal", profitability: 88, type: "State" },
    { name: "West Bengal Farm Mechanization Scheme", state: "West Bengal", profitability: 85, type: "State" },
    { name: "West Bengal Agriculture Extension and Training Scheme", state: "West Bengal", profitability: 82, type: "State" },
    { name: "West Bengal Agriculture Credit Scheme", state: "West Bengal", profitability: 80, type: "State" },
    { name: "West Bengal Agriculture Export Promotion Scheme", state: "West Bengal", profitability: 86, type: "State" },
    { name: "West Bengal Agro Forestry Scheme", state: "West Bengal", profitability: 83, type: "State" },
    { name: "West Bengal Integrated Agriculture Development Scheme", state: "West Bengal", profitability: 81, type: "State" },
    { name: "West Bengal Agriculture Warehouse Scheme", state: "West Bengal", profitability: 79, type: "State" },
    { name: "West Bengal Farm Pond Scheme", state: "West Bengal", profitability: 88, type: "State" },
    { name: "West Bengal Agriculture Technology Management Agency (ATMA) Scheme", state: "West Bengal", profitability: 85, type: "State" },
    { name: "West Bengal Agriculture Road Scheme", state: "West Bengal", profitability: 82, type: "State" },

];


  // 📌 Filtering schemes based on eligibility
  const eligibleSchemes = schemes.filter(scheme => {
    return (
      (scheme.state === "All" || scheme.state.toLowerCase() === state.toLowerCase()) &&
      (!scheme.landMin || landSize >= scheme.landMin) &&
      (!scheme.landMax || landSize <= scheme.landMax) &&
      (!scheme.incomeMax || income <= scheme.incomeMax) &&
      (!scheme.farmerType || (Array.isArray(scheme.farmerType) ? scheme.farmerType.includes(farmerType) : scheme.farmerType === farmerType))
    );
  });

  // ✅ Separate Central & State schemes
  const centralSchemes = eligibleSchemes.filter(scheme => scheme.type === "Central").sort((a, b) => b.profitability - a.profitability);
  const stateSchemes = eligibleSchemes.filter(scheme => scheme.type === "State").sort((a, b) => b.profitability - a.profitability);

  // 📌 Select the best scheme (highest profitability)
  const bestScheme = eligibleSchemes.length > 0 ? eligibleSchemes.sort((a, b) => b.profitability - a.profitability)[0] : null;

  // 📌 Prepare response
  if (centralSchemes.length === 0 && stateSchemes.length === 0) {
    return res.json({ eligibility: "❌ No matching schemes found." });
  }

  res.json({
    message: "✅ Here are the applicable schemes:",
    bestScheme: bestScheme ? `${bestScheme.name} (Profitability Score: ${bestScheme.profitability})` : "N/A",
    centralSchemes,
    stateSchemes
  });
});

export default router;
