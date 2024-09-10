const colorPalette = [
  '#E7ECEF',
  '#274C77',
  '#f1ff58',
  '#dedbcc',
  '#e5eae6',
  '#f3f4f4',
  '#032425',
  '#fffef9',
  '#7a9cef',
  '#fff7d6',
  '#1330be',
  '#0e5b4c',
  '#ff6a05',
  '#fffcee',
  '#e0d4bf',
  '#1f3a26',
  '#fff8f3',
  '#636363',
  '#7b896f',
  '#ff4f4f',
  '#f0af9c',
  '#f3fffa',
  '#3e3b34',
  '#1e1d19',
  '#004683',
  '#1c70ad',
  '#0c121b',
];

function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  // Use the hash to select a color from the palette
  const colorIndex = Math.abs(hash) % colorPalette.length;
  return colorPalette[colorIndex];
}

export function getColorStyleFromString(str: string) {
  const backgroundColor = stringToColor(str);

  // Calculate luminance to determine text color
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  const textColor = luminance > 0.5 ? '#000000' : '#FFFFFF';

  return `background-color: ${backgroundColor}; color: ${textColor};`;
}
