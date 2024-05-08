function adjustColorByScore(baseColorHex, score, score_st, score_ed) {
  // Parse the base color from hex to RGB
  const r = parseInt(baseColorHex.slice(1, 3), 16);
  const g = parseInt(baseColorHex.slice(3, 5), 16);
  const b = parseInt(baseColorHex.slice(5, 7), 16);

  // Calculate the ratio based on score
  let t = (score - score_st) / (score_ed - score_st);
  t = Math.max(0, Math.min(1, t)); // Clamp t to the range [0, 1]

  // Determine target colors for lightening and darkening
  let targetLight = { r: 255, g: 255, b: 255 };
  let targetDark = { r: 0, g: 0, b: 0 };

  // Calculate new color values
  // If t is closer to 0, the color should be lighter, closer to 15 it should be darker
  const newR = Math.round(
    r +
      (t <= 0.5
        ? (targetLight.r - r) * (1 - 2 * t)
        : (targetDark.r - r) * (2 * t - 1))
  );
  const newG = Math.round(
    g +
      (t <= 0.5
        ? (targetLight.g - g) * (1 - 2 * t)
        : (targetDark.g - g) * (2 * t - 1))
  );
  const newB = Math.round(
    b +
      (t <= 0.5
        ? (targetLight.b - b) * (1 - 2 * t)
        : (targetDark.b - b) * (2 * t - 1))
  );

  // Convert new RGB values back to hex
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
}

export default adjustColorByScore;
