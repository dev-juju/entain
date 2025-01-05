var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */
import { useCallback } from 'react';
import { css, jsx } from '@emotion/react';
import AnimateHeight from 'react-animate-height';
import { useTheme } from '../../hooks';
var List = function List(_ref) {
  var active = _ref.active,
    items = _ref.items,
    itemProps = _ref.itemProps,
    itemComponent = _ref.itemComponent,
    onItemClick = _ref.onItemClick,
    testId = _ref.testId;
  var _useTheme = useTheme(),
    theme = _useTheme.theme,
    commonTheme = _useTheme.commonTheme;
  var ItemComponent = itemComponent;
  var getListItems = useCallback(function () {
    return items.map(function (item, i) {
      var handleClick = function handleClick() {
        onItemClick(item, i);
      };
      var backgroundColor = itemProps.current === i ? theme.background.selected : 'transparent';
      var backgroundColorHover = itemProps.current === i ? theme.background.selected : theme.background.hover;
      return jsx("div", {
        key: i,
        onClick: handleClick,
        css: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              background-color: ", ";\n              padding: 0;\n              border: none;\n              width: 100%;\n              display: block;\n              padding: 0.5em;\n              border-bottom: ", ";\n\n              &:hover {\n                cursor: pointer;\n                background-color: ", ";\n              }\n\n              &:last-of-type {\n                border: none;\n              }\n            "])), "".concat(backgroundColor), "1px solid ".concat(theme.border.tertiary), backgroundColorHover)
      }, jsx(ItemComponent, {
        item: item,
        itemProps: itemProps,
        index: i,
        key: i
      }));
    });
  }, [items, itemProps, theme, ItemComponent, onItemClick]);
  return jsx("div", {
    css: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: fixed;\n      "]))),
    "data-testid": testId
  }, jsx(AnimateHeight, {
    height: active ? 'auto' : 0
  }, jsx("div", {
    css: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            box-shadow: ", ";\n            background-color: ", ";\n            border-radius: 0.5em;\n            margin: 0.25em;\n            max-height: 200px;\n            overflow-x: hidden;\n            overflow-y: auto;\n            &::-webkit-scrollbar {\n              width: 0.5em;\n              height: 0.5em;\n            }\n            &::-webkit-scrollbar-track {\n              background: ", ";\n            }\n            &::-webkit-scrollbar-thumb {\n              background: ", ";\n              border-radius: 0.25em;\n              &:hover {\n                background-color: ", ";\n              }\n            }\n          "])), "0px 0px 4px 1px ".concat(theme.shadow.primary), "".concat(theme.background.secondary), "".concat(commonTheme.scrollBar.track), "".concat(commonTheme.scrollBar.thumb), "".concat(commonTheme.scrollBar.thumbHover))
  }, getListItems())));
};
export default List;