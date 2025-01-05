var getColorControls = function getColorControls(argTypes, additionalControls) {
  var argTypesArray = Object.entries(argTypes);
  if (!argTypesArray.length) {
    return;
  }
  var filteredArgTypes = argTypesArray.filter(function (arg) {
    var _arg$1$control;
    return ((_arg$1$control = arg[1].control) === null || _arg$1$control === void 0 ? void 0 : _arg$1$control.type) === 'color';
  });
  var colorControls = filteredArgTypes.map(function (arg) {
    return arg[0];
  });
  if (additionalControls !== null && additionalControls !== void 0 && additionalControls.length) {
    var storyControls = argTypesArray.map(function (arg) {
      return arg[0];
    });
    var filteredAdditional = additionalControls.filter(function (a) {
      var _argTypes$a$control;
      return storyControls.includes(a) && ((_argTypes$a$control = argTypes[a].control) === null || _argTypes$a$control === void 0 ? void 0 : _argTypes$a$control.type) === 'text';
    });
    var extendedControls = new Set(colorControls.concat(filteredAdditional));
    return Array.from(extendedControls);
  }
  return colorControls;
};
export default getColorControls;