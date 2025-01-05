"use strict";

var _managerApi = require("@storybook/manager-api");
var _colorPickerIcon = _interopRequireDefault(require("./colorPickerIcon"));
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_managerApi.addons.register(_constants.ADDON_ID, function () {
  _managerApi.addons.add(_constants.TOOL_ID, {
    title: 'ColorPicker',
    type: _managerApi.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: _colorPickerIcon["default"],
    paramKey: 'ColorPicker'
  });
});