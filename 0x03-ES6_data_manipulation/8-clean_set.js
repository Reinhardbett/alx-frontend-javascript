// Return a string of all the set values that start with a specific string

export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';

  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString)) // Check if value starts with startString
    .map((value) => value.slice(startString.length)) // Remove the startString prefix
    .join('-'); // Join the values with '-'

  return result;
}
