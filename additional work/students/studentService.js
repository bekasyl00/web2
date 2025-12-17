export function createStudent(name, age) {
    return {
        name,
        age,
        grades: []
    };
}

export function addGrade(student, grade) {
    student.grades.push(grade);
}
