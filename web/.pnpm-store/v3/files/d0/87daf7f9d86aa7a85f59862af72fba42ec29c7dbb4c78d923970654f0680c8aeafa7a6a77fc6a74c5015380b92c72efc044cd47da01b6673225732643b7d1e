function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import transformPalette from '../transformPalette';
import { defaultPalettes } from '../../constants';
var getColorPalettes = function getColorPalettes(disableDefaultPalettes, customPalettes) {
  var transformedPalettes = {
    palettes: [],
    invalidPalettes: []
  };
  customPalettes === null || customPalettes === void 0 || customPalettes.forEach(function (p) {
    var transformed = transformPalette(p);
    if (transformed.palette.length) {
      transformedPalettes.palettes.push({
        name: transformed.name,
        palette: transformed.palette
      });
    }
    if (transformed.invalidColors.length) {
      transformedPalettes.invalidPalettes.push({
        name: p.name,
        invalidColors: transformed.invalidColors
      });
    }
  });
  if (!disableDefaultPalettes) {
    var _transformedPalettes$;
    (_transformedPalettes$ = transformedPalettes.palettes).push.apply(_transformedPalettes$, _toConsumableArray(defaultPalettes));
  }
  return transformedPalettes;
};
export default getColorPalettes;