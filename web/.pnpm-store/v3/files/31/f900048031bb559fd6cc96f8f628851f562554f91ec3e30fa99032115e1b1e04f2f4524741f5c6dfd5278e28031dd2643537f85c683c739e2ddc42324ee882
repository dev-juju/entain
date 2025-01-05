import validateShades from '../validateShades';
var validateArrayPalette = function validateArrayPalette(paletteObj) {
  var palette = paletteObj.palette;
  var invalidColors = [];
  var validatedPalette = palette.flatMap(function (p) {
    var shades = validateShades(p.values);
    if (shades.invalidShades.length) {
      invalidColors.push({
        label: p.label,
        values: shades.invalidShades
      });
    }
    if (!shades.validShades.length) {
      return [];
    }
    return {
      label: p.label,
      values: shades.validShades
    };
  });
  return {
    name: paletteObj.name,
    palette: validatedPalette,
    invalidColors: invalidColors
  };
};
export default validateArrayPalette;