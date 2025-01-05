function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import validateObjectColors from '../../validation/validateObjectColors';
import transformShades from '../transformShades';
var transformObjectPalette = function transformObjectPalette(paletteObj) {
  var validatedPalette = Object.entries(paletteObj.palette).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      colorLabel = _ref2[0],
      colorValues = _ref2[1];
    return validateObjectColors(colorLabel, colorValues);
  });
  var invalidColors = validatedPalette.flatMap(function (p) {
    return p.invalidColors || [];
  });
  var transformedPalette = validatedPalette.flatMap(function (color) {
    var _color$palette;
    if (!((_color$palette = color.palette) !== null && _color$palette !== void 0 && _color$palette.values.length)) {
      return [];
    }
    return {
      label: color.palette.label,
      values: transformShades(color.palette.values)
    };
  });
  return {
    name: paletteObj.name,
    palette: transformedPalette,
    invalidColors: invalidColors
  };
};
export default transformObjectPalette;