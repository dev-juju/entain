var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks';
var CheckBox = function CheckBox(_ref) {
  var label = _ref.label,
    checked = _ref.checked,
    onClick = _ref.onClick;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  return jsx("div", {
    onClick: onClick,
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        align-items: center;\n\n        &:hover {\n          cursor: pointer;\n        }\n      "])))
  }, jsx("div", {
    css: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border: ", ";\n          border-radius: 0.2em;\n          width: 1.3em;\n          height: 1.3em;\n          margin-right: 0.5em;\n        "])), "1px solid ".concat(theme.border.secondary))
  }, jsx(FontAwesomeIcon, {
    icon: faCheck,
    css: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            path {\n              color: ", ";\n            }\n          "])), checked ? "".concat(theme.text.primary) : 'transparent')
  })), label && jsx("p", {
    css: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            font-size: 1.1em;\n            line-height: 1em;\n            margin: 0;\n            white-space: nowrap;\n          "])))
  }, label));
};
export default CheckBox;