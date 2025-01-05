import { getInvalidPaletteMessage, warn } from '../transformPalette/messages';
var reportInvalidPalettes = function reportInvalidPalettes(palettes) {
  palettes.forEach(function (palette) {
    var invalidColors = [];
    palette.invalidColors.forEach(function (c) {
      c.values.forEach(function (s) {
        invalidColors.push("".concat(c.label, " -> ").concat(s.value.toString()));
      });
    });
    warn(getInvalidPaletteMessage(invalidColors, palette.name));
  });
};
export default reportInvalidPalettes;