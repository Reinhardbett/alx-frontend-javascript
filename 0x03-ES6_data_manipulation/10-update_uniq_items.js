// Return an updated map for all items with initial quantity at 1

export default function updateUniqueItems(map) {
  // Confirm argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Update value to 100
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
