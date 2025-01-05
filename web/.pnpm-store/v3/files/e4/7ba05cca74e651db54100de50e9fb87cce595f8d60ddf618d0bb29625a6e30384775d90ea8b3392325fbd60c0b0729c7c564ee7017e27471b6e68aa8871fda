var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Shade from './shade';
import { useMemo } from 'react';
import { useTheme } from '../hooks';
var Colors = function Colors(_ref) {
  var colors = _ref.colors;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  var shades = useMemo(function () {
    return colors.values.map(function (shade, i) {
      return jsx(Shade, {
        shade: shade,
        key: "Shade_".concat(shade.value, "_").concat(i)
      });
    });
  }, [colors]);
  return jsx("div", {
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        height: 100%;\n        border-bottom: ", ";\n      "])), "1px solid  ".concat(theme.border.tertiary))
  }, shades);
};
export default Colors;