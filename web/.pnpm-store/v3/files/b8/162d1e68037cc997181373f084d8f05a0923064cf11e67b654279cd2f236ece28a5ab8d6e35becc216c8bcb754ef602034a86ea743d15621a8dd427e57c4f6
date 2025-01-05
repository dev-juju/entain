import React, { useCallback } from 'react';
import Dropdown from '../dropdown/dropdown';
import Palette from './palette';
var PalettesList = function PalettesList(_ref) {
  var palettes = _ref.palettes,
    current = _ref.current,
    onChange = _ref.onChange;
  var handleChange = useCallback(function (item, index) {
    onChange(index);
  }, [onChange]);
  var label = palettes.length > 1 ? palettes[current].name : palettes[0].name;
  var itemProps = {
    current: current
  };
  return /*#__PURE__*/React.createElement(Dropdown, {
    label: label || "Palette No".concat(current + 1),
    items: palettes,
    itemProps: itemProps,
    itemComponent: Palette,
    closeOnItemClick: true,
    renderList: ">1",
    onItemClick: handleChange
  });
};
export default PalettesList;