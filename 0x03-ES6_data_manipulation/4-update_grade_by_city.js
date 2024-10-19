// Return an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const filteredStudents = students.filter((student) => student.location === city);

  // Update grades for each student
  return filteredStudents.map((student) => {
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);

    // Return a new object with the grade (or "N/A" if not found)
    return {
      ...student,
      grade: gradeEntry ? gradeEntry.grade : 'N/A',
    };
  });
}
