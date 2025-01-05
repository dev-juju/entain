import { addons, types } from '@storybook/manager-api';
import ColorPicker from './colorPickerIcon';
import { ADDON_ID, TOOL_ID } from './constants';
addons.register(ADDON_ID, function () {
  addons.add(TOOL_ID, {
    title: 'ColorPicker',
    type: types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: ColorPicker,
    paramKey: 'ColorPicker'
  });
});