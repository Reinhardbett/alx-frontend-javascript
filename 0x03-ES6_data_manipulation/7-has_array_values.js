// Return Boolean if elements in array exist within a set

export default function hasValuesFromArray(set, array) {
  // Iterate over the array
  for (const element of array) {
    // Check if element exists in set
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
