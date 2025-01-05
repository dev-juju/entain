import validateShade from '../validateShade';
var validateShades = function validateShades(shades) {
  var validShades = [];
  var invalidShades = [];
  shades.forEach(function (shade) {
    var isValid = validateShade(shade.value);
    if (!isValid) {
      invalidShades.push(shade);
      return;
    }
    validShades.push(shade);
  });
  return {
    validShades: validShades,
    invalidShades: invalidShades
  };
};
export default validateShades;