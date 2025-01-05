var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useTheme } from '../../hooks';
var Palette = function Palette(_ref) {
  var item = _ref.item,
    itemProps = _ref.itemProps,
    index = _ref.index;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  if (!item.palette) {
    return null;
  }
  var color = itemProps.current === index ? theme.text.selected : theme.text.primary;
  return jsx("p", {
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        margin: 0;\n        font-size: 1.1em;\n        white-space: nowrap;\n        color: ", ";\n      "])), color)
  }, item.name || "Palette No".concat(index + 1));
};
export default Palette;