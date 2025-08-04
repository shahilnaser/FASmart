// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const StateSchemes = () => {
//   const { state } = useParams();
//   const navigate = useNavigate();

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const formatStateName = (name) =>
//     name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

//   const formattedState = state ? formatStateName(state.replace("-", " ")) : "";

//   const stateSchemesData = {
    
//       "Bihar": [
//         {
//           "id": 1,
//           "name": "Mukhyamantri Krishi Input Anudan Yojana",
//           "description": "Financial aid for purchasing agricultural inputs.",
//           "eligibility": "Farmers with registered landholdings.",
//           "status": "Open",
//           "link": "https://dbtagriculture.bihar.gov.in/InputAnudan/"
//         },
//         {
//           "id": 2,
//           "name": "Bihar Fasal Sahayata Yojana",
//           "description": "Crop insurance scheme for farmers.",
//           "eligibility": "Registered farmers in Bihar.",
//           "status": "Open",
//           "link": "https://dbtagriculture.bihar.gov.in/FasalSahayata/"
//         },
//         {
//           "id": 3,
//           "name": "Pradhan Mantri Kisan Samman Nidhi Yojana (State Contribution)",
//           "description": "Financial assistance to farmers (with state contribution).",
//           "eligibility": "Small and marginal farmers.",
//           "status": "Ongoing",
//           "link": "https://dbtagriculture.bihar.gov.in/PMKisan/"
//         },
//         {
//           "id": 4,
//           "name": "Bihar State Seed Certification Agency",
//           "description": "Certification of quality seeds for farmers.",
//           "eligibility": "Farmers and seed producers.",
//           "status": "Ongoing",
//           "link": "http://seedbihar.gov.in/"
//         },
//         {
//           "id": 5,
//           "name": "Rashtriya Krishi Vikas Yojana (RKVY) in Bihar",
//           "description": "Various agriculture and allied sector development programs.",
//           "eligibility": "Farmers, farmer groups, and agricultural entrepreneurs.",
//           "status": "Ongoing",
//           "link": "https://dbtagriculture.bihar.gov.in/"
//         },
//         {
//           "id": 6,
//           "name": "National Food Security Mission (NFSM) in Bihar",
//           "description": "Programs to increase production of rice, wheat, and pulses.",
//           "eligibility": "Farmers involved in rice, wheat, and pulse cultivation.",
//           "status": "Ongoing",
//           "link": "https://dbtagriculture.bihar.gov.in/"
//         },
//         {
//           "id": 7,
//           "name": "Sub-Mission on Agricultural Mechanization (SMAM) in Bihar",
//           "description": "Financial assistance for purchasing agricultural machinery.",
//           "eligibility": "Farmers and farmer groups.",
//           "status": "Ongoing",
//           "link": "https://dbtagriculture.bihar.gov.in/agrimachinery/"
//         }
//       ],


//       "Maharashtra": [
//         {
//           "id": 2,
//           "name": "Pradhan Mantri Kisan Samman Nidhi Yojana (State Contribution)",
//           "description": "Financial assistance to farmers (with state contribution).",
//           "eligibility": "All landholding farmer families.",
//           "status": "Ongoing",
//           "link": "https://pmkisan.gov.in/",
//           "apply": "https://pmkisan.gov.in/registrationformnew.aspx"
//         },
//         {
//           "id": 3,
//           "name": "Dr. Panjabrao Deshmukh Organic Farming Mission",
//           "description": "Promotion of organic farming practices.",
//           "eligibility": "Farmers practicing or interested in organic farming.",
//           "status": "Ongoing",
//           "link": "https://agri.maharashtra.gov.in/en/schemes/dr-panjabrao-deshmukh-organic-farming-mission"
//         },
//         {
//           "id": 4,
//           "name": "Jalyukt Shivar Abhiyan",
//           "description": "Water conservation and drought mitigation program.",
//           "eligibility": "Farmers and communities in drought-prone areas.",
//           "status": "Ongoing (Phased Implementation)",
//           "link": "https://jalyuktshivar.maharashtra.gov.in/"
//         },
//         {
//           "id": 5,
//           "name": "Maharashtra State Agricultural Marketing Board (MSAMB) Schemes",
//           "description": "Various schemes for agricultural marketing and infrastructure development.",
//           "eligibility": "Farmers, farmer groups, and agricultural entrepreneurs.",
//           "status": "Ongoing",
//           "link": "http://www.msamb.com/en/"
//         },
//         {
//           "id": 6,
//           "name": "National Food Security Mission (NFSM) in Maharashtra",
//           "description": "Programs to increase production of rice, wheat, and pulses.",
//           "eligibility": "Farmers involved in rice, wheat, and pulse cultivation.",
//           "status": "Ongoing",
//           "link": "https://nfsm.gov.in/"
//         },
//         {
//           "id": 7,
//           "name": "Sub-Mission on Agricultural Mechanization (SMAM) in Maharashtra",
//           "description": "Financial assistance for purchasing agricultural machinery.",
//           "eligibility": "Farmers and farmer groups.",
//           "status": "Ongoing",
//           "link": "https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData?str=E9DDFA703C38E51A147B39AD4D6A9082",
//           "apply": "https://mahadbt.maharashtra.gov.in/"
//         },
//         {
//           "id": 8,
//           "name": "Crop Insurance (Pradhan Mantri Fasal Bima Yojana - PMFBY)",
//           "description": "Crop insurance to protect farmers against yield losses.",
//           "eligibility": "Farmers cultivating notified crops in notified areas.",
//           "status": "Ongoing",
//           "link": "https://pmfby.gov.in/",
//           "apply": "https://pmfby.gov.in/farmerRegistrationForm"
//         },
//         {
//           "id": 9,
//           "name": "Maharashtra Horticulture Development Corporation (MHDCL) Schemes",
//           "description": "Schemes for development and promotion of horticulture.",
//           "eligibility": "Horticulture farmers and related businesses.",
//           "status": "Ongoing",
//           "link": "https://mhdcl.maharashtra.gov.in/"
//         },
//         {
//           "id": 1,
//           "name": "Mahatma Jyotirao Phule Shetkari Karj Mukti Yojana",
//           "description": "Loan waiver scheme for farmers.",
//           "eligibility": "Farmers with outstanding crop loans.",
//           "status": "Closed (Specific phases completed)",
//           "link": "https://mjpsky.maharashtra.gov.in/",
//           "date": "2019-2020"
//         }
//       ],

//       "Arunachal Pradesh": [
//     {
//       "id": 1,
//       "name": "Chief Minister’s Sashakt Kisan Yojana",
//       "description": "Financial assistance for organic farming and allied activities.",
//       "eligibility": "Farmers engaged in organic farming and allied sectors.",
//       "status": "Ongoing",
//       "link": "https://www.arunachalpradesh.gov.in/cm-sashakt-kisan-yojana/"
//     },
//     {
//       "id": 2,
//       "name": "Arunachal Pradesh Krishi Rin Yojana",
//       "description": "Interest-free crop loans for farmers.",
//       "eligibility": "Farmers with active crop loans from banks.",
//       "status": "Ongoing",
//       "link": "https://agril.arunachal.gov.in/krishi-rin-yojana"
//     },
//     {
//       "id": 3,
//       "name": "Chief Minister’s White Revolution Scheme",
//       "description": "Subsidy for dairy farming development in the state.",
//       "eligibility": "Dairy farmers and cooperatives.",
//       "status": "Ongoing",
//       "link": "https://ahv.arunachal.gov.in/cm-white-revolution-scheme"
//     },
//     {
//       "id": 4,
//       "name": "Arunachal Pradesh Tea and Rubber Mission",
//       "description": "Support for tea and rubber plantation farmers.",
//       "eligibility": "Farmers involved in tea and rubber plantations.",
//       "status": "Ongoing",
//       "link": "https://horticulture.arunachal.gov.in/tea-rubber-mission"
//     },
//     {
//       "id": 5,
//       "name": "Mission Organic Value Chain Development for North Eastern Region (MOVCDNER)",
//       "description": "Promotion of organic farming with financial support.",
//       "eligibility": "Farmers interested in organic cultivation.",
//       "status": "Ongoing",
//       "link": "https://horticulture.arunachal.gov.in/movcdner"
//     },
//     {
//       "id": 6,
//       "name": "Chief Minister’s Piggery Mission",
//       "description": "Financial and technical support for piggery farming.",
//       "eligibility": "Pig farmers and cooperatives.",
//       "status": "Ongoing",
//       "link": "https://ahv.arunachal.gov.in/piggery-mission"
//     },
//     {
//       "id": 7,
//       "name": "Arunachal Pradesh Fisheries Development Scheme",
//       "description": "Support for fish farmers to enhance production.",
//       "eligibility": "Registered fish farmers.",
//       "status": "Ongoing",
//       "link": "https://fisheries.arunachal.gov.in/fisheries-development-scheme"
//     },
//     {
//       "id": 8,
//       "name": "Arunachal Pradesh Apiculture Mission",
//       "description": "Support for beekeeping and honey production.",
//       "eligibility": "Farmers and entrepreneurs engaged in apiculture.",
//       "status": "Ongoing",
//       "link": "https://horticulture.arunachal.gov.in/apiculture-mission"
//     }
//   ],

//   "Andhra Pradesh": [
//     {
//       "id": 1,
//       "name": "YSR Rythu Bharosa",
//       "description": "Financial assistance scheme for farmers in Andhra Pradesh.",
//       "eligibility": "Small and marginal farmers, tenant farmers.",
//       "status": "Ongoing",
//       "link": "https://ysrrythubharosa.ap.gov.in/",
//       "apply": "https://ysrrythubharosa.ap.gov.in/RBApp/RB/LoginForm.jsp"
//     },
//     {
//       "id": 2,
//       "name": "YSR Sunna Vaddi Panta Runalu",
//       "description": "Interest-free crop loans for farmers.",
//       "eligibility": "Farmers with active crop loans from banks.",
//       "status": "Ongoing",
//       "link": "https://apgovschemes.ap.gov.in/ysr-sunna-vaddi-panta-runalu/"
//     },
//     {
//       "id": 3,
//       "name": "AP Input Subsidy Scheme",
//       "description": "Compensation for farmers affected by natural calamities.",
//       "eligibility": "Farmers who suffered crop loss due to floods or other calamities.",
//       "status": "Ongoing",
//       "link": "https://apinputsubsidy.ap.gov.in/"
//     },
//     {
//       "id": 4,
//       "name": "YSR Jala Kala Scheme",
//       "description": "Borewell drilling subsidy for farmers.",
//       "eligibility": "Farmers with own agricultural land.",
//       "status": "Ongoing",
//       "link": "https://ysrjalakala.ap.gov.in/",
//       "apply": "https://ysrjalakala.ap.gov.in/ApplicationForm.aspx"
//     },
//     {
//       "id": 5,
//       "name": "YSR Kapu Nestham",
//       "description": "Financial assistance for women farmers from Kapu community.",
//       "eligibility": "Women farmers aged 45-60 from Kapu, Balija, Ontari, Telaga communities.",
//       "status": "Ongoing",
//       "link": "https://navasakam.ap.gov.in/KapuNestham/"
//     },
//     {
//       "id": 6,
//       "name": "Andhra Pradesh Zero Interest Crop Loan Scheme",
//       "description": "Zero-interest crop loans for farmers.",
//       "eligibility": "Farmers with bank-linked crop loans up to ₹1 lakh.",
//       "status": "Ongoing",
//       "link": "https://apagrisnet.gov.in/"
//     },
//     {
//       "id": 7,
//       "name": "YSR Cheyutha",
//       "description": "Financial support for women farmers and entrepreneurs.",
//       "eligibility": "Women aged 45-60 from SC/ST/OBC/Minority categories.",
//       "status": "Ongoing",
//       "link": "https://navasakam.ap.gov.in/Cheyutha/"
//     },
//     {
//       "id": 8,
//       "name": "AP CM Free Borewell Scheme",
//       "description": "Free borewell drilling assistance for small and marginal farmers.",
//       "eligibility": "Small and marginal farmers with no existing borewell.",
//       "status": "Ongoing",
//       "link": "https://apagrisnet.gov.in/FreeBorewellScheme/"
//     }
//   ],
//   "Assam": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Krishi Sa-Sajuli Yojana",
//       "description": "Financial assistance for purchasing farm tools and equipment.",
//       "eligibility": "Small and marginal farmers of Assam.",
//       "status": "Ongoing",
//       "link": "https://agri.assam.gov.in/schemes/mukhyamantri-krishi-sa-sajuli-yojana"
//     },
//     {
//       "id": 2,
//       "name": "Assam Agribusiness and Rural Transformation Project (APART)",
//       "description": "Improvement of agricultural value chains and productivity.",
//       "eligibility": "Farmers and agribusiness stakeholders.",
//       "status": "Ongoing",
//       "link": "https://apart.assam.gov.in/"
//     },
//     {
//       "id": 3,
//       "name": "Assam Livestock and Poultry Mission",
//       "description": "Support for livestock and poultry farming development.",
//       "eligibility": "Farmers engaged in animal husbandry and poultry farming.",
//       "status": "Ongoing",
//       "link": "https://animalhusbandry.assam.gov.in/"
//     },
//     {
//       "id": 4,
//       "name": "Chief Minister Samagra Gramya Unnayan Yojana (CMSGUY)",
//       "description": "Comprehensive rural development including agriculture.",
//       "eligibility": "Rural farmers and SHGs in Assam.",
//       "status": "Ongoing",
//       "link": "https://cmsguy.assam.gov.in/"
//     },
//     {
//       "id": 5,
//       "name": "Assam Fisheries Development Scheme",
//       "description": "Financial and technical support for fish farmers.",
//       "eligibility": "Fish farmers and cooperatives in Assam.",
//       "status": "Ongoing",
//       "link": "https://fisheries.assam.gov.in/"
//     },
//     {
//       "id": 6,
//       "name": "Assam Organic Farming Mission",
//       "description": "Promotion and financial support for organic farming.",
//       "eligibility": "Farmers interested in organic farming.",
//       "status": "Ongoing",
//       "link": "https://horticulture.assam.gov.in/organic-farming-mission"
//     },
//     {
//       "id": 7,
//       "name": "Mukhyamantri Atmanirbhar Asom Scheme",
//       "description": "Financial assistance for farmers and rural entrepreneurs.",
//       "eligibility": "Farmers and rural entrepreneurs in Assam.",
//       "status": "Ongoing",
//       "link": "https://assam.gov.in/mukhyamantri-atmanirbhar-asom-scheme"
//     },
//     {
//       "id": 8,
//       "name": "Assam Tea Tribes Welfare Scheme",
//       "description": "Support for tea plantation workers and farmers.",
//       "eligibility": "Tea plantation workers and small tea growers.",
//       "status": "Ongoing",
//       "link": "https://ttwd.assam.gov.in/"
//     }
//   ],

//   "Chhattisgarh": [
//     {
//       "id": 1,
//       "name": "Rajiv Gandhi Kisan Nyay Yojana",
//       "description": "Financial support to farmers for increasing agricultural productivity.",
//       "eligibility": "Farmers growing paddy, maize, and sugarcane.",
//       "status": "Ongoing",
//       "link": "https://rgkny.cg.nic.in/"
//     },
//     {
//       "id": 2,
//       "name": "Godhan Nyay Yojana",
//       "description": "Procurement of cow dung from farmers for organic fertilizer production.",
//       "eligibility": "Livestock owners and dairy farmers in Chhattisgarh.",
//       "status": "Ongoing",
//       "link": "https://gny.cg.nic.in/"
//     },
//     {
//       "id": 3,
//       "name": "Krishak Jeevan Jyoti Yojana",
//       "description": "Subsidized electricity supply for farmers.",
//       "eligibility": "Registered farmers using electricity for agricultural purposes.",
//       "status": "Ongoing",
//       "link": "https://cspdcl.co.in/cseb/krishak-jeevan-jyoti-yojana"
//     },
//     {
//       "id": 4,
//       "name": "Mukhyamantri Suposhan Abhiyan",
//       "description": "Nutritional support to farmers and their families.",
//       "eligibility": "Malnourished farmers and children in Chhattisgarh.",
//       "status": "Ongoing",
//       "link": "https://sw.cg.gov.in/suposhan-abhiyan"
//     },
//     {
//       "id": 5,
//       "name": "Chhattisgarh Horticulture Mission",
//       "description": "Promotion of horticulture farming and allied sectors.",
//       "eligibility": "Farmers engaged in horticulture cultivation.",
//       "status": "Ongoing",
//       "link": "https://horticulture.cg.gov.in/"
//     },
//     {
//       "id": 6,
//       "name": "Mukhyamantri Vriksh Sampada Yojana",
//       "description": "Subsidy for commercial tree plantation.",
//       "eligibility": "Farmers interested in agroforestry and tree plantation.",
//       "status": "Ongoing",
//       "link": "https://forest.cg.gov.in/vriksh-sampada-yojana"
//     },
//     {
//       "id": 7,
//       "name": "Chhattisgarh Fisheries Development Scheme",
//       "description": "Support for fisheries and aquaculture development.",
//       "eligibility": "Fish farmers and cooperatives in Chhattisgarh.",
//       "status": "Ongoing",
//       "link": "https://fisheries.cg.gov.in/"
//     },
//     {
//       "id": 8,
//       "name": "Mukhyamantri Krishi Vikas Yojana",
//       "description": "Support for modern farming techniques and irrigation.",
//       "eligibility": "Small and marginal farmers in Chhattisgarh.",
//       "status": "Ongoing",
//       "link": "https://agri.cg.gov.in/krishi-vikas-yojana"
//     }
//   ],

//   "Goa": [
//     {
//       "id": 1,
//       "name": "Shetkari Adhar Nidhi Scheme",
//       "description": "Financial assistance to small and marginal farmers.",
//       "eligibility": "Small and marginal farmers in Goa.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/shetkari-adhar-nidhi"
//     },
//     {
//       "id": 2,
//       "name": "Assistance for Agricultural Mechanization",
//       "description": "Subsidy on purchase of agricultural machinery and equipment.",
//       "eligibility": "Farmers purchasing approved agricultural machinery.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/agri-mechanization"
//     },
//     {
//       "id": 3,
//       "name": "Development of Horticulture Scheme",
//       "description": "Support for horticulture crop cultivation.",
//       "eligibility": "Farmers engaged in horticulture in Goa.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/horticulture-development"
//     },
//     {
//       "id": 4,
//       "name": "Assistance for Organic Farming",
//       "description": "Financial assistance for organic farming initiatives.",
//       "eligibility": "Farmers practicing organic farming.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/organic-farming"
//     },
//     {
//       "id": 5,
//       "name": "Kamdhenu Scheme",
//       "description": "Support for dairy farming and cattle purchase.",
//       "eligibility": "Dairy farmers and livestock owners.",
//       "status": "Ongoing",
//       "link": "https://ahvs.goa.gov.in/kamdhenu-scheme"
//     },
//     {
//       "id": 6,
//       "name": "Fisheries Subsidy Scheme",
//       "description": "Financial assistance for fishermen and fish farmers.",
//       "eligibility": "Registered fishermen and aquaculture farmers.",
//       "status": "Ongoing",
//       "link": "https://fisheries.goa.gov.in/fisheries-subsidy"
//     },
//     {
//       "id": 7,
//       "name": "Assistance for Water Conservation in Agriculture",
//       "description": "Support for water conservation structures in farming.",
//       "eligibility": "Farmers implementing water conservation methods.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/water-conservation"
//     },
//     {
//       "id": 8,
//       "name": "Assistance for Sericulture Development",
//       "description": "Support for silk farming and sericulture activities.",
//       "eligibility": "Farmers involved in silk farming.",
//       "status": "Ongoing",
//       "link": "https://www.agri.goa.gov.in/sericulture-development"
//     }
//   ],

//   "Gujarat": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Kisan Sahay Yojana",
//       "description": "Financial assistance for farmers affected by natural calamities.",
//       "eligibility": "Farmers facing crop loss due to natural disasters.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/mksy"
//     },
//     {
//       "id": 2,
//       "name": "Kisan Parivahan Yojana",
//       "description": "Subsidy for farmers to purchase transport vehicles.",
//       "eligibility": "Farmers in Gujarat needing agricultural transport vehicles.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/kpy"
//     },
//     {
//       "id": 3,
//       "name": "Gujarat Agro Industries Corporation Schemes",
//       "description": "Support for agro-processing industries and farming technology.",
//       "eligibility": "Farmers and agribusiness entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://gaic.gujarat.gov.in/"
//     },
//     {
//       "id": 4,
//       "name": "Soil Health Card Scheme (Gujarat State)",
//       "description": "Testing and analysis of soil for better farming practices.",
//       "eligibility": "All farmers in Gujarat.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/soilhealth"
//     },
//     {
//       "id": 5,
//       "name": "Horticulture Development Scheme",
//       "description": "Support for horticulture farmers with subsidies and assistance.",
//       "eligibility": "Farmers engaged in horticulture production.",
//       "status": "Ongoing",
//       "link": "https://horticulture.gujarat.gov.in/"
//     },
//     {
//       "id": 6,
//       "name": "Micro Irrigation Scheme (Gujarat State)",
//       "description": "Subsidy for drip and sprinkler irrigation systems.",
//       "eligibility": "Farmers implementing micro-irrigation techniques.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/micro-irrigation"
//     },
//     {
//       "id": 7,
//       "name": "Dairy Entrepreneurship Development Scheme",
//       "description": "Support for dairy farmers and milk producers.",
//       "eligibility": "Farmers involved in dairy farming.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/dairy"
//     },
//     {
//       "id": 8,
//       "name": "Farm Pond Scheme",
//       "description": "Assistance for constructing farm ponds to store water.",
//       "eligibility": "Farmers needing water storage solutions.",
//       "status": "Ongoing",
//       "link": "https://ikhedut.gujarat.gov.in/farm-pond"
//     }
//   ],

//   "Haryana": [
//     {
//       "id": 1,
//       "name": "Meri Fasal Mera Byora",
//       "description": "Online portal for farmers to register their crops and avail benefits.",
//       "eligibility": "All farmers in Haryana.",
//       "status": "Ongoing",
//       "link": "https://fasal.haryana.gov.in/"
//     },
//     {
//       "id": 2,
//       "name": "Bhavantar Bharpai Yojana",
//       "description": "Price difference compensation scheme for farmers.",
//       "eligibility": "Farmers selling listed crops at a lower price than MSP.",
//       "status": "Ongoing",
//       "link": "https://agriharyana.gov.in/bhavantar-bharpai"
//     },
//     {
//       "id": 3,
//       "name": "Haryana Micro Irrigation Scheme",
//       "description": "Financial support for micro-irrigation systems.",
//       "eligibility": "Farmers implementing drip or sprinkler irrigation.",
//       "status": "Ongoing",
//       "link": "https://haryanamir.gov.in/"
//     },
//     {
//       "id": 4,
//       "name": "Horticulture Subsidy Scheme",
//       "description": "Support for farmers growing horticultural crops.",
//       "eligibility": "Farmers engaged in horticulture cultivation.",
//       "status": "Ongoing",
//       "link": "https://hortharyana.gov.in/"
//     },
//     {
//       "id": 5,
//       "name": "Pashudhan Credit Card Yojana",
//       "description": "Loan facility for livestock farmers.",
//       "eligibility": "Farmers engaged in dairy and animal husbandry.",
//       "status": "Ongoing",
//       "link": "https://pashudhanharyana.gov.in/"
//     },
//     {
//       "id": 6,
//       "name": "Kisan Evam Sarvjan Hitay Lift Irrigation Scheme",
//       "description": "Subsidy for lift irrigation infrastructure.",
//       "eligibility": "Farmers needing irrigation facilities.",
//       "status": "Ongoing",
//       "link": "https://hid.gov.in/lift-irrigation"
//     },
//     {
//       "id": 7,
//       "name": "Haryana Dairy Development Scheme",
//       "description": "Support for dairy farmers through financial assistance.",
//       "eligibility": "Dairy farmers and cooperatives in Haryana.",
//       "status": "Ongoing",
//       "link": "https://pashudhanharyana.gov.in/dairy-development"
//     },
//     {
//       "id": 8,
//       "name": "Crop Residue Management Scheme",
//       "description": "Subsidy for machinery to manage crop residue and reduce stubble burning.",
//       "eligibility": "Farmers using crop residue management techniques.",
//       "status": "Ongoing",
//       "link": "https://haryanaagrimachinery.gov.in/"
//     }
//   ],

//   "Himachal Pradesh": [
//     {
//       "id": 1,
//       "name": "Mukhya Mantri Kisan Evam Khetihar Mazdoor Jeevan Suraksha Yojana",
//       "description": "Insurance coverage for farmers and agricultural laborers.",
//       "eligibility": "All farmers and agricultural laborers in Himachal Pradesh.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/life-insurance"
//     },
//     {
//       "id": 2,
//       "name": "Prakritik Kheti Khushhal Kisan Yojana",
//       "description": "Promotion of natural and organic farming.",
//       "eligibility": "Farmers practicing natural or organic farming.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/natural-farming"
//     },
//     {
//       "id": 3,
//       "name": "Mukhya Mantri Nutan Polyhouse Project",
//       "description": "Financial assistance for the construction of polyhouses.",
//       "eligibility": "Farmers interested in protected cultivation.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/polyhouse"
//     },
//     {
//       "id": 4,
//       "name": "Himachal Pradesh Horticulture Development Project",
//       "description": "Support for horticulture farmers to increase productivity.",
//       "eligibility": "Farmers engaged in horticulture cultivation.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/horticulture"
//     },
//     {
//       "id": 5,
//       "name": "Dr. Yashwant Singh Parmar Kisan Swarojgar Yojana",
//       "description": "Support for self-employment in agriculture.",
//       "eligibility": "Farmers and agripreneurs.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/self-employment"
//     },
//     {
//       "id": 6,
//       "name": "Jal Se Krishi Ko Bal Yojana",
//       "description": "Subsidy for irrigation infrastructure development.",
//       "eligibility": "Farmers needing irrigation facilities.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/irrigation"
//     },
//     {
//       "id": 7,
//       "name": "Himachal Pradesh Dairy Development Scheme",
//       "description": "Support for dairy farmers through financial assistance.",
//       "eligibility": "Dairy farmers and milk producers in Himachal Pradesh.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/dairy"
//     },
//     {
//       "id": 8,
//       "name": "Subsidy for Beekeeping Development",
//       "description": "Financial assistance for beekeeping and honey production.",
//       "eligibility": "Farmers and entrepreneurs involved in apiculture.",
//       "status": "Ongoing",
//       "link": "https://www.hpagriculture.com/beekeeping"
//     }
//   ],

//   "Jharkhand": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Krishi Ashirwad Yojana",
//       "description": "Financial assistance to small and marginal farmers.",
//       "eligibility": "Small and marginal farmers of Jharkhand.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/krishi-ashirwad"
//     },
//     {
//       "id": 2,
//       "name": "Birsa Harit Gram Yojana",
//       "description": "Tree plantation and agroforestry promotion for farmers.",
//       "eligibility": "Farmers and landowners willing to participate in agroforestry.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/harit-gram"
//     },
//     {
//       "id": 3,
//       "name": "Johar Scheme",
//       "description": "Livelihood promotion for small and marginal farmers.",
//       "eligibility": "Farmers and rural entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/johar"
//     },
//     {
//       "id": 4,
//       "name": "Dairy Development Scheme",
//       "description": "Financial aid for dairy farmers and cooperatives.",
//       "eligibility": "Dairy farmers and milk cooperatives in Jharkhand.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/dairy-development"
//     },
//     {
//       "id": 5,
//       "name": "Seed Distribution Scheme",
//       "description": "Subsidized seeds for farmers to improve crop yield.",
//       "eligibility": "Registered farmers in Jharkhand.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/seed-distribution"
//     },
//     {
//       "id": 6,
//       "name": "Jharkhand Horticulture Mission",
//       "description": "Support for farmers engaged in horticulture production.",
//       "eligibility": "Farmers involved in horticulture and related activities.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/horticulture-mission"
//     },
//     {
//       "id": 7,
//       "name": "Farm Mechanization Scheme",
//       "description": "Subsidy on farm machinery for small and marginal farmers.",
//       "eligibility": "Farmers purchasing modern agricultural equipment.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/farm-mechanization"
//     },
//     {
//       "id": 8,
//       "name": "Poultry Development Scheme",
//       "description": "Financial assistance for poultry farming.",
//       "eligibility": "Farmers and entrepreneurs involved in poultry farming.",
//       "status": "Ongoing",
//       "link": "https://www.jharkhand.gov.in/poultry-development"
//     }
//   ],

//   "Karnataka": [
//     {
//       "id": 1,
//       "name": "Krishi Bhagya Scheme",
//       "description": "Water conservation and irrigation support for farmers.",
//       "eligibility": "Small and marginal farmers in rain-fed areas.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Suvarna Bhoomi Yojana",
//       "description": "Financial aid for farmers to improve soil fertility.",
//       "eligibility": "Small and marginal farmers engaged in agriculture.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Organic Farming Policy",
//       "description": "Support for farmers shifting to organic farming practices.",
//       "eligibility": "Farmers practicing or transitioning to organic farming.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Bhoochetana Scheme",
//       "description": "Soil health improvement program for enhanced productivity.",
//       "eligibility": "All farmers in Karnataka.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Farm Mechanization Scheme",
//       "description": "Subsidy on farm machinery and modern equipment.",
//       "eligibility": "Small and marginal farmers.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Karnataka Raitha Suraksha Pradhan Mantri Fasal Bima Yojana",
//       "description": "Crop insurance scheme with state support.",
//       "eligibility": "Farmers growing notified crops in Karnataka.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Animal Husbandry and Dairy Development Scheme",
//       "description": "Support for dairy and livestock farmers.",
//       "eligibility": "Farmers engaged in animal husbandry and dairy activities.",
//       "status": "Ongoing",
//       "link": "https://raitamitra.karnataka.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Karnataka Horticulture Mission",
//       "description": "Financial assistance and training for horticulture farmers.",
//       "eligibility": "Farmers involved in horticulture and floriculture.",
//       "status": "Ongoing",
//       "link": "https://horticulture.karnataka.gov.in"
//     }
//   ],

//   "Kerala": [
//     {
//       "id": 1,
//       "name": "Karshaka Pension Scheme",
//       "description": "Pension scheme for elderly farmers in Kerala.",
//       "eligibility": "Farmers above the age of 60 who have been engaged in farming for at least 10 years.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Subhiksha Keralam",
//       "description": "Agricultural self-sufficiency initiative.",
//       "eligibility": "All farmers in Kerala.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Organic Kerala Mission",
//       "description": "Promotion of organic farming practices.",
//       "eligibility": "Farmers and organizations promoting organic farming.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Vegetable Development Programme",
//       "description": "Financial and technical support for vegetable farming.",
//       "eligibility": "Farmers and self-help groups involved in vegetable cultivation.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "State Horticulture Mission",
//       "description": "Support for horticulture and floriculture farmers.",
//       "eligibility": "Farmers engaged in horticulture production.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Kissan Credit Card (KCC) Scheme",
//       "description": "Credit support for farmers in Kerala.",
//       "eligibility": "All farmers and farmer groups in Kerala.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Kerala Livestock Development Board Schemes",
//       "description": "Support for dairy and livestock farmers.",
//       "eligibility": "Farmers engaged in dairy and livestock farming.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Paddy Procurement Scheme",
//       "description": "Minimum support price assurance for paddy farmers.",
//       "eligibility": "Paddy farmers registered in Kerala.",
//       "status": "Ongoing",
//       "link": "https://keralaagriculture.gov.in"
//     }
//   ],

//   "Madhya Pradesh": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Krishak Udhyami Yojana",
//       "description": "Financial support for farmers' children to start agri-businesses.",
//       "eligibility": "Children of farmers in Madhya Pradesh.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Bhavantar Bhugtan Yojana",
//       "description": "Price difference payment scheme for farmers.",
//       "eligibility": "Farmers growing selected crops.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Krishi Rin Samadhan Yojana",
//       "description": "Loan settlement scheme for farmers.",
//       "eligibility": "Farmers with pending agricultural loans.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Mukhyamantri Solar Pump Yojana",
//       "description": "Subsidy for farmers to install solar-powered pumps.",
//       "eligibility": "Farmers with irrigation needs.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Gramin Krishi Mausam Seva",
//       "description": "Weather advisory services for farmers.",
//       "eligibility": "All farmers in Madhya Pradesh.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Rashtriya Krishi Vikas Yojana (RKVY) - MP Implementation",
//       "description": "State implementation of RKVY for agricultural growth.",
//       "eligibility": "All farmers in Madhya Pradesh.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Madhya Pradesh Horticulture Mission",
//       "description": "Support for horticulture farmers.",
//       "eligibility": "Farmers engaged in horticulture.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Organic Farming Promotion Scheme",
//       "description": "Incentives and support for organic farming.",
//       "eligibility": "Farmers practicing or shifting to organic farming.",
//       "status": "Ongoing",
//       "link": "https://mpkrishi.mp.gov.in"
//     }
//   ],

//   "Manipur": [
//     {
//       "id": 1,
//       "name": "Organic Farming Promotion Scheme",
//       "description": "Support for organic farming in Manipur.",
//       "eligibility": "Farmers practicing organic farming.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Horticulture Mission for North East and Himalayan States (MMNEH)",
//       "description": "Promotion of horticulture crops and infrastructure.",
//       "eligibility": "Farmers engaged in horticulture.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Livestock Development Scheme",
//       "description": "Support for livestock farmers in Manipur.",
//       "eligibility": "Dairy and livestock farmers.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Sericulture Development Programme",
//       "description": "Encouragement and financial support for sericulture farming.",
//       "eligibility": "Silk farmers and sericulture entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Farm Mechanization Scheme",
//       "description": "Subsidy for modern agricultural equipment.",
//       "eligibility": "Registered farmers in Manipur.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Water Conservation and Irrigation Development Scheme",
//       "description": "Efforts to improve irrigation facilities.",
//       "eligibility": "Farmers with irrigation requirements.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Agri-Clinics and Agri-Business Centres Scheme",
//       "description": "Training and support for agricultural entrepreneurs.",
//       "eligibility": "Individuals interested in agribusiness.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Integrated Pest Management (IPM) Programme",
//       "description": "Promotion of eco-friendly pest control methods.",
//       "eligibility": "Farmers using or transitioning to IPM methods.",
//       "status": "Ongoing",
//       "link": "https://agrimanipur.gov.in"
//     }
//   ],

//   "Meghalaya": [
//     {
//       "id": 1,
//       "name": "Meghalaya State Aquaculture Mission",
//       "description": "Promotion of fisheries and aquaculture.",
//       "eligibility": "Fish farmers and entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Mission Organic Meghalaya",
//       "description": "Encouraging organic farming practices in the state.",
//       "eligibility": "Farmers practicing organic farming.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Integrated Basin Development and Livelihood Promotion Programme (IBDLP)",
//       "description": "Holistic rural and agricultural development.",
//       "eligibility": "Farmers and rural communities.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Meghalaya Livestock Mission",
//       "description": "Development of the livestock sector in the state.",
//       "eligibility": "Livestock farmers and dairy entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Agroforestry and Plantation Crop Development Scheme",
//       "description": "Support for agroforestry and plantation crops.",
//       "eligibility": "Farmers engaged in plantation crops.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Sericulture Development Scheme",
//       "description": "Promotion and financial support for sericulture activities.",
//       "eligibility": "Silk farmers and entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Vegetable Development Programme",
//       "description": "Encouraging vegetable farming in Meghalaya.",
//       "eligibility": "Farmers engaged in vegetable cultivation.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Soil Health and Fertility Management Scheme",
//       "description": "Improving soil health for better agricultural productivity.",
//       "eligibility": "Farmers needing soil management support.",
//       "status": "Ongoing",
//       "link": "https://megagriculture.gov.in"
//     }
//   ],

//   "Mizoram": [
//     {
//       "id": 1,
//       "name": "Mizoram Organic Farming Promotion Scheme",
//       "description": "Support for organic farming practices in Mizoram.",
//       "eligibility": "Farmers practicing or transitioning to organic farming.",
//       "status": "Ongoing",
//       "link": "https://agriculturemizoram.nic.in"
//     },
//     {
//       "id": 2,
//       "name": "New Land Use Policy (NLUP)",
//       "description": "Providing financial and technical support to farmers for sustainable land use.",
//       "eligibility": "Farmers and rural communities engaged in agriculture.",
//       "status": "Ongoing",
//       "link": "https://nlup.mizoram.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Horticulture Development Scheme",
//       "description": "Encouraging horticulture and fruit crop cultivation.",
//       "eligibility": "Farmers engaged in horticulture and plantation crops.",
//       "status": "Ongoing",
//       "link": "https://horticulture.mizoram.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Mizoram Livestock Development Scheme",
//       "description": "Support for dairy and livestock farmers.",
//       "eligibility": "Dairy farmers and livestock rearers.",
//       "status": "Ongoing",
//       "link": "https://ahvety.mizoram.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Soil and Water Conservation Programme",
//       "description": "Initiative for soil conservation and water management.",
//       "eligibility": "Farmers requiring assistance with soil and water conservation.",
//       "status": "Ongoing",
//       "link": "https://swcd.mizoram.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Sericulture Development Programme",
//       "description": "Encouragement and financial support for sericulture farming.",
//       "eligibility": "Silk farmers and sericulture entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://sericulture.mizoram.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Farm Mechanization Scheme",
//       "description": "Financial aid for agricultural machinery and modern farming techniques.",
//       "eligibility": "Registered farmers in Mizoram.",
//       "status": "Ongoing",
//       "link": "https://agriculturemizoram.nic.in"
//     },
//     {
//       "id": 8,
//       "name": "Mizoram Fisheries Development Scheme",
//       "description": "Enhancing fisheries and aquaculture activities in the state.",
//       "eligibility": "Fish farmers and entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://fisheries.mizoram.gov.in"
//     }
//   ],

//   "Nagaland": [
//     {
//       "id": 1,
//       "name": "Nagaland Organic Farming Mission",
//       "description": "Promotion of organic farming in Nagaland.",
//       "eligibility": "Farmers adopting organic farming practices.",
//       "status": "Ongoing",
//       "link": "https://agriculture.nagaland.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Nagaland Horticulture Mission",
//       "description": "Support for horticulture crop development and promotion.",
//       "eligibility": "Farmers engaged in horticulture cultivation.",
//       "status": "Ongoing",
//       "link": "https://horticulture.nagaland.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Nagaland Rural Livelihood Mission (NRLM)",
//       "description": "Empowering rural farmers through financial and skill support.",
//       "eligibility": "Rural farmers and self-help groups.",
//       "status": "Ongoing",
//       "link": "https://rd.nagaland.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Nagaland Piggery Development Scheme",
//       "description": "Financial aid and support for piggery farming.",
//       "eligibility": "Livestock farmers involved in pig farming.",
//       "status": "Ongoing",
//       "link": "https://ahvety.nagaland.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Soil & Water Conservation Programme",
//       "description": "Improvement of soil health and water conservation measures.",
//       "eligibility": "Farmers and landowners requiring soil conservation.",
//       "status": "Ongoing",
//       "link": "https://swc.nagaland.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Nagaland Sericulture Development Programme",
//       "description": "Encouragement and financial support for silk farming.",
//       "eligibility": "Silk farmers and sericulture entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://sericulture.nagaland.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Nagaland Fishery Development Scheme",
//       "description": "Enhancing fisheries and aquaculture activities.",
//       "eligibility": "Fish farmers and fisheries entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://fisheries.nagaland.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Farm Mechanization Programme",
//       "description": "Financial assistance for agricultural machinery purchase.",
//       "eligibility": "Registered farmers in Nagaland.",
//       "status": "Ongoing",
//       "link": "https://agriculture.nagaland.gov.in"
//     }
//   ],

//   "Odisha": [
//     {
//       "id": 1,
//       "name": "Odisha Mukhyamantri Krushi Udyog Yojana",
//       "description": "Financial assistance for setting up new agribusiness units.",
//       "eligibility": "Entrepreneurs and farmers establishing agri-based enterprises.",
//       "status": "Ongoing",
//       "link": "https://agriodisha.nic.in"
//     },
//     {
//       "id": 2,
//       "name": "Biju Krushak Kalyan Yojana (BKKY)",
//       "description": "Health insurance scheme for farmers and their families.",
//       "eligibility": "Farmers and their families with valid BKKY cards.",
//       "status": "Ongoing",
//       "link": "https://bkkyojona.odisha.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "KALIA (Krushak Assistance for Livelihood and Income Augmentation) Scheme",
//       "description": "Direct financial assistance to small and marginal farmers.",
//       "eligibility": "Small and marginal farmers and landless agricultural laborers.",
//       "status": "Ongoing",
//       "link": "https://kalia.odisha.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Odisha Agricultural Development Programme",
//       "description": "Support for modern farming techniques and equipment.",
//       "eligibility": "Farmers adopting advanced agricultural practices.",
//       "status": "Ongoing",
//       "link": "https://agriodisha.nic.in"
//     },
//     {
//       "id": 5,
//       "name": "Odisha Horticulture Development Scheme",
//       "description": "Promotion and support for horticultural crop cultivation.",
//       "eligibility": "Farmers engaged in horticulture and plantation farming.",
//       "status": "Ongoing",
//       "link": "https://odihort.nic.in"
//     },
//     {
//       "id": 6,
//       "name": "Odisha Livestock Development Scheme",
//       "description": "Support for livestock and dairy farming in Odisha.",
//       "eligibility": "Dairy farmers and livestock rearers.",
//       "status": "Ongoing",
//       "link": "https://fardodisha.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Odisha Fisheries Development Programme",
//       "description": "Enhancement of fisheries and aquaculture activities.",
//       "eligibility": "Fish farmers and entrepreneurs.",
//       "status": "Ongoing",
//       "link": "https://fisheries.odisha.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Odisha Farm Mechanization Scheme",
//       "description": "Financial assistance for purchasing agricultural machinery.",
//       "eligibility": "Registered farmers in Odisha.",
//       "status": "Ongoing",
//       "link": "https://agriodisha.nic.in"
//     }
//   ],

//   "Punjab": [
//     {
//       "id": 1,
//       "name": "Punjab State Farmers Debt Relief Scheme",
//       "description": "Loan waiver scheme for small and marginal farmers in Punjab.",
//       "eligibility": "Small and marginal farmers with outstanding agricultural loans.",
//       "status": "Ongoing",
//       "link": "https://agripb.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Punjab Horticulture Mission",
//       "description": "Promotion and support for horticulture farming in Punjab.",
//       "eligibility": "Farmers engaged in horticulture cultivation.",
//       "status": "Ongoing",
//       "link": "https://punjabhorticulture.com"
//     },
//     {
//       "id": 3,
//       "name": "Punjab Agricultural Infrastructure Fund",
//       "description": "Financial assistance for improving agricultural infrastructure.",
//       "eligibility": "Farmers, FPOs, and agribusinesses.",
//       "status": "Ongoing",
//       "link": "https://agripb.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Punjab Organic Farming Policy",
//       "description": "Encouraging organic farming practices among farmers.",
//       "eligibility": "Farmers transitioning to organic farming.",
//       "status": "Ongoing",
//       "link": "https://agripb.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Punjab Crop Diversification Programme",
//       "description": "Incentives for farmers to shift from paddy to alternate crops.",
//       "eligibility": "Farmers adopting crop diversification practices.",
//       "status": "Ongoing",
//       "link": "https://agripb.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Smart Village Campaign",
//       "description": "Development initiatives for rural agricultural communities.",
//       "eligibility": "Rural farmers and communities in Punjab.",
//       "status": "Ongoing",
//       "link": "https://punjab.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Punjab Dairy Development Scheme",
//       "description": "Support for dairy farmers to enhance milk production.",
//       "eligibility": "Dairy farmers and cooperative societies.",
//       "status": "Ongoing",
//       "link": "https://dairydevpunjab.org"
//     },
//     {
//       "id": 8,
//       "name": "Subsidy for Agricultural Machinery",
//       "description": "Financial assistance for modern agricultural equipment.",
//       "eligibility": "Farmers purchasing agricultural machinery.",
//       "status": "Ongoing",
//       "link": "https://agripb.gov.in"
//     }
//   ],

//   "Rajasthan": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Krishak Sathi Yojana",
//       "description": "Financial assistance to farmers for agricultural development.",
//       "eligibility": "Small and marginal farmers in Rajasthan.",
//       "status": "Ongoing",
//       "link": "https://agriculture.rajasthan.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Rajasthan Organic Farming Policy",
//       "description": "Promotion and support for organic farming in the state.",
//       "eligibility": "Farmers transitioning to organic farming.",
//       "status": "Ongoing",
//       "link": "https://agriculture.rajasthan.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Subsidy for Agricultural Equipment",
//       "description": "Financial aid for purchasing modern agricultural tools.",
//       "eligibility": "Registered farmers in Rajasthan.",
//       "status": "Ongoing",
//       "link": "https://rajasthan.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Mukhyamantri Beej Swavalamban Yojana",
//       "description": "Subsidized seeds for farmers to promote self-sufficiency.",
//       "eligibility": "Farmers in Rajasthan requiring certified seeds.",
//       "status": "Ongoing",
//       "link": "https://agriculture.rajasthan.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Rajasthan Horticulture Development Mission",
//       "description": "Financial support for horticulture and allied activities.",
//       "eligibility": "Farmers engaged in horticulture.",
//       "status": "Ongoing",
//       "link": "https://horticulture.rajasthan.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Raj Kisan Saathi",
//       "description": "A single-window platform for farmer-related schemes and services.",
//       "eligibility": "All farmers in Rajasthan.",
//       "status": "Ongoing",
//       "link": "https://rajkisan.rajasthan.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Rajasthan Livestock Development Scheme",
//       "description": "Support for livestock and dairy farmers in Rajasthan.",
//       "eligibility": "Livestock farmers and dairy cooperatives.",
//       "status": "Ongoing",
//       "link": "https://animalhusbandry.rajasthan.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Kisan Mitra Urja Yojana",
//       "description": "Electricity subsidy for farmers to reduce input costs.",
//       "eligibility": "Registered farmers using electricity for agricultural purposes.",
//       "status": "Ongoing",
//       "link": "https://energy.rajasthan.gov.in"
//     }
//   ],

//   "Sikkim": [
//     {
//       "id": 1,
//       "name": "Sikkim Organic Mission",
//       "description": "State initiative to promote organic farming practices.",
//       "eligibility": "Farmers practicing organic farming in Sikkim.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 2,
//       "name": "Mukhyamantri Krishi Atmanirbhar Yojana",
//       "description": "Financial aid and training for self-sufficient agriculture.",
//       "eligibility": "Farmers in Sikkim adopting sustainable farming practices.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 3,
//       "name": "Sikkim Dairy Development Scheme",
//       "description": "Support for dairy farmers to improve milk production.",
//       "eligibility": "Dairy farmers in Sikkim.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 4,
//       "name": "Sikkim Livelihood Schools for Farmers",
//       "description": "Training and capacity-building programs for farmers.",
//       "eligibility": "Aspiring and existing farmers in Sikkim.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 5,
//       "name": "Sikkim Integrated Horticulture Development Program",
//       "description": "Support for horticulture and cash crops.",
//       "eligibility": "Horticulture farmers in Sikkim.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 6,
//       "name": "Kisan Credit Card Scheme (State-Specific Enhancements)",
//       "description": "Financial support and credit facilities for farmers.",
//       "eligibility": "Eligible farmers in Sikkim.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 7,
//       "name": "Subsidy for Agricultural Mechanization in Sikkim",
//       "description": "Financial assistance for purchasing modern farm equipment.",
//       "eligibility": "Farmers in Sikkim investing in modern machinery.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     },
//     {
//       "id": 8,
//       "name": "Sikkim Watershed Development Project",
//       "description": "Sustainable water management for farming communities.",
//       "eligibility": "Farmers in designated watershed areas.",
//       "status": "Ongoing",
//       "link": "https://sikkimagrisnet.org"
//     }
//   ],

//   "Tamil Nadu": [
//     {
//       "id": 1,
//       "name": "Tamil Nadu Precision Farming Project",
//       "description": "Adoption of precision farming techniques to increase productivity.",
//       "eligibility": "Farmers in Tamil Nadu adopting modern farming methods.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Chief Minister’s Solar Powered Pump Scheme",
//       "description": "Subsidized solar-powered pumps for irrigation.",
//       "eligibility": "Farmers requiring irrigation support in Tamil Nadu.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Tamil Nadu Horticulture Development Scheme",
//       "description": "Support for horticulture development and cultivation.",
//       "eligibility": "Horticulture farmers in Tamil Nadu.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Micro Irrigation Scheme",
//       "description": "Subsidy for drip and sprinkler irrigation systems.",
//       "eligibility": "Farmers implementing micro-irrigation techniques.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Tamil Nadu Agricultural Mechanization Scheme",
//       "description": "Subsidized farm machinery and equipment.",
//       "eligibility": "Farmers looking to modernize their farming techniques.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "State Fodder Development Scheme",
//       "description": "Ensuring availability of fodder for livestock.",
//       "eligibility": "Dairy and livestock farmers in Tamil Nadu.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Per Drop More Crop",
//       "description": "Water conservation-based farming incentives.",
//       "eligibility": "Farmers practicing water-efficient agriculture.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Tamil Nadu Fisheries Development Scheme",
//       "description": "Support for fishermen and aquaculture development.",
//       "eligibility": "Registered fishermen and aquaculture farmers.",
//       "status": "Ongoing",
//       "link": "https://www.tnagrisnet.tn.gov.in"
//     }
//   ],

//   "Telangana": [
//     {
//       "id": 1,
//       "name": "Rythu Bandhu Scheme",
//       "description": "Investment support for farmers to purchase inputs before the sowing season.",
//       "eligibility": "All land-owning farmers in Telangana.",
//       "status": "Ongoing",
//       "link": "https://rythubandhu.telangana.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Rythu Bima (Farmers Group Life Insurance Scheme)",
//       "description": "Life insurance coverage for farmers in case of accidental death.",
//       "eligibility": "Land-owning farmers between 18-59 years.",
//       "status": "Ongoing",
//       "link": "https://rythubandhu.telangana.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Telangana Farm Mechanization Scheme",
//       "description": "Subsidies for farm machinery and equipment.",
//       "eligibility": "Farmers in Telangana adopting mechanized farming techniques.",
//       "status": "Ongoing",
//       "link": "https://www.agriculture.telangana.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Micro Irrigation Project (MIP)",
//       "description": "Drip and sprinkler irrigation system subsidies.",
//       "eligibility": "Farmers looking to implement water-efficient irrigation.",
//       "status": "Ongoing",
//       "link": "https://www.agriculture.telangana.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Telangana Crop Diversification Scheme",
//       "description": "Encouraging farmers to diversify their crops for better yields.",
//       "eligibility": "Farmers willing to shift to alternative cropping patterns.",
//       "status": "Ongoing",
//       "link": "https://www.agriculture.telangana.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Telangana Dairy Development Scheme",
//       "description": "Support for dairy farmers to enhance milk production.",
//       "eligibility": "Dairy farmers in Telangana.",
//       "status": "Ongoing",
//       "link": "https://www.agriculture.telangana.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Farmers Interest-Free Loan Scheme",
//       "description": "Interest-free crop loans to small and marginal farmers.",
//       "eligibility": "Farmers availing short-term crop loans up to ₹1 lakh.",
//       "status": "Ongoing",
//       "link": "https://www.agriculture.telangana.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Mission Kakatiya",
//       "description": "Restoration and rejuvenation of water tanks for irrigation.",
//       "eligibility": "Farmers using minor irrigation sources in Telangana.",
//       "status": "Ongoing",
//       "link": "https://www.missionkakatiya.telangana.gov.in"
//     }
//   ],

//   "Tripura": [
//     {
//       "id": 1,
//       "name": "Tripura Organic Farming Mission",
//       "description": "Promotion of organic farming through subsidies and training.",
//       "eligibility": "Farmers willing to adopt organic farming practices.",
//       "status": "Ongoing",
//       "link": "https://agri.tripura.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Mukhyamantri Fasal Bima Yojana",
//       "description": "Crop insurance scheme for farmers in Tripura.",
//       "eligibility": "Farmers growing notified crops in the state.",
//       "status": "Ongoing",
//       "link": "https://agri.tripura.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Tripura Rubber Mission",
//       "description": "Support for rubber plantation development in Tripura.",
//       "eligibility": "Farmers engaged in rubber cultivation.",
//       "status": "Ongoing",
//       "link": "https://agri.tripura.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Horticulture Development Scheme",
//       "description": "Financial aid and technical support for horticulture farmers.",
//       "eligibility": "Farmers involved in fruit and vegetable cultivation.",
//       "status": "Ongoing",
//       "link": "https://hortitripura.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Tripura Tea Development Scheme",
//       "description": "Support for small tea growers to improve productivity.",
//       "eligibility": "Tea growers in Tripura.",
//       "status": "Ongoing",
//       "link": "https://tripurateaboard.in"
//     },
//     {
//       "id": 6,
//       "name": "Tripura Dairy Development Program",
//       "description": "Assistance to dairy farmers to enhance milk production.",
//       "eligibility": "Dairy farmers and cooperatives in Tripura.",
//       "status": "Ongoing",
//       "link": "https://agri.tripura.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Integrated Watershed Management Program",
//       "description": "Water conservation and soil management support for farmers.",
//       "eligibility": "Farmers in drought-prone areas.",
//       "status": "Ongoing",
//       "link": "https://agri.tripura.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Tripura Bamboo Mission",
//       "description": "Support for bamboo cultivation and value-added industries.",
//       "eligibility": "Farmers and entrepreneurs engaged in bamboo production.",
//       "status": "Ongoing",
//       "link": "https://tripurabamboo.com"
//     }
//   ],

//   "Uttar Pradesh": [
//     {
//       "id": 1,
//       "name": "Kisan Rin Mochan Yojana",
//       "description": "Loan waiver scheme for small and marginal farmers.",
//       "eligibility": "Small and marginal farmers with outstanding crop loans.",
//       "status": "Ongoing",
//       "link": "http://upkisankarjrahat.upsdc.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Uttar Pradesh Fasal Bima Yojana",
//       "description": "Crop insurance scheme to protect farmers against yield losses.",
//       "eligibility": "Farmers growing notified crops in the state.",
//       "status": "Ongoing",
//       "link": "http://upagripardarshi.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "UP Krishi Yantra Subsidy Yojana",
//       "description": "Subsidy for purchasing agricultural machinery and equipment.",
//       "eligibility": "Farmers in Uttar Pradesh adopting modern agricultural practices.",
//       "status": "Ongoing",
//       "link": "http://upagripardarshi.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Uttar Pradesh Horticulture Mission",
//       "description": "Promotion of horticulture farming through financial assistance.",
//       "eligibility": "Farmers engaged in horticulture farming.",
//       "status": "Ongoing",
//       "link": "http://uphorticulture.in"
//     },
//     {
//       "id": 5,
//       "name": "Uttar Pradesh Organic Farming Promotion Scheme",
//       "description": "Support for farmers adopting organic farming practices.",
//       "eligibility": "Farmers interested in organic farming.",
//       "status": "Ongoing",
//       "link": "http://upagripardarshi.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Uttar Pradesh Micro Irrigation Scheme",
//       "description": "Subsidies for drip and sprinkler irrigation systems.",
//       "eligibility": "Farmers adopting water-efficient irrigation methods.",
//       "status": "Ongoing",
//       "link": "http://upagripardarshi.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Uttar Pradesh Dairy Development Scheme",
//       "description": "Financial and technical assistance for dairy farmers.",
//       "eligibility": "Dairy farmers and cooperatives in Uttar Pradesh.",
//       "status": "Ongoing",
//       "link": "http://animalhusb.up.nic.in"
//     },
//     {
//       "id": 8,
//       "name": "Uttar Pradesh Poultry Development Scheme",
//       "description": "Support for poultry farmers to enhance production.",
//       "eligibility": "Poultry farmers and entrepreneurs.",
//       "status": "Ongoing",
//       "link": "http://animalhusb.up.nic.in"
//     }
//   ],

//   "Uttarakhand": [
//     {
//       "id": 1,
//       "name": "Mukhyamantri Kisan Pension Yojana",
//       "description": "Pension scheme for elderly farmers in Uttarakhand.",
//       "eligibility": "Farmers above 60 years of age.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 2,
//       "name": "Uttarakhand Organic Farming Promotion Scheme",
//       "description": "Support for farmers adopting organic farming methods.",
//       "eligibility": "Farmers engaged in organic cultivation.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 3,
//       "name": "Uttarakhand Fasal Bima Yojana",
//       "description": "Crop insurance scheme to protect farmers against crop losses.",
//       "eligibility": "Farmers cultivating notified crops.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 4,
//       "name": "Horticulture Mission for Uttarakhand",
//       "description": "Promotion and support for horticulture development.",
//       "eligibility": "Horticulture farmers in Uttarakhand.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Uttarakhand Dairy Development Scheme",
//       "description": "Financial and technical assistance for dairy farmers.",
//       "eligibility": "Dairy farmers and cooperatives.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 6,
//       "name": "Uttarakhand Sericulture Promotion Scheme",
//       "description": "Support for silk farming and sericulture development.",
//       "eligibility": "Farmers engaged in sericulture.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "Integrated Watershed Management Program",
//       "description": "Water conservation and soil management support.",
//       "eligibility": "Farmers in drought-prone areas.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "Uttarakhand Apiculture Development Scheme",
//       "description": "Support for beekeeping and honey production.",
//       "eligibility": "Beekeepers and honey producers.",
//       "status": "Ongoing",
//       "link": "https://uk.gov.in"
//     }
//   ],
//   "West Bengal": [
//     {
//       "id": 1,
//       // "name": "Krishak Bandhu Scheme",
//       // "description": "Financial assistance and insurance for farmers.",
//       // "eligibility": "Farmers in West Bengal.",
//       // "status": "Ongoing",
//       // "link": "https://krishakbandhu.net"

      
//     },
//     {
//       "id": 2,
//       "name": "Bangla Shasya Bima Yojana",
//       "description": "State-specific crop insurance scheme.",
//       "eligibility": "Farmers growing notified crops.",
//       "status": "Ongoing",
//       "link": "https://banglashasyabima.net"
//     },
//     {
//       "id": 3,
//       "name": "West Bengal Agricultural Mechanization Scheme",
//       "description": "Subsidy for farm machinery and equipment.",
//       "eligibility": "Farmers purchasing agricultural machinery.",
//       "status": "Ongoing",
//       "link": "https://matirkatha.net"
//     },
//     {
//       "id": 4,
//       "name": "West Bengal Horticulture Development Program",
//       "description": "Support for horticulture farmers in the state.",
//       "eligibility": "Farmers engaged in horticulture farming.",
//       "status": "Ongoing",
//       "link": "https://wb.gov.in"
//     },
//     {
//       "id": 5,
//       "name": "Paschim Banga Krishi Suchna Prakalpa",
//       "description": "Digital platform for agricultural information and advisory.",
//       "eligibility": "All farmers in West Bengal.",
//       "status": "Ongoing",
//       "link": "https://matirkatha.net"
//     },
//     {
//       "id": 6,
//       "name": "West Bengal Dairy Development Scheme",
//       "description": "Financial support for dairy farmers.",
//       "eligibility": "Dairy farmers and cooperatives.",
//       "status": "Ongoing",
//       "link": "https://wb.gov.in"
//     },
//     {
//       "id": 7,
//       "name": "West Bengal Sericulture Promotion Scheme",
//       "description": "Support for silk farming and sericulture activities.",
//       "eligibility": "Farmers engaged in sericulture.",
//       "status": "Ongoing",
//       "link": "https://wb.gov.in"
//     },
//     {
//       "id": 8,
//       "name": "West Bengal Fisheries Development Scheme",
//       "description": "Financial aid for fish farmers and aquaculture businesses.",
//       "eligibility": "Fish farmers and fisheries-related businesses.",
//       "status": "Ongoing",
//       "link": "https://wb.gov.in"
//     }
//   ],
//   };

//   const schemes = stateSchemesData[formattedState] || [];

//   return (
//     <div className="max-w-5xl mx-auto mt-16 p-6">
//       <h1 className="text-4xl font-bold text-center text-pink-600">
//         🌾 State Government Schemes
//       </h1>
//       <p className="mt-4 text-lg text-center text-gray-600">
//         Select a state to view available government schemes.
//       </p>
      
//       <div className="flex justify-center mt-6">
//         <select
//           className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white shadow-md"
//           value={formattedState || ""}
//           onChange={(e) => {
//             const selectedState = e.target.value.replace(/ /g, "-").toLowerCase();
//             navigate(`/schemes/${selectedState}`);
//           }}
//         >
//           <option value="" disabled>Select a State</option>
//           {states.map((state) => (
//             <option key={state} value={state}>{state}</option>
//           ))}
//         </select>
//       </div>
      
//       {formattedState && (
//         <>
//           <h2 className="text-2xl font-bold text-center mt-6 text-orange-600">
//             {formattedState} Schemes
//           </h2>
//           {schemes.length > 0 ? (
//             <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//               {schemes.map((scheme) => (
//                 <div key={scheme.id} className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
//                   <h3 className="text-xl font-semibold text-blue-600 dark:text-green-400">
//                     {scheme.name}
//                   </h3>
//                   <p className="mt-2 text-gray-700 dark:text-gray-300">{scheme.description}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Eligibility:</strong> {scheme.eligibility}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     <strong>Status:</strong> <span className={scheme.status === "Open" ? "text-green-600" : "text-red-600"}>{scheme.status}</span>
//                   </p>
//                   <div className="mt-4 flex justify-between">
//                     <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//                       Read More
//                     </a>
//                     {scheme.status === "Open" && (
//                       <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
//                         Apply Now
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="mt-6 text-center text-red-500">No schemes found for {formattedState}.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default StateSchemes;



// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const StateSchemes = () => {
//   const { state } = useParams();
//   const navigate = useNavigate();

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const formatStateName = (name) =>
//     name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

//   const formattedState = state ? formatStateName(state.replace("-", " ")) : "";

//   const stateSchemesData = {
//     "Bihar": [
//       {
//         "id": 1,
//         "name": "Mukhyamantri Krishi Input Anudan Yojana",
//         "description": "Financial aid for purchasing agricultural inputs.",
//         "eligibility": "Farmers with registered landholdings.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://dbtagriculture.bihar.gov.in/InputAnudan/"
//       },
//       {
//         "id": 2,
//         "name": "Bihar Fasal Sahayata Yojana",
//         "description": "Crop insurance scheme for farmers.",
//         "eligibility": "Registered farmers in Bihar.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://dbtagriculture.bihar.gov.in/FasalSahayata/"
//       },
//       {
//         "id": 3,
//         "name": "Pradhan Mantri Kisan Samman Nidhi Yojana (State Contribution)",
//         "description": "Financial assistance to farmers (with state contribution).",
//         "eligibility": "Small and marginal farmers.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Ongoing",
//         "link": "https://dbtagriculture.bihar.gov.in/PMKisan/"
//       }
//     ],
//     "Maharashtra": [
//       {
//         id: 2,
//         name: "Mahatma Jyotirao Phule Jan Arogya Yojana",
//         description: "Health insurance for economically weaker sections.",
//         eligibility: "BPL families and weaker sections.",
//         applicationStart: "March 1, 2024",
//         applicationEnd: "September 30, 2024",
//         status: "Open",
//         link: "https://www.rojgar.maharashtra.gov.in"
//       }
//     ]
//   };

//   const schemes = stateSchemesData[formattedState] || [];

//   return (
//     <div className="max-w-5xl mx-auto mt-16 p-6">
//       <h1 className="text-4xl font-bold text-center text-pink-600">
//         🏩 State Government Schemes
//       </h1>
//       <p className="mt-4 text-lg text-center text-gray-600">
//         Select a state to view available government schemes.
//       </p>
      
//       <div className="flex justify-center mt-6">
//         <select
//           className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white shadow-md"
//           value={formattedState || ""}
//           onChange={(e) => {
//             const selectedState = e.target.value.replace(/ /g, "-").toLowerCase();
//             navigate(`/schemes/${selectedState}`);
//           }}
//         >
//           <option value="" disabled>Select a State</option>
//           {states.map((state) => (
//             <option key={state} value={state}>{state}</option>
//           ))}
//         </select>
//       </div>
      
//       {formattedState && (
//         <>
//           <h2 className="text-2xl font-bold text-center mt-6 text-orange-600">
//             {formattedState} Schemes
//           </h2>
//           {schemes.length > 0 ? (
//             <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//               {schemes.map((scheme) => (
//                 <div key={scheme.id} className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
//                   <h3 className="text-xl font-semibold text-orange-500">
//                     {scheme.name}
//                   </h3>
//                   <p className="mt-2 text-gray-700 dark:text-gray-300">{scheme.description}</p>
//                   <p className="mt-2 text-sm text-pink-500"><strong>Eligibility:</strong> {scheme.eligibility}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     <strong>Application Period:</strong> {scheme.applicationStart} - {scheme.applicationEnd}
//                   </p>
//                   <p className="mt-2 text-sm">
//                     <strong>Status:</strong> <span className={
//                       scheme.status === "Open" ? "text-green-600" :
//                       scheme.status === "Closed" ? "text-red-600" : "text-yellow-600"
//                     }>{scheme.status}</span>
//                   </p>
//                   <div className="mt-4 flex justify-between">
//                     <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//                       Read More
//                     </a>
//                     {scheme.status === "Open" && (
//                       <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
//                         Apply Now
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="mt-6 text-center text-red-500">No schemes found for {formattedState}.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default StateSchemes;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const StateSchemes = () => {
//   const { state } = useParams();
//   const navigate = useNavigate();
//   const [visibleSchemes, setVisibleSchemes] = useState(4);

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//     "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   const formatStateName = (name) =>
//     name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

//   const formattedState = state ? formatStateName(state.replace("-", " ")) : "";

//   const stateSchemesData = {
//     "Bihar": [
//       {
//         "id": 1,
//         "name": "Mukhyamantri Krishi Input Anudan Yojana",
//         "description": "Financial aid for purchasing agricultural inputs.",
//         "eligibility": "Farmers with registered landholdings.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://dbtagriculture.bihar.gov.in/InputAnudan/"
//       },
//       {
//         "id": 2,
//         "name": "Bihar Rajya Fasal Sahayata Yojana",
//         "description": "Financial assistance for crop loss due to natural calamities.",
//         "eligibility": "Farmers in Bihar affected by disasters.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://www.myscheme.gov.in/schemes/brfsy"
//       },
//       {
//         "id": 3,
//         "name": "Bihar Agriculture Machinery Subsidy Scheme",
//         "description": "Subsidies up to 80% on farm equipment for mechanization.",
//         "eligibility": "All farmers in Bihar.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://state.bihar.gov.in/krishi"
//       },
//       {
//         "id": 4,
//         "name": "Agricultural Equipment Bank Scheme",
//         "description": "Up to ₹10 lakh subsidy for setting up equipment banks.",
//         "eligibility": "Livelihood groups and progressive farmers.",
//         "applicationStart": "March 1, 2024",
//         "applicationEnd": "September 30, 2024",
//         "status": "Open",
//         "link": "https://timesofindia.indiatimes.com/city/patna/bihar-chief-minister-nitish-kumar-unveils-agro-bihar-2024-reinforces-commitment-to-farmer-welfare/articleshow/115849662.cms"
//       },
//       {
//         "id": 5,
//         "name": "Pradhan Mantri Kisan Samman Nidhi Yojana",
//         "description": "₹6,000 annual financial aid to small and marginal farmers.",
//         "eligibility": "Farmers with up to 2 hectares of land.",
//         "applicationStart": "Ongoing",
//         "applicationEnd": "Ongoing",
//         "status": "Ongoing",
//         "link": "http://pmkisan.gov.in"
//       },
//       {
//         "id": 6,
//         "name": "Bihar Krishi Road Map",
//         "description": "State plan to improve agricultural productivity and income.",
//         "eligibility": "All farmers in Bihar.",
//         "applicationStart": "Ongoing",
//         "applicationEnd": "Ongoing",
//         "status": "Ongoing",
//         "link": "https://state.bihar.gov.in/krishi"
//       },
//       {
//         "id": 7,
//         "name": "Bihar Organic Farming Promotion Scheme",
//         "description": "Incentives for farmers shifting to organic farming.",
//         "eligibility": "Farmers adopting organic practices.",
//         "applicationStart": "April 1, 2023",
//         "applicationEnd": "December 31, 2023",
//         "status": "Closed",
//         "link": "https://state.bihar.gov.in/krishi"
//       },
//       {
//         "id": 8,
//         "name": "National Agriculture Market (e-NAM) Scheme",
//         "description": "A digital marketplace for better crop prices.",
//         "eligibility": "Registered farmers and traders.",
//         "applicationStart": "January 1, 2023",
//         "applicationEnd": "October 31, 2023",
//         "status": "Closed",
//         "link": "https://enam.gov.in/web/"
//       }
      
//     ],

//     "Andhra Pradesh": [
//   {
//     "id": 1,
//     "name": "YSR Rythu Bharosa",
//     "description": "Financial assistance to farmers to support their agricultural activities.",
//     "eligibility": "Small and marginal farmers in Andhra Pradesh.",
//     "applicationStart": "Ongoing",
//     "applicationEnd": "Ongoing",
//     "status": "Ongoing",
//     "link": "https://ysrrythubharosa.ap.gov.in/"
//   },
//   {
//     "id": 2,
//     "name": "AP Input Subsidy Scheme",
//     "description": "Financial support to farmers who suffered crop loss due to natural calamities.",
//     "eligibility": "Farmers affected by floods, droughts, or other calamities.",
//     "applicationStart": "March 1, 2024",
//     "applicationEnd": "September 30, 2024",
//     "status": "Open",
//     "link": "https://www.ap.gov.in/"
//   },
//   {
//     "id": 3,
//     "name": "YSR Free Crop Insurance Scheme",
//     "description": "Free crop insurance for farmers to protect against crop losses.",
//     "eligibility": "All eligible farmers in Andhra Pradesh.",
//     "applicationStart": "March 1, 2024",
//     "applicationEnd": "September 30, 2024",
//     "status": "Open",
//     "link": "https://apagrisnet.gov.in/"
//   }
// ]
// ,


// "Arunachal Pradesh": [
//   {
//     "id": 1,
//     "name": "Chief Minister’s Krishi Rinn Yojana",
//     "description": "Provides interest-free loans to farmers to improve agricultural productivity.",
//     "eligibility": "Farmers registered in Arunachal Pradesh.",
//     "applicationStart": "Ongoing",
//     "applicationEnd": "Ongoing",
//     "status": "Ongoing",
//     "link": "https://arunachalpradesh.gov.in/"
//   },
//   {
//     "id": 2,
//     "name": "Mission Organic Value Chain Development",
//     "description": "Promotes organic farming and provides incentives to farmers.",
//     "eligibility": "Farmers practicing organic farming in Arunachal Pradesh.",
//     "applicationStart": "March 1, 2024",
//     "applicationEnd": "September 30, 2024",
//     "status": "Open",
//     "link": "https://www.nabard.org/"
//   },
//   {
//     "id": 3,
//     "name": "National Food Security Mission (State Contribution)",
//     "description": "Aims to increase food grain production through area expansion and productivity enhancement.",
//     "eligibility": "All farmers in Arunachal Pradesh.",
//     "applicationStart": "March 1, 2024",
//     "applicationEnd": "September 30, 2024",
//     "status": "Open",
//     "link": "https://nfsm.gov.in/"
//   }
// ]
// ,

// "Assam": [
//   {
//     "id": 1,
//     "name": "Assam Farmers' Credit Subsidy Scheme",
//     "description": "Subsidy on crop loans to reduce financial burden.",
//     "eligibility": "All farmers with crop loans.",
//     "applicationStart": "April 1, 2024",
//     "applicationEnd": "October 31, 2024",
//     "status": "Open",
//     "link": "https://assam.gov.in/farmers-credit-subsidy/"
//   },
//   {
//     "id": 2,
//     "name": "Assam Agribusiness and Rural Transformation Project",
//     "description": "Support for agribusiness development and rural transformation.",
//     "eligibility": "Farmers and agribusiness entrepreneurs.",
//     "applicationStart": "Ongoing",
//     "applicationEnd": "Ongoing",
//     "status": "Ongoing",
//     "link": "https://assam.gov.in/agri-rural-transformation/"
//   },
//   {
//     "id": 3,
//     "name": "Chief Minister's Samagra Gramya Unnayan Yojana",
//     "description": "Comprehensive village development including agriculture.",
//     "eligibility": "Villages selected under the scheme.",
//     "applicationStart": "February 1, 2024",
//     "applicationEnd": "August 31, 2024",
//     "status": "Closed",
//     "link": "https://assam.gov.in/samagra-gramya-unnayan/"
//   }
// ],
// "Chhattisgarh": [
//   {
//     "id": 1,
//     "name": "Rajiv Gandhi Kisan Nyay Yojana",
//     "description": "Financial assistance to farmers for crop production.",
//     "eligibility": "Farmers growing paddy, maize, and sugarcane.",
//     "applicationStart": "May 1, 2024",
//     "applicationEnd": "November 30, 2024",
//     "status": "Open",
//     "link": "https://rgkny.cg.nic.in/"
//   },
//   {
//     "id": 2,
//     "name": "Godhan Nyay Yojana",
//     "description": "Procurement of cow dung from farmers to promote organic farming.",
//     "eligibility": "Cattle owners and farmers.",
//     "applicationStart": "Ongoing",
//     "applicationEnd": "Ongoing",
//     "status": "Ongoing",
//     "link": "https://godhannyay.cgstate.gov.in/"
//   },
//   {
//     "id": 3,
//     "name": "Krishi Infrastructure Fund",
//     "description": "Financial support for building agricultural infrastructure.",
//     "eligibility": "Farmers, FPOs, and agribusinesses.",
//     "applicationStart": "January 1, 2024",
//     "applicationEnd": "June 30, 2024",
//     "status": "Closed",
//     "link": "https://agrifund.cg.nic.in/"
//   }
// ],

//     "Maharashtra": [
//       {
//         id: 2,
//         name: "Mahatma Jyotirao Phule Jan Arogya Yojana",
//         description: "Health insurance for economically weaker sections.",
//         eligibility: "BPL families and weaker sections.",
//         applicationStart: "March 1, 2024",
//         applicationEnd: "September 30, 2024",
//         status: "Open",
//         link: "https://www.rojgar.maharashtra.gov.in"
//       }
//     ]
//   };

//   const schemes = stateSchemesData[formattedState] || [];

//   return (
//     <div className="max-w-5xl mx-auto mt-16 p-6">
//       <h1 className="text-4xl font-bold text-center text-pink-600">
//         🏩 State Government Schemes
//       </h1>
//       <p className="mt-4 text-lg text-center text-gray-600">
//         Select a state to view available government schemes.
//       </p>
      
//       <div className="flex justify-center mt-6">
//         <select
//           className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white shadow-md"
//           value={formattedState || ""}
//           onChange={(e) => {
//             const selectedState = e.target.value.replace(/ /g, "-").toLowerCase();
//             navigate(`/schemes/${selectedState}`);
//           }}
//         >
//           <option value="" disabled>Select a State</option>
//           {states.map((state) => (
//             <option key={state} value={state}>{state}</option>
//           ))}
//         </select>
//       </div>
      
//       {formattedState && (
//         <>
//           <h2 className="text-2xl font-bold text-center mt-6 text-orange-600">
//             {formattedState} Schemes
//           </h2>
//           {schemes.length > 0 ? (
//             <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//               {schemes.slice(0, visibleSchemes).map((scheme) => (
//                 <div key={scheme.id} className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
//                   <h3 className="text-xl font-semibold text-orange-500">
//                     {scheme.name}
//                   </h3>
//                   <p className="mt-2 text-gray-700 dark:text-gray-300">{scheme.description}</p>
//                   <p className="mt-2 text-sm text-pink-500"><strong>Eligibility:</strong> {scheme.eligibility}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     <strong>Application Period:</strong> {scheme.applicationStart} - {scheme.applicationEnd}
//                   </p>
//                   <p className="mt-2 text-sm">
//                     <strong>Status:</strong> <span className={
//                       scheme.status === "Open" ? "text-green-600" :
//                       scheme.status === "Closed" ? "text-red-600" : "text-yellow-600"
//                     }>{scheme.status}</span>
//                   </p>
//                   <div className="mt-4 flex justify-between">
//                     <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Read More</a>
//                     <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Apply</a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="mt-6 text-center text-red-500">No schemes found for {formattedState}.</p>
//           )}
//           {visibleSchemes < schemes.length && (
//             <div className="flex justify-center mt-6">
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 onClick={() => setVisibleSchemes(visibleSchemes + 4)}
//               >
//                 Show More Schemes
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default StateSchemes;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StateSchemes = () => {
  const { state } = useParams();
  const navigate = useNavigate();
  const [visibleSchemes, setVisibleSchemes] = useState(4);
  const [displayedSchemes, setDisplayedSchemes] = useState([]);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const formatStateName = (name) =>
    name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  const formattedState = state ? formatStateName(state.replace("-", " ")) : "";

  const stateSchemesData = {
    "Bihar": [
      {
        "id": 1,
        "name": "Mukhyamantri Krishi Input Anudan Yojana",
        "description": "Financial aid for purchasing agricultural inputs.",
        "eligibility": "Farmers with registered landholdings.",
        "applicationStart": "March 1, 2024",
        "applicationEnd": "September 30, 2024",
        "status": "Open",
        "link": "https://dbtagriculture.bihar.gov.in/InputAnudan/"
      },
      {
        "id": 2,
        "name": "Bihar Rajya Fasal Sahayata Yojana",
        "description": "Financial assistance for crop loss due to natural calamities.",
        "eligibility": "Farmers in Bihar affected by disasters.",
        "applicationStart": "March 1, 2024",
        "applicationEnd": "September 30, 2024",
        "status": "Open",
        "link": "https://www.myscheme.gov.in/schemes/brfsy"
      },
      {
        "id": 3,
        "name": "Bihar Agriculture Machinery Subsidy Scheme",
        "description": "Subsidies up to 80% on farm equipment for mechanization.",
        "eligibility": "All farmers in Bihar.",
        "applicationStart": "March 1, 2024",
        "applicationEnd": "September 30, 2024",
        "status": "Open",
        "link": "https://state.bihar.gov.in/krishi"
      },
      {
        "id": 4,
        "name": "Agricultural Equipment Bank Scheme",
        "description": "Up to ₹10 lakh subsidy for setting up equipment banks.",
        "eligibility": "Livelihood groups and progressive farmers.",
        "applicationStart": "March 1, 2024",
        "applicationEnd": "September 30, 2024",
        "status": "Open",
        "link": "https://timesofindia.indiatimes.com/city/patna/bihar-chief-minister-nitish-kumar-unveils-agro-bihar-2024-reinforces-commitment-to-farmer-welfare/articleshow/115849662.cms"
      },
      {
        "id": 5,
        "name": "Pradhan Mantri Kisan Samman Nidhi Yojana",
        "description": "₹6,000 annual financial aid to small and marginal farmers.",
        "eligibility": "Farmers with up to 2 hectares of land.",
        "applicationStart": "Ongoing",
        "applicationEnd": "Ongoing",
        "status": "Ongoing",
        "link": "http://pmkisan.gov.in"
      },
      {
        "id": 6,
        "name": "Bihar Krishi Road Map",
        "description": "State plan to improve agricultural productivity and income.",
        "eligibility": "All farmers in Bihar.",
        "applicationStart": "Ongoing",
        "applicationEnd": "Ongoing",
        "status": "Ongoing",
        "link": "https://state.bihar.gov.in/krishi"
      },
      {
        "id": 7,
        "name": "Bihar Organic Farming Promotion Scheme",
        "description": "Incentives for farmers shifting to organic farming.",
        "eligibility": "Farmers adopting organic practices.",
        "applicationStart": "April 1, 2023",
        "applicationEnd": "December 31, 2023",
        "status": "Closed",
        "link": "https://state.bihar.gov.in/krishi"
      },
      {
        "id": 8,
        "name": "National Agriculture Market (e-NAM) Scheme",
        "description": "A digital marketplace for better crop prices.",
        "eligibility": "Registered farmers and traders.",
        "applicationStart": "January 1, 2023",
        "applicationEnd": "October 31, 2023",
        "status": "Closed",
        "link": "https://enam.gov.in/web/"
      }
    ],

    "Andhra Pradesh": [
    {
      "id": 1,
      "name": "Rythu Bharosa",
      "description": "Financial assistance to farmers for investment during crop season.",
      "eligibility": "All land-owning farmer families and tenant farmers.",
      "applicationStart": "June 1, 2024",
      "applicationEnd": "December 31, 2024",
      "status": "Open",
      "link": "https://ysrrythubharosa.ap.gov.in/"
    },
    {
      "id": 2,
      "name": "YSR Crop Insurance Scheme",
      "description": "Provides free crop insurance to farmers covering notified crops.",
      "eligibility": "Farmers cultivating notified crops in notified areas.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://apagrisnet.gov.in/cropinsurance/"
    },
    {
      "id": 3,
      "name": "YSR Zero Interest Loan Scheme",
      "description": "Interest-free loans for farmers to reduce financial burden.",
      "eligibility": "All farmers with valid loan accounts.",
      "applicationStart": "January 1, 2024",
      "applicationEnd": "June 30, 2024",
      "status": "Closed",
      "link": "https://apagrisnet.gov.in/zero-interest-loan/"
    }
  ],
  "Arunachal Pradesh": [
    {
      "id": 1,
      "name": "Chief Minister's Sashakt Kisan Yojana",
      "description": "Support for farmers to enhance productivity and income.",
      "eligibility": "All farmers in Arunachal Pradesh.",
      "applicationStart": "March 1, 2024",
      "applicationEnd": "September 30, 2024",
      "status": "Open",
      "link": "https://arunachalpradesh.gov.in/sashakt-kisan-yojana/"
    },
    {
      "id": 2,
      "name": "State Credit Support Scheme",
      "description": "Credit support to farmers for agricultural activities.",
      "eligibility": "Farmers with valid land records.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://arunachalpradesh.gov.in/credit-support-scheme/"
    },
    {
      "id": 3,
      "name": "Agri-Mechanization Scheme",
      "description": "Subsidies for purchasing agricultural machinery.",
      "eligibility": "Registered farmers in the state.",
      "applicationStart": "January 1, 2024",
      "applicationEnd": "June 30, 2024",
      "status": "Closed",
      "link": "https://arunachalpradesh.gov.in/agri-mechanization/"
    }
  ],
  "Assam": [
    {
      "id": 1,
      "name": "Assam Farmers' Credit Subsidy Scheme",
      "description": "Subsidy on crop loans to reduce financial burden.",
      "eligibility": "All farmers with crop loans.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "October 31, 2024",
      "status": "Open",
      "link": "https://assam.gov.in/farmers-credit-subsidy/"
    },
    {
      "id": 2,
      "name": "Assam Agribusiness and Rural Transformation Project",
      "description": "Support for agribusiness development and rural transformation.",
      "eligibility": "Farmers and agribusiness entrepreneurs.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://assam.gov.in/agri-rural-transformation/"
    },
    {
      "id": 3,
      "name": "Chief Minister's Samagra Gramya Unnayan Yojana",
      "description": "Comprehensive village development including agriculture.",
      "eligibility": "Villages selected under the scheme.",
      "applicationStart": "February 1, 2024",
      "applicationEnd": "August 31, 2024",
      "status": "Closed",
      "link": "https://assam.gov.in/samagra-gramya-unnayan/"
    }
  ],
  "Chhattisgarh": [
    {
      "id": 1,
      "name": "Rajiv Gandhi Kisan Nyay Yojana",
      "description": "Financial assistance to farmers for crop production.",
      "eligibility": "Farmers growing paddy, maize, and sugarcane.",
      "applicationStart": "May 1, 2024",
      "applicationEnd": "November 30, 2024",
      "status": "Open",
      "link": "https://rgkny.cg.nic.in/"
    },
    {
      "id": 2,
      "name": "Godhan Nyay Yojana",
      "description": "Procurement of cow dung from farmers to promote organic farming.",
      "eligibility": "Cattle owners and farmers.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://godhannyay.cgstate.gov.in/"
    },
    {
      "id": 3,
      "name": "Krishi Infrastructure Fund",
      "description": "Financial support for building agricultural infrastructure.",
      "eligibility": "Farmers, FPOs, and agribusinesses.",
      "applicationStart": "January 1, 2024",
      "applicationEnd": "June 30, 2024",
      "status": "Closed",
      "link": "https://agrifund.cg.nic.in/"
    }
  ],


  "Goa": [
    {
      "id": 1,
      "name": "Shetkari Adhar Nidhi",
      "description": "Financial assistance to farmers for agricultural activities.",
      "eligibility": "All farmers in Goa.",
      "applicationStart": "June 1, 2024",
      "applicationEnd": "December 31, 2024",
      "status": "Open",
      "link": "https://www.goa.gov.in/schemes/shetkari-adhar-nidhi/"
    },
    {
      "id": 2,
      "name": "Krishi Card Scheme",
      "description": "Provides easy credit access to farmers for agricultural needs.",
      "eligibility": "Farmers with valid land records in Goa.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://www.goa.gov.in/schemes/krishi-card-scheme/"
    },
    {
      "id": 3,
      "name": "Subsidy for Agricultural Machinery",
      "description": "Financial support for purchasing modern agricultural equipment.",
      "eligibility": "Farmers, farmer groups, and co-operatives in Goa.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "October 31, 2024",
      "status": "Open",
      "link": "https://www.goa.gov.in/schemes/agriculture-machinery-subsidy/"
    },
    {
      "id": 4,
      "name": "Assistance for Organic Farming",
      "description": "Incentives to encourage organic farming in the state.",
      "eligibility": "Farmers switching to organic farming practices.",
      "applicationStart": "March 1, 2024",
      "applicationEnd": "September 30, 2024",
      "status": "Open",
      "link": "https://www.goa.gov.in/schemes/organic-farming-assistance/"
    },
    {
      "id": 5,
      "name": "Soil Health Card Scheme",
      "description": "Provides farmers with soil testing and nutrient recommendations.",
      "eligibility": "All registered farmers in Goa.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://www.goa.gov.in/schemes/soil-health-card/"
    }
],

"Gujarat": [
    {
      "id": 1,
      "name": "Mukhyamantri Pak Sangrah Yojana",
      "description": "Financial assistance for constructing storage structures for agricultural produce.",
      "eligibility": "Farmers in Gujarat with valid land records.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "October 31, 2024",
      "status": "Open",
      "link": "https://ikhedut.gujarat.gov.in/"
    },
    {
      "id": 2,
      "name": "Kisan Parivahan Yojana",
      "description": "Subsidy for purchasing transport vehicles for farmers.",
      "eligibility": "Small and marginal farmers in Gujarat.",
      "applicationStart": "May 1, 2024",
      "applicationEnd": "November 30, 2024",
      "status": "Open",
      "link": "https://ikhedut.gujarat.gov.in/"
    },
    {
      "id": 3,
      "name": "Gujarat Agro Processing Scheme",
      "description": "Financial support for setting up agro-processing units.",
      "eligibility": "Farmers, FPOs, and agripreneurs in Gujarat.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://agri.gujarat.gov.in/"
    },
    {
      "id": 4,
      "name": "Soil Health Card Scheme",
      "description": "Provides farmers with detailed soil health reports and recommendations.",
      "eligibility": "All farmers in Gujarat.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://ikhedut.gujarat.gov.in/"
    },
    {
      "id": 5,
      "name": "Drip Irrigation Subsidy",
      "description": "Subsidy on drip irrigation systems to promote water conservation.",
      "eligibility": "Farmers engaged in horticulture and agriculture.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "December 31, 2024",
      "status": "Open",
      "link": "https://ikhedut.gujarat.gov.in/"
    }
],

"Haryana": [
    {
      "id": 1,
      "name": "Meri Fasal Mera Byora",
      "description": "Farmers can register their crops to receive government benefits and subsidies.",
      "eligibility": "All farmers in Haryana.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://fasal.haryana.gov.in/"
    },
    {
      "id": 2,
      "name": "Bhavantar Bharpai Yojana",
      "description": "Price difference compensation scheme for farmers to protect against market fluctuations.",
      "eligibility": "Farmers growing selected crops in Haryana.",
      "applicationStart": "June 1, 2024",
      "applicationEnd": "October 31, 2024",
      "status": "Open",
      "link": "https://agriharyana.gov.in/"
    },
    {
      "id": 3,
      "name": "Pashudhan Credit Card Scheme",
      "description": "Financial support for dairy farmers to purchase cattle.",
      "eligibility": "Dairy farmers and livestock owners in Haryana.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://pashudhanharyana.gov.in/"
    },
    {
      "id": 4,
      "name": "Krishi Yantra Anudan Yojana",
      "description": "Subsidy for farmers to purchase agricultural machinery.",
      "eligibility": "Small and marginal farmers in Haryana.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "September 30, 2024",
      "status": "Open",
      "link": "https://agriharyana.gov.in/"
    },
    {
      "id": 5,
      "name": "Micro Irrigation Scheme",
      "description": "Financial assistance for installing micro-irrigation systems like drip and sprinkler irrigation.",
      "eligibility": "All farmers in Haryana.",
      "applicationStart": "May 1, 2024",
      "applicationEnd": "November 30, 2024",
      "status": "Open",
      "link": "https://haryana.gov.in/"
    }
],

"Himachal Pradesh": [
    {
      "id": 1,
      "name": "Mukhya Mantri Kisan Evam Khetihar Mazdoor Jeevan Suraksha Yojana",
      "description": "Insurance scheme for farmers and agricultural laborers.",
      "eligibility": "All farmers and farm laborers in Himachal Pradesh.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://hpagriculture.com/"
    },
    {
      "id": 2,
      "name": "Krishi Input Subsidy Scheme",
      "description": "Subsidy on agricultural inputs like seeds, fertilizers, and pesticides.",
      "eligibility": "Small and marginal farmers in Himachal Pradesh.",
      "applicationStart": "May 1, 2024",
      "applicationEnd": "October 31, 2024",
      "status": "Open",
      "link": "https://hpagriculture.com/"
    },
    {
      "id": 3,
      "name": "Himachal Pradesh Horticulture Development Project",
      "description": "Support for horticulture farmers to improve production and quality.",
      "eligibility": "Farmers engaged in horticulture in Himachal Pradesh.",
      "applicationStart": "Ongoing",
      "applicationEnd": "Ongoing",
      "status": "Ongoing",
      "link": "https://hds.hp.gov.in/"
    },
    {
      "id": 4,
      "name": "Dr. Y.S. Parmar Kisan Swarojgar Yojana",
      "description": "Financial assistance to farmers for greenhouse and polyhouse farming.",
      "eligibility": "Farmers practicing polyhouse and greenhouse farming in Himachal Pradesh.",
      "applicationStart": "June 1, 2024",
      "applicationEnd": "December 31, 2024",
      "status": "Open",
      "link": "https://hpagriculture.com/"
    },
    {
      "id": 5,
      "name": "Mukhya Mantri Nutan Polyhouse Yojana",
      "description": "Subsidy for constructing modern polyhouses for protected farming.",
      "eligibility": "Farmers engaged in protected farming in Himachal Pradesh.",
      "applicationStart": "April 1, 2024",
      "applicationEnd": "September 30, 2024",
      "status": "Open",
      "link": "https://hds.hp.gov.in/"
    }
],




  };

  const schemes = stateSchemesData[formattedState] || [];

  useEffect(() => {
    setDisplayedSchemes(schemes.slice(0, visibleSchemes));
  }, [visibleSchemes, formattedState, schemes]);

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600">🏩 State Government Schemes</h1>
      <div className="flex justify-center mt-6">
        <select
          className="p-2 border rounded-lg bg-white shadow-md"
          value={formattedState || ""}
          onChange={(e) => {
            const selectedState = e.target.value.replace(/ /g, "-").toLowerCase();
            navigate(`/schemes/${selectedState}`);
          }}
        >
          <option value="" disabled>Select a State</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {formattedState && (
        <>
          <h2 className="text-2xl font-bold text-center mt-6 text-orange-600">{formattedState} Schemes</h2>
          {displayedSchemes.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {displayedSchemes.map((scheme) => (
                <div key={scheme.id} className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-orange-500">{scheme.name}</h3>
                  <p className="mt-2 text-gray-700">{scheme.description}</p>
                  <p className="mt-2 text-sm text-pink-500"><strong>Eligibility:</strong> {scheme.eligibility}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Application Period:</strong> {scheme.applicationStart} - {scheme.applicationEnd}
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Status:</strong> <span className={
                      scheme.status === "Open" ? "text-green-600" :
                      scheme.status === "Closed" ? "text-red-600" : "text-yellow-600"
                    }>{scheme.status}</span>
                  </p>
                  <div className="mt-4 flex justify-between">
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Read More</a>
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Apply</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-center text-red-500">No schemes found for {formattedState}.</p>
          )}
          <div className="flex justify-center mt-6">
            {visibleSchemes < schemes.length && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mr-2"
                onClick={() => setVisibleSchemes(visibleSchemes + 4)}
              >
                Show More Schemes
              </button>
            )}
            {visibleSchemes > 4 && (
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => setVisibleSchemes(4)}
              >
                Show Less
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default StateSchemes;
