import log from "./utils/logger.js";
import {
    createStudent,
    addGrade,
    calculateAverage,
    getStatus
} from "./students/index.js";

// Создание студента
const student = createStudent("Bekasyl", 20);

// Добавление оценок
addGrade(student, 75);
addGrade(student, 82);
addGrade(student, 60);

// Расчёт результата
const average = calculateAverage(student.grades);
const status = getStatus(average);

// Вывод
log(`Student: ${student.name}`);
log(`Average grade: ${average.toFixed(2)}`);
log(`Status: ${status}`);
