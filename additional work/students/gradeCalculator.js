export function calculateAverage(grades) {
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
}

export function getStatus(average) {
    return average >= 60 ? "Passed" : "Failed";
}
