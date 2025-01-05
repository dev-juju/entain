var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
var ShadeTooltip = function ShadeTooltip(_ref) {
  var shade = _ref.shade,
    copied = _ref.copied;
  var value = shade.value,
    label = shade.label,
    textColor = shade.textColor;
  var text = label ? "".concat(label, ": ").concat(value) : value;
  return jsx("div", {
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        padding: 0.2em 0.5em;\n        border-radius: 0.3em;\n        background-color: ", " !important;\n      "])), value)
  }, jsx("span", {
    css: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          white-space: nowrap;\n          font-size: 1.2em;\n          line-height: 0;\n          color: ", " !important;\n        "])), textColor)
  }, copied ? 'Copied' : text));
};
export default ShadeTooltip;