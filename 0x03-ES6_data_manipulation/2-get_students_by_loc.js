/** Return array of objects located in a specific city
*/

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
