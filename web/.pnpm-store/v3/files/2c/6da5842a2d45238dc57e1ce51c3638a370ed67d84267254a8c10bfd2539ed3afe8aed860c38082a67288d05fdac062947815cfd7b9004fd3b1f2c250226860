var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** @jsx jsx */
import { useCallback } from 'react';
import { css, jsx } from '@emotion/react';
import pluralize from 'pluralize';
import Dropdown from '../dropdown/dropdown';
import Arg from './arg';
var ArgsList = function ArgsList(_ref) {
  var args = _ref.args,
    selected = _ref.selected,
    onChange = _ref.onChange;
  var handleChange = useCallback(function (item) {
    var index = selected.findIndex(function (a) {
      return a === item;
    });
    var newArgs = _toConsumableArray(selected);
    if (index >= 0) {
      newArgs.splice(index, 1);
    } else {
      newArgs.push(item);
    }
    onChange(newArgs);
  }, [selected, onChange]);
  var label = selected.length > 0 ? "Apply to ".concat(pluralize('control', selected.length, true)) : 'Select controls';
  var itemProps = {
    selected: selected
  };
  return jsx("div", {
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        min-width: 13em;\n        display: flex;\n        justify-content: center;\n        @media (max-width: 800px) {\n          justify-content: unset;\n        }\n      "])))
  }, jsx(Dropdown, {
    label: label,
    items: args,
    itemProps: itemProps,
    itemComponent: Arg,
    onItemClick: handleChange
  }));
};
export default ArgsList;