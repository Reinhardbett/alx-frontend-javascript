// Return a new ArrayBuffer with an Int8 value at a specific position

export default function createInt8TypedArray(length, position, value) {
  // Create new ArrayBuffer of the specified length in bytes
  const buffer = new ArrayBuffer(length);
  // Create a new DataView on the buffer
  const dataView = new DataView(buffer);

  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position using setInt8
  dataView.setInt8(position, value);

  // Return the DataView (values in hex)
  return dataView;
}
