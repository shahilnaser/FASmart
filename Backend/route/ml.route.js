// const express = require("express");
// const axios = require("axios");
// const router = express.Router();

// router.post("/predict", async (req, res) => {
//     try {
//         // Send data to Flask ML API
//         const flaskResponse = await axios.post("http://127.0.0.1:5001/predict", req.body);

//         // Send the prediction result to the frontend
//         res.json(flaskResponse.data);
//     } catch (error) {
//         console.error("Error calling Flask API:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// module.exports = router;


import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/predict", async (req, res) => {
    try {
        const flaskResponse = await axios.post("http://127.0.0.1:5001/predict", req.body);
        res.json(flaskResponse.data);
    } catch (error) {
        console.error("Error calling Flask API:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
// export default router;
