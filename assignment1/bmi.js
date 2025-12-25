function calculate(weight, height) {
    const bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    return {
        value: bmi.toFixed(2),
        category: category
    };
}

module.exports = { calculate };
