import pluralize from 'pluralize';
var joinStringList = function joinStringList(strings, limit, suffixText) {
  var count = strings.length;
  if (limit === 0) {
    return count.toString();
  }
  var stringArray = strings.flatMap(function (string, i) {
    var _getLastStringFromLim;
    var getLastStringFromLimit = function getLastStringFromLimit() {
      if (limit === undefined || limit > count) {
        return;
      }
      return limit - 1;
    };
    var lastString = (_getLastStringFromLim = getLastStringFromLimit()) !== null && _getLastStringFromLim !== void 0 ? _getLastStringFromLim : count - 1;
    if (limit && i + 1 > limit) {
      return '';
    }
    if (lastString === 0 && count === 1) {
      return string;
    }
    if (i < lastString - 1) {
      return "".concat(string, ", ");
    }
    if (i === lastString) {
      var otherCount = limit ? count - limit : 0;
      var otherText = pluralize(suffixText || '', otherCount);
      var returnString = "".concat(string, " and ").concat(otherCount, " ").concat(otherText);
      if (lastString === 0) {
        return returnString;
      }
      if (otherCount > 0) {
        return ", ".concat(returnString);
      }
      return " and ".concat(string);
    }
    return string;
  });
  return stringArray.join('');
};
export default joinStringList;