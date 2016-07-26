export default function clamp(value, min, max) {
  if (min < max) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }

    return value;
  }

  // min > max
  if (value < max) {
    return max;
  } else if (value > min) {
    return min;
  }

  return value;
}
