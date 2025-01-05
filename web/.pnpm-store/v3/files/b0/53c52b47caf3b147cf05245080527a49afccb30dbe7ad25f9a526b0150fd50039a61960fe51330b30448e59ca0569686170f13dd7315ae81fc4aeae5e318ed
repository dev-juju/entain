var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { Fragment, useMemo } from 'react';
import { css, jsx } from '@emotion/react';
import Colors from './colors';
import { useTheme } from '../hooks';
var Palette = function Palette(_ref) {
  var palette = _ref.palette;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  var colors = useMemo(function () {
    return palette.map(function (c, i) {
      return jsx(Fragment, {
        key: "Colors_".concat(c.label, "_").concat(i)
      }, jsx("p", {
        css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              display: flex;\n              flex-wrap: wrap;\n              align-items: center;\n              font-size: 1.1em;\n              padding-right: 0.5em;\n              margin: 0;\n              text-transform: capitalize;\n              border-bottom: ", ";\n            "])), "1px solid  ".concat(theme.background.tertiary))
      }, c.label || 'Unnamed'), jsx(Colors, {
        colors: c
      }));
    });
  }, [palette, theme]);
  return jsx("div", {
    css: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        display: grid;\n        grid-template-columns: minmax(70px, min-content) auto;\n        grid-row-gap: 5px;\n      "])))
  }, colors);
};
export default Palette;