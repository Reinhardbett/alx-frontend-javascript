/** returns an array of ids from a list of object.
*/
export default function getListStudentsId(students) {
  // Check if arg is array
  if (!Array.isArray(students)) {
    return [];
  }
  // Return list of object ids
  return students.map((student) => student.id);
}
