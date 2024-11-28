type RGBAColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

function parseRGBA(rgba: string): RGBAColor {
  const matches = rgba.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
  );
  if (!matches) {
    throw new Error('Invalid RGBA color format');
  }
  return {
    r: parseInt(matches[1], 10),
    g: parseInt(matches[2], 10),
    b: parseInt(matches[3], 10),
    a: parseFloat(matches[4] || '1'), // Default to 1 if alpha is not provided
  };
}

export function setAlpha(rgba: string, newAlpha: number): string {
  const { r, g, b } = parseRGBA(rgba);
  return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
}
