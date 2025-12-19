const express = require("express");
const path = require("path");
const bmi = require("./bmi");

const router = express.Router();

/* главная страница */
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/* POST 1 — проверка данных */
router.post("/validate", (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    if (weight <= 0 || height <= 0) {
        return res.send("<h2>Error: invalid input</h2><a href='/'>Back</a>");
    }

    res.redirect(`/calculate?weight=${weight}&height=${height}`);
});

/* GET — расчёт и результат */
router.get("/calculate", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    const result = bmi.calculate(weight, height);

    res.send(`
        <h1>BMI Result</h1>
        <p>BMI: <b>${result.value}</b></p>
        <p>Category: <b>${result.category}</b></p>
        <a href="/">Back</a>
    `);
});

module.exports = router;
