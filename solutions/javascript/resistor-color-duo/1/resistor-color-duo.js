//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLOR_VALUES = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = (colors) => {
  return Number(String(COLOR_VALUES.indexOf(colors[0])) + String(COLOR_VALUES.indexOf(colors[1])));
};
