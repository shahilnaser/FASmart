import React, { useState } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { franc } from "franc-all";

const responses = {
  en: {
    "hi": "Hi there! How can I help you today? 😊",
    "hello": "Hello! How can I assist you with agriculture-related queries?",
    "bye": "Goodbye! Have a great day! 😊",
    "latest schemes": "The latest government schemes for farmers include PM-KISAN, PMFBY, and eNAM.",
    "loan for farmers": "Farmers can apply for loans under Kisan Credit Card (KCC) or NABARD schemes.",
    "best fertilizers": "Organic and chemical fertilizers like urea, DAP, and compost can be used based on the crop type.",
    "pesticide for wheat": "For wheat, consider using chlorpyrifos or neem-based bio-pesticides for pest control.",
    "how to prevent crop disease": "Crop rotation, proper irrigation, and timely pesticide use help prevent diseases.",
    "irrigation methods": "Drip irrigation and sprinkler systems are efficient methods for watering crops.",
    "organic farming benefits": "Organic farming improves soil health, reduces chemical usage, and can lead to higher market prices.",
    "government subsidy for seeds": "The government provides subsidies for high-quality seeds under various schemes.",
    "crop insurance": "Pradhan Mantri Fasal Bima Yojana (PMFBY) offers crop insurance to protect farmers against losses.",
    "best time to plant rice": "The best time to plant rice is during the Kharif season, typically from June to July.",
    "how to increase yield": "Using high-yield variety seeds, proper fertilization, and pest management can increase crop yield.",
    "agriculture training programs": "The government offers various training programs for farmers to improve their skills and knowledge.",
    "what is eNAM?": "eNAM (National Agriculture Market) is an online trading platform for agricultural commodities.",
    "benefits of crop rotation": "Crop rotation helps in maintaining soil fertility and reducing pest and disease buildup.",
    "how to get soil tested": "Farmers can get soil tested through local agricultural universities or government agricultural departments.",
    "best crops for small farms": "Vegetables, pulses, and fruits are often recommended for small farms due to their high market demand.",
    "how to manage water resources": "Rainwater harvesting and efficient irrigation techniques help in managing water resources effectively.",
    "importance of bees in agriculture": "Bees are essential for pollination, which increases crop yields and quality.",
    "what is the PMFBY scheme?": "The Pradhan Mantri Fasal Bima Yojana (PMFBY) provides insurance coverage for crops against natural calamities.",
    "how to access government schemes": "Farmers can access government schemes through local agricultural offices or online portals.",
    "benefits of using bio-fertilizers": "Bio-fertilizers improve soil fertility and promote sustainable farming practices.",
    "how to control weeds": "Mulching, hand weeding, and using herbicides are effective methods to control weeds.",
    "importance of crop diversification": "Crop diversification reduces risk and increases resilience against market fluctuations.",
    "what is the Kisan Credit Card?": "The Kisan Credit Card (KCC) scheme provides farmers with easy access to credit for agricultural needs.",
    "how to improve soil fertility": "Adding organic matter, crop rotation, and using cover crops can improve soil fertility.",
    "best practices for harvesting": "Harvesting at the right time, using proper tools, and handling crops carefully are best practices.",
    "how to market agricultural produce": "Farmers can market their produce through local markets, cooperatives, or online platforms.",
    "what is the role of NABARD?": "NABARD (National Bank for Agriculture and Rural Development) provides credit and develops financial institutions in rural areas.",
    "how to reduce post-harvest losses": "Proper storage, timely harvesting, and using appropriate packaging can reduce post-harvest losses.",
    "importance of sustainable agriculture": "Sustainable agriculture ensures food security while preserving the environment for future generations.",
    "how to get government grants": "Farmers can apply for government grants through specific schemes designed for agricultural development.",
    "what is precision farming?": "Precision farming uses technology to monitor and manage field variability in crops for higher efficiency.",
    "how to choose the right crop": "Consider soil type, climate, market demand, and water availability when choosing crops.",
    "benefits of agroforestry": "Agroforestry combines agriculture and forestry, enhancing biodiversity and improving soil health.",
    "how to deal with climate change in agriculture": "Adopting climate-resilient crops and sustainable practices can help mitigate climate change effects.",
    "what is the role of cooperatives in agriculture?": "Cooperatives help farmers collectively market their produce and access resources.",
    "what is the National Food Security Mission?": "The National Food Security Mission aims to increase the production of rice, wheat, and pulses.",
    "how to get subsidy for agricultural machinery?": "Farmers can apply for subsidies on agricultural machinery through government schemes.",
    "what is the Agriculture Infrastructure Fund?": "The Agriculture Infrastructure Fund provides medium-long term debt financing for post-harvest management projects.",
    "how to manage livestock in agriculture?": "Proper feed management, disease control, and breeding practices are essential for livestock management.",
    "what is the role of Krishi Vigyan Kendras (KVKs)?": "KVKs provide agricultural extension services and training to farmers at the district level.",
    "how to apply for PM Kisan Samman Nidhi?": "Farmers can apply for PM Kisan Samman Nidhi through the official portal or local agricultural offices.",
    "what are high-yield variety seeds?": "High-yield variety seeds are developed to produce more crops per unit area.",
    "how to manage soil salinity?": "Using salt-tolerant crops, leaching, and gypsum application can help manage soil salinity.",
    "what is the importance of farm mechanization?": "Farm mechanization improves efficiency, reduces labor costs, and increases productivity.",
    "how to get information on weather forecasts for farming?": "Farmers can access weather forecasts through mobile apps, radio, and television.",
    "what are the benefits of using cover crops?": "Cover crops improve soil health, prevent erosion, and suppress weeds.",
    "what is the role of the Commission for Agricultural Costs & Prices (CACP)?": "CACP recommends minimum support prices (MSP) for agricultural commodities.",
    "how to manage pests in stored grains?": "Proper storage conditions, fumigation, and using pest-resistant varieties can manage pests.",
    "what is the importance of water conservation in agriculture?": "Water conservation ensures sustainable irrigation and reduces water scarcity.",
    "how to get training on organic farming?": "Farmers can get training on organic farming through agricultural universities and NGOs.",
    "what is the role of the National Horticulture Mission?": "The National Horticulture Mission promotes the holistic growth of the horticulture sector.",
    "how to manage soil acidity?": "Liming materials like calcium carbonate can neutralize soil acidity.",
    "what are the benefits of using vermicompost?": "Vermicompost improves soil structure, fertility, and water-holding capacity.",
    "how to get information on market prices for crops?": "Farmers can get market price information through eNAM and agricultural marketing boards.",
    "what is the role of the National Seed Corporation?": "The National Seed Corporation produces and distributes high-quality seeds to farmers.",
    "how to manage farm waste?": "Composting, vermicomposting, and using farm waste for biogas production are methods to manage farm waste.",
    "what are the benefits of using integrated pest management (IPM)?": "IPM reduces pesticide usage and promotes sustainable pest control.",
    "how to get subsidy for micro-irrigation?": "Farmers can apply for subsidies on micro-irrigation systems through government schemes.",
    "what is the role of the Agricultural and Processed Food Products Export Development Authority (APEDA)?": "APEDA promotes the export of agricultural and processed food products.",
    "how to manage soil erosion?": "Contour farming, terracing, and cover cropping can help manage soil erosion.",
    "what are the benefits of using green manure?": "Green manure improves soil fertility and adds organic matter to the soil.",
    "how to get information on crop varieties suitable for my region?": "Farmers can consult local agricultural experts and research institutions.",
    "what is the role of the Central Warehousing Corporation?": "The Central Warehousing Corporation provides storage facilities for agricultural produce.",
    "how to manage farm labor?": "Proper planning, training, and fair wages can help manage farm labor effectively.",
    "what are the benefits of using farm ponds?": "Farm ponds store water for irrigation and improve groundwater recharge.",
    "how to get subsidy for setting up a cold storage?": "Farmers and entrepreneurs can apply for subsidies for cold storage through government schemes.",
    "what is the role of the National Institute of Agricultural Extension Management (MANAGE)?": "MANAGE provides training and capacity building for agricultural extension professionals.",
    "how to manage farm machinery maintenance?": "Regular servicing, proper storage, and timely repairs can ensure farm machinery maintenance.",
    "what are the benefits of using intercropping?": "Intercropping increases productivity, reduces pest and disease incidence, and improves soil health.",
    "how to get information on government schemes for dairy farming?": "Farmers can consult local animal husbandry departments and dairy cooperatives.",
    "what is the role of the Small Farmers Agribusiness Consortium (SFAC)?": "SFAC promotes agribusiness"
  },
  hi: {
"नमस्ते": "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? 😊",
  "नवीनतम योजनाएँ": "किसानों के लिए नवीनतम सरकारी योजनाएँ PM-KISAN, PMFBY और eNAM हैं।",
  "कृषि ऋण": "किसान किसान क्रेडिट कार्ड (KCC) या NABARD योजनाओं के तहत ऋण के लिए आवेदन कर सकते हैं।",
  "सबसे अच्छा उर्वरक": "फसलों के लिए जैविक और रासायनिक उर्वरकों का उपयोग किया जा सकता है।",
  "गेहूं के लिए कीटनाशक": "गेहूं के लिए क्लोरपाइरीफोस या नीम आधारित जैविक कीटनाशकों का उपयोग करें।",
  "फसल रोग से बचाव": "फसल चक्र, उचित सिंचाई और समय पर कीटनाशकों का उपयोग करें।",
  "सिंचाई के तरीके": "ड्रिप सिंचाई और स्प्रिंकलर प्रणाली जल प्रबंधन के कुशल तरीके हैं।",
  "जैविक खेती के लाभ": "जैविक खेती मिट्टी के स्वास्थ्य में सुधार करती है और रसायनों के उपयोग को कम करती है।",
  "बीज पर सरकारी सब्सिडी": "सरकार विभिन्न योजनाओं के तहत उच्च गुणवत्ता वाले बीजों पर सब्सिडी प्रदान करती है।",
  "फसल बीमा": "प्रधानमंत्री फसल बीमा योजना (PMFBY) किसानों को फसल नुकसान से सुरक्षा प्रदान करती है।",
  "धान रोपण का सही समय": "धान की खेती का सही समय खरीफ मौसम में जून से जुलाई तक होता है।",
  "पैदावार कैसे बढ़ाएँ": "उच्च उत्पादकता वाले बीज, उचित उर्वरक और कीट प्रबंधन से पैदावार बढ़ाई जा सकती है।",
  "कृषि प्रशिक्षण कार्यक्रम": "सरकार किसानों के लिए विभिन्न प्रशिक्षण कार्यक्रम चलाती है।",
  "eNAM क्या है?": "eNAM (राष्ट्रीय कृषि बाजार) एक ऑनलाइन कृषि व्यापार प्लेटफॉर्म है।",
  "फसल चक्र के लाभ": "फसल चक्र से मिट्टी की उर्वरता बनी रहती है और कीट तथा रोग कम होते हैं।",
  "मिट्टी परीक्षण कैसे करें?": "किसान कृषि विश्वविद्यालयों या सरकारी कृषि विभागों से मिट्टी परीक्षण करवा सकते हैं।",
  "छोटे खेतों के लिए सर्वोत्तम फसलें": "सब्जियाँ, दालें और फल छोटे खेतों के लिए बेहतर विकल्प हैं।",
  "जल संसाधन प्रबंधन": "वर्षा जल संचयन और कुशल सिंचाई तकनीकों का उपयोग जल संरक्षण के लिए करें।",
  "मधुमक्खियों का कृषि में महत्त्व": "मधुमक्खियाँ परागण में मदद करती हैं, जिससे पैदावार और गुणवत्ता बढ़ती है।",
  "PMFBY योजना क्या है?": "प्रधानमंत्री फसल बीमा योजना (PMFBY) प्राकृतिक आपदाओं से फसल सुरक्षा प्रदान करती है।",
  "सरकारी योजनाएँ कैसे प्राप्त करें?": "किसान स्थानीय कृषि कार्यालयों या ऑनलाइन पोर्टल के माध्यम से योजनाएँ प्राप्त कर सकते हैं।",
  "जैव उर्वरकों के लाभ": "जैव उर्वरक मिट्टी की उर्वरता बढ़ाते हैं और जैविक खेती को बढ़ावा देते हैं।",
  "खरपतवार नियंत्रण के तरीके": "मल्चिंग, हाथ से निराई और शाकनाशी के उपयोग से खरपतवार नियंत्रण किया जा सकता है।",
  "फसल विविधीकरण का महत्त्व": "फसल विविधीकरण से जोखिम कम होता है और बाजार में स्थिरता बनी रहती है।",
  "किसान क्रेडिट कार्ड (KCC) क्या है?": "KCC योजना किसानों को कृषि जरूरतों के लिए ऋण प्रदान करती है।",
  "मिट्टी की उर्वरता कैसे सुधारें?": "जैविक पदार्थ, फसल चक्र और हरी खाद के उपयोग से मिट्टी की उर्वरता सुधारी जा सकती है।",
  "फसल कटाई की सर्वोत्तम विधियाँ": "समय पर कटाई, उचित औजारों का उपयोग और सही तरीके से भंडारण महत्वपूर्ण हैं।",
  "कृषि उत्पाद कैसे बेचें?": "किसान अपने उत्पादों को स्थानीय बाजार, सहकारी समितियों या ऑनलाइन प्लेटफॉर्म पर बेच सकते हैं।",
  "नाबार्ड की भूमिका क्या है?": "नाबार्ड ग्रामीण क्षेत्रों में कृषि और वित्तीय संस्थानों के विकास के लिए ऋण प्रदान करता है।",
  "फसल कटाई के बाद नुकसान कैसे कम करें?": "उचित भंडारण, समय पर कटाई और सही पैकेजिंग से नुकसान कम किया जा सकता है।",
  "सतत कृषि का महत्त्व": "सतत कृषि खाद्य सुरक्षा सुनिश्चित करती है और पर्यावरण संरक्षण में मदद करती है।",
  "सरकारी अनुदान कैसे प्राप्त करें?": "किसान कृषि विकास के लिए बनाई गई सरकारी योजनाओं के तहत अनुदान के लिए आवेदन कर सकते हैं।",
  "सटीक कृषि (Precision Farming) क्या है?": "सटीक कृषि तकनीक का उपयोग कर फसलों की निगरानी और प्रबंधन किया जाता है।",
  "सही फसल कैसे चुनें?": "मिट्टी के प्रकार, जलवायु, बाजार की मांग और जल उपलब्धता को ध्यान में रखते हुए फसल चुनें।",
  "कृषि वानिकी (Agroforestry) के लाभ": "कृषि वानिकी से जैव विविधता बढ़ती है और मिट्टी का स्वास्थ्य सुधरता है।",
  "जलवायु परिवर्तन से निपटने के उपाय": "जलवायु अनुकूल फसलें अपनाकर और सतत कृषि पद्धतियों का पालन कर जलवायु परिवर्तन से निपटा जा सकता है।",
  "कृषि सहकारी समितियों की भूमिका": "सहकारी समितियाँ किसानों को सामूहिक रूप से अपने उत्पादों का विपणन करने और संसाधनों तक पहुँच प्रदान करने में मदद करती हैं।",
  "राष्ट्रीय खाद्य सुरक्षा मिशन क्या है?": "यह मिशन चावल, गेहूं और दलहन के उत्पादन को बढ़ाने के लिए कार्य करता है।"
  },
  bn: {
"হ্যালো": "হ্যালো! আমি কীভাবে আপনাকে সাহায্য করতে পারি? 😊",
  "সর্বশেষ প্রকল্প": "কৃষকদের জন্য সাম্প্রতিক সরকারি প্রকল্পগুলির মধ্যে রয়েছে PM-KISAN, PMFBY এবং eNAM।",
  "কৃষি ঋণ": "কৃষকরা কিষান ক্রেডিট কার্ড (KCC) বা NABARD প্রকল্পের অধীনে ঋণের জন্য আবেদন করতে পারেন।",
  "সেরা সার": "জৈব এবং রাসায়নিক সার যেমন ইউরিয়া, ডিএপি এবং কম্পোস্ট ব্যবহার করা যেতে পারে।",
  "গমের জন্য কীটনাশক": "গমের জন্য ক্লোরপাইরিফোস বা নিম-ভিত্তিক জৈব কীটনাশক ব্যবহার করুন।",
  "ফসল রোগ প্রতিরোধ": "ফসলের আবর্তন, সঠিক সেচ এবং সময়মতো কীটনাশক ব্যবহার করা উচিত।",
  "সেচের পদ্ধতি": "ড্রিপ সেচ ও স্প্রিঙ্কলার সেচ জল সংরক্ষণের জন্য উপযুক্ত পদ্ধতি।",
  "জৈব চাষের উপকারিতা": "জৈব চাষ মাটির স্বাস্থ্য ভালো রাখে এবং রাসায়নিক ব্যবহারের পরিমাণ কমায়।",
  "বীজে সরকারি ভর্তুকি": "সরকার কৃষকদের উন্নতমানের বীজের জন্য ভর্তুকি প্রদান করে।",
  "ফসল বীমা": "প্রধানমন্ত্রী ফসল বীমা যোজনা (PMFBY) কৃষকদের ফসল ক্ষতির হাত থেকে সুরক্ষা দেয়।",
  "ধান চাষের সঠিক সময়": "ধান চাষের উপযুক্ত সময় হলো জুন থেকে জুলাই (খরিফ মৌসুম)।",
  "উৎপাদনশীলতা বৃদ্ধি করার উপায়": "উন্নতমানের বীজ, সঠিক সার প্রয়োগ এবং কীটনাশক ব্যবহারের মাধ্যমে উৎপাদনশীলতা বৃদ্ধি করা যায়।",
  "কৃষি প্রশিক্ষণ কর্মসূচি": "সরকার কৃষকদের জন্য বিভিন্ন প্রশিক্ষণ কর্মসূচি পরিচালনা করে।",
  "eNAM কী?": "eNAM (ন্যাশনাল অ্যাগ্রিকালচারাল মার্কেট) হলো একটি অনলাইন কৃষি বাণিজ্য প্ল্যাটফর্ম।",
  "ফসল চক্রের উপকারিতা": "ফসল চক্র মাটির উর্বরতা বজায় রাখে এবং কীটপতঙ্গ ও রোগের সমস্যা কমায়।",
  "মাটির পরীক্ষা কীভাবে করবেন?": "কৃষকরা কৃষি বিশ্ববিদ্যালয় বা সরকারি কৃষি দপ্তর থেকে মাটির পরীক্ষা করাতে পারেন।",
  "ছোট জমির জন্য সর্বোত্তম ফসল": "সবজি, ডাল এবং ফল ছোট জমির জন্য ভালো বিকল্প।",
  "জল সংরক্ষণ কৌশল": "বৃষ্টির পানি সংরক্ষণ ও কার্যকর সেচ ব্যবস্থা জল সংরক্ষণের জন্য গুরুত্বপূর্ণ।",
  "মৌমাছির গুরুত্ব": "মৌমাছি পরাগায়নে সাহায্য করে, যা উৎপাদন ও গুণগতমান বৃদ্ধি করে।",
  "PMFBY কী?": "প্রধানমন্ত্রী ফসল বীমা যোজনা (PMFBY) প্রাকৃতিক দুর্যোগ থেকে ফসল রক্ষা করে।",
  "সরকারি প্রকল্প কীভাবে পাবেন?": "কৃষকরা স্থানীয় কৃষি অফিস বা অনলাইন পোর্টালের মাধ্যমে সরকারি প্রকল্পের সুবিধা নিতে পারেন।",
  "জৈব সার ব্যবহারের সুবিধা": "জৈব সার মাটির উর্বরতা বৃদ্ধি করে এবং পরিবেশবান্ধব।",
  "আগাছা দমন পদ্ধতি": "মালচিং, হাত দিয়ে আগাছা পরিষ্কার এবং আগাছানাশকের ব্যবহার কার্যকর পদ্ধতি।",
  "ফসল বৈচিত্র্যের গুরুত্ব": "বিভিন্ন ফসল চাষ করলে ঝুঁকি কমে ও বাজার স্থিতিশীল থাকে।",
  "কিষান ক্রেডিট কার্ড (KCC) কী?": "KCC কৃষকদের জন্য সহজ শর্তে ঋণ প্রদান করে।",
  "মাটির উর্বরতা কিভাবে বাড়ানো যায়?": "জৈব উপাদান, সবুজ সার ও ফসল চক্রের মাধ্যমে মাটির উর্বরতা বৃদ্ধি করা যায়।",
  "ফসল কাটার সেরা পদ্ধতি": "সময়মতো ফসল কাটা, উন্নত সরঞ্জাম ব্যবহার এবং সঠিক সংরক্ষণ গুরুত্বপূর্ণ।",
  "কৃষি পণ্য কিভাবে বিক্রি করবেন?": "কৃষকরা স্থানীয় বাজার, সমবায় সমিতি বা অনলাইন প্ল্যাটফর্মের মাধ্যমে পণ্য বিক্রি করতে পারেন।",
  "NABARD-এর ভূমিকা কী?": "NABARD গ্রামীণ কৃষি উন্নয়নের জন্য অর্থায়ন করে।",
  "ফসল তোলার পর ক্ষতি কমানোর উপায়": "সঠিক সংরক্ষণ, সময়মতো ফসল তোলা এবং ভালো প্যাকেজিং ব্যবহারের মাধ্যমে ক্ষতি কমানো যায়।",
  "টেকসই কৃষির গুরুত্ব": "টেকসই কৃষি খাদ্য নিরাপত্তা নিশ্চিত করে এবং পরিবেশ সংরক্ষণে সহায়তা করে।",
  "সরকারি অনুদান কিভাবে পাবেন?": "কৃষকরা সরকারি কৃষি উন্নয়ন প্রকল্পের মাধ্যমে অনুদানের জন্য আবেদন করতে পারেন।",
  "সুনির্দিষ্ট কৃষি (Precision Farming) কী?": "সুনির্দিষ্ট কৃষিতে আধুনিক প্রযুক্তির মাধ্যমে ফসলের সঠিক পরিচর্যা করা হয়।",
  "সঠিক ফসল নির্বাচন করার উপায়": "মাটির ধরন, জলবায়ু, বাজারের চাহিদা এবং জল সরবরাহের ওপর ভিত্তি করে ফসল নির্বাচন করুন।",
  "কৃষি বনায়নের (Agroforestry) সুবিধা": "কৃষি বনায়ন জীববৈচিত্র্য বৃদ্ধি করে এবং মাটির স্বাস্থ্য ভালো রাখে।",
  "জলবায়ু পরিবর্তনের প্রভাব থেকে বাঁচার উপায়": "জলবায়ু সহনশীল ফসল ও টেকসই কৃষি পদ্ধতি অনুসরণ করা উচিত।",
  "কৃষি সমবায়ের গুরুত্ব": "কৃষি সমবায় কৃষকদের পণ্য বিপণন ও আর্থিক সহায়তা প্রদান করে।",
  "জাতীয় খাদ্য নিরাপত্তা মিশন কী?": "এই মিশন ধান, গম এবং ডাল উৎপাদন বৃদ্ধির জন্য কাজ করে।"
  },
  hinglish: {
"Hello": "Hello! Main aapki kaise madad kar sakta hoon? 😊",
  "Naveen Yojana": "Kisano ke liye latest sarkari yojana PM-KISAN, PMFBY aur eNAM hain.",
  "Krishi Loan": "Kisan Kisan Credit Card (KCC) ya NABARD yojana ke under loan ke liye apply kar sakte hain.",
  "Best Fertilizer": "Fasal ke liye organic aur chemical fertilizer jaise urea, DAP aur compost use kiya ja sakta hai.",
  "Gehu ke liye Kitnashak": "Gehu ke liye chlorpyrifos ya neem-based organic pesticides use karein.",
  "Fasal Rog se Suraksha": "Crop rotation, sahi irrigation aur timely pesticides ka use karein.",
  "Irrigation Methods": "Drip irrigation aur sprinkler irrigation paani bachane ke best tarike hain.",
  "Organic Farming ke Fayde": "Organic kheti mitti ki sehat acchi rakhti hai aur chemical ka upyog kam karti hai.",
  "Beej par Sarkari Subsidy": "Sarkar kisano ko achhe beej par subsidy deti hai.",
  "Fasal Beema": "Pradhan Mantri Fasal Bima Yojana (PMFBY) kisano ko fasal nuksan se suraksha deti hai.",
  "Dhaan Kheti ka Sahi Samay": "Dhaan kheti ka best samay June se July tak (Kharif season) hota hai.",
  "Utpadakta Badhane ke Tarike": "Achhe beej, sahi fertilizer aur kitnashak ke sahi istemal se utpadakta badhayi ja sakti hai.",
  "Krishi Training Program": "Sarkar kisano ke liye alag-alag training programs chalati hai.",
  "eNAM Kya Hai?": "eNAM (National Agricultural Market) ek online krishi vyapar platform hai.",
  "Crop Rotation ke Fayde": "Crop rotation mitti ki upyogita banaye rakhta hai aur rog aur kit ke khatre ko kam karta hai.",
  "Soil Testing kaise karein?": "Kisaan krishi vishwavidyalay ya sarkari krishi karyalay se soil testing karwa sakte hain.",
  "Chhoti Zameen ke liye Best Fasal": "Sabzi, daal aur fal chhoti zameen ke liye achhe vikalp hain.",
  "Pani Sanrakshan ke Tarike": "Rainwater harvesting aur sahi irrigation methods paani bachane ke liye zaroori hain.",
  "Madhumakkhi Palan ka Mahatva": "Madhumakkhiyan pollination me madad karti hain jo utpadan aur quality badhata hai.",
  "PMFBY Kya Hai?": "Pradhan Mantri Fasal Bima Yojana (PMFBY) kisano ko prakritik aapda se bachati hai.",
  "Sarkari Yojana Kaise Milegi?": "Kisaan local krishi office ya online portal ke madhyam se sarkari yojana ka labh le sakte hain.",
  "Organic Fertilizer ke Fayde": "Organic fertilizers mitti ki upyogita badhate hain aur paryavaran-friendly hote hain.",
  "Weed Control ke Tarike": "Mulching, haath se nikalna aur weedicide ka upyog best tarike hain.",
  "Crop Diversification ka Mahatva": "Anek fasal ugane se jokhim kam hota hai aur bazar stable rehta hai.",
  "Kisan Credit Card (KCC) Kya Hai?": "KCC kisano ko asaan sharto par loan pradan karta hai.",
  "Mitti ki Upyogita Kaise Badhayein?": "Organic matter, green manure aur crop rotation se mitti ki upyogita badhayi ja sakti hai.",
  "Best Fasal Cutting Method": "Samay par fasal kaatna, achhe tools ka upyog aur sahi storage zaroori hai.",
  "Krishi Utpaad Kaise Bechein?": "Kisaan local market, cooperative society ya online platform ke madhyam se apna utpaad bech sakte hain.",
  "NABARD Ka Role Kya Hai?": "NABARD gramin krishi vikas ke liye funding pradan karta hai.",
  "Post-Harvest Loss kaise Kam Karein?": "Sahi storage, timely harvesting aur acchi packaging se nukshan kam hota hai.",
  "Sustainable Farming ka Mahatva": "Sustainable farming food security banaye rakhti hai aur paryavaran ko surakshit karti hai.",
  "Sarkari Grant Kaise Milegi?": "Kisaan sarkari krishi vikas yojana ke madhyam se grant ke liye apply kar sakte hain.",
  "Precision Farming Kya Hai?": "Precision farming me modern technology ka upyog karke fasal ki sahi dekhbhal ki jati hai.",
  "Sahi Fasal Kaise Chunein?": "Mitti ki prakriti, jalvayu, bazar ki demand aur paani ki uplabdta ke adhar par fasal chunein.",
  "Agroforestry ke Fayde": "Agroforestry jaiv vividhta badhata hai aur mitti ki sehat achhi rakhta hai.",
  "Climate Change se Suraksha Kaise Karen?": "Jalvayu-anukool fasal aur sustainable krishi paddhati apnaani chahiye.",
  "Krishi Cooperative ka Mahatva": "Krishi cooperative kisano ko behtar bazar aur aarthik sahayata pradan karta hai.",
  "National Food Security Mission Kya Hai?": "Yeh mission dhaan, gehu aur daal ki utpadan badhane ke liye kaam karta hai."
  }
};

// const detectLanguage = (text) => {
//   if (/[ऀ-ॿ]/.test(text)) return "hi";
//   if (/[ঀ-৿]/.test(text)) return "bn";
//   if (/[a-zA-Z]+/.test(text) && /[अ-ह]+/.test(text)) return "hinglish";

//   if (text.length > 3) {
//     const langCode = franc(text);
//     if (responses[langCode]) return langCode;
//   }
//   return "en";
// };
const detectLanguage = (text) => {
  if (/[ऀ-ॿ]/.test(text)) return "hi"; // Hindi script detection
  if (/[ঀ-৿]/.test(text)) return "bn"; // Bengali script detection
  
  // Hinglish detection using common Romanized Hindi patterns
  const hinglishPattern = /\b(ka|ki|ke|hai|ho|kya|kyon|nahi|sab|badiya|chalo|karo|jaldi|fasal|beej|sahi|kaise|chunein)\b/i;
  if (/[a-zA-Z]/.test(text) && hinglishPattern.test(text)) return "hinglish";

  if (text.length > 3) {
    const langCode = franc(text);
    if (responses[langCode]) return langCode;
  }
  return "en";
};

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const detectedLang = detectLanguage(input);
    const userMessage = input.toLowerCase();
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      const response = responses[detectedLang]?.[userMessage] ||
        (detectedLang === "hi" ? "क्षमा करें, मुझे समझ नहीं आया। कृपया इसे फिर से पूछें।" :
         detectedLang === "bn" ? "দুঃখিত, আমি বুঝতে পারিনি। দয়া করে আবার চেষ্টা করুন।" :
         detectedLang === "hinglish" ? "Maaf kijiye, mujhe samajh nahi aaya. Kripya dobara puchhein." :
         "I'm not sure. Please try rephrasing your question.");

      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
  };

//   return (
//     <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col border border-gray-300 dark:border-gray-700">
//       <div className="flex justify-between items-center p-3 bg-green-600 dark:bg-green-700 text-white font-semibold rounded-t-lg">
//         <span>Agro ChatBot</span>
//         <FaTimes className="cursor-pointer" onClick={onClose} />
//       </div>
//       <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-cyan-200 dark:bg-gray-800">
//         {messages.map((msg, index) => (
//           <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
//             <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-pink-500 text-white" : "bg-white dark:bg-gray-700 text-black dark:text-white"}`}>
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center bg-white dark:bg-gray-900">
//         <input type="text" className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} />
//         <button className="ml-2 bg-green-600 dark:bg-green-700 text-white p-2 rounded-lg" onClick={handleSendMessage}><FaPaperPlane /></button>
//       </div>
//     </div>
//   );
// };

return (
  <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col border border-gray-300 dark:border-gray-700">
    {/* Chatbot Header */}
    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-t-lg">
      <span>Agro ChatBot</span>
      <FaTimes className="cursor-pointer" onClick={onClose} />
    </div>

    {/* Chat Messages */}
    <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-blue-100 to-cyan-300 dark:from-gray-900 dark:to-gray-800">
      {messages.map((msg, index) => (
        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? 
            "bg-gradient-to-r from-pink-500 to-red-500 text-white" : 
            "bg-gradient-to-r from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 text-black dark:text-white"}`}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>

    {/* Chat Input Field */}
    <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center bg-gray-50 dark:bg-gray-900">
      <input type="text" 
        className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none" 
        placeholder="Type your message..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} 
      />
      <button className="ml-2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-lg" onClick={handleSendMessage}>
        <FaPaperPlane />
      </button>
    </div>
  </div>
);
};

export default ChatBot;
