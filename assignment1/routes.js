const express = require("express");
const path = require("path");
const bmi = require("./bmi");

const router = express.Router();


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


router.post("/calculate", (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);


    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        return res.send("<h2>Error: invalid input</h2><a href='/'>Back</a>");
    }

  
    const result = bmi.calculate(weight, height);

    
 
    res.send(`
        <h1>BMI Result</h1>
        <p>BMI: <b>${result.value}</b></p>
        <p>Category: <b>${result.category}</b></p>
        <p><strong>Recommendation:</strong> ${recommendations[result.category]}</p>
        <a href="/">Back</a>
    `);
});

module.exports = router;
