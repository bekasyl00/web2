const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET — Render HTML form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// POST — Calculate BMI
app.post("/calculate-bmi", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    // Extra inputs from student requirement
    const fatDensity = parseFloat(req.body.fatDensity);
    const muscleIndex = parseFloat(req.body.muscleIndex);

    if (weight <= 0 || height <= 0) {
        return res.send("<h2>Invalid input. Height and weight must be positive numbers.</h2>");
    }

    const bmi = weight / (height * height);

    // Determine category
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // Recommendations array
    const recommendations = {
        "Underweight": "Increase calorie intake, add strength training.",
        "Normal weight": "Maintain balanced diet and regular exercise.",
        "Overweight": "Reduce sugar intake, increase cardio workouts.",
        "Obese": "Consult a specialist, follow controlled nutrition program."
    };

    const result = `
        <h1>Your BMI Result</h1>
        <p>BMI: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Category: <strong>${category}</strong></p>
        <p>Fat Density Input: ${fatDensity}</p>
        <p>Muscle Index Input: ${muscleIndex}</p>
        <h3>Recommendation:</h3>
        <p>${recommendations[category]}</p>
        <a href="/">Back</a>
    `;

    res.send(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});
