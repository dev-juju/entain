function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useCallback, useState } from 'react';
import { useParameter } from '@storybook/manager-api';
import { IconButton, Icons, WithTooltip } from '@storybook/components';
import { TOOL_ID } from './constants';
import ColorPicker from './colorPicker/colorPicker';
var ColorPickerIcon = function ColorPickerIcon() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var colorPicker = useParameter('colorPicker');
  var colorPalettes = useParameter('colorPalettes');
  var disableDefaultPalettes = (colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.disableDefaultPalettes) || (colorPalettes === null || colorPalettes === void 0 ? void 0 : colorPalettes.disableDefaultPalettes);
  var palettes = (colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.palettes) || (colorPalettes === null || colorPalettes === void 0 ? void 0 : colorPalettes.palettes);
  var toggleColorPicker = useCallback(function (visible) {
    if (visible !== isActive) {
      setIsActive(!isActive);
    }
  }, [isActive]);
  if (!(palettes !== null && palettes !== void 0 && palettes.length) && disableDefaultPalettes) {
    return null;
  }
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "bottom",
    trigger: "click",
    defaultVisible: true,
    tooltip: /*#__PURE__*/React.createElement(ColorPicker, null),
    closeOnOutsideClick: true,
    onVisibleChange: toggleColorPicker
  }, /*#__PURE__*/React.createElement(IconButton, {
    key: TOOL_ID,
    active: isActive,
    title: "Color palettes"
  }, /*#__PURE__*/React.createElement(Icons, {
    icon: "paintbrush"
  })));
};
export default ColorPickerIcon;