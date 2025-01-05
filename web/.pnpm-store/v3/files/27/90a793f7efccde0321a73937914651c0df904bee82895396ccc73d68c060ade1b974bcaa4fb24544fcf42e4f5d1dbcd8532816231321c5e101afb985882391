export var getDeprecationMessage = function getDeprecationMessage(deprecated, removedIn, alternative) {
  var message1 = "Color picker warning: ".concat(deprecated, " is DEPRECATED");
  var message2 = removedIn ? " and will be removed in ".concat(removedIn, ".") : '';
  var message3 = alternative ? " Use ".concat(alternative, " instead.") : '';
  return message1 + message2 + message3;
};
export var deprecationWarning = function deprecationWarning(message) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  // eslint-disable-next-line no-console
  console.warn(message);
};
var warnDeprecated = function warnDeprecated(deprecated, removedIn, alternative) {
  var message = getDeprecationMessage(deprecated, removedIn, alternative);
  deprecationWarning(message);
};
export default warnDeprecated;