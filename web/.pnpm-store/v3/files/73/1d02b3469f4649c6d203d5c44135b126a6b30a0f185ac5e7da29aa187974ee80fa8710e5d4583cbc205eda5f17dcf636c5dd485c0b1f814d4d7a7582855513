import { useParameter } from '@storybook/manager-api';
import { useTheme as useSBTheme } from '@storybook/theming';
import { themes, commonTheme } from './constants';
var useTheme = function useTheme() {
  var sbTheme = useSBTheme();
  var colorPicker = useParameter('colorPicker') || {};
  var themeType = sbTheme.base;
  if (colorPicker.theme && colorPicker.theme !== 'auto') {
    themeType = colorPicker.theme;
  }
  return {
    theme: themes[themeType],
    commonTheme: commonTheme,
    themeType: themeType
  };
};
export default useTheme;