/* eslint-disable no-console */
import joinStringList from '../joinStringList';
export var getInvalidPaletteMessage = function getInvalidPaletteMessage(invalidColors, paletteName) {
  var list = joinStringList(invalidColors, 2, 'other invalid color');
  return "".concat(list, " detected in \"").concat(paletteName, "\" palette.");
};
export var warn = function warn(message) {
  return console.warn("%cColor picker warning%c: ".concat(message), 'color: red');
};