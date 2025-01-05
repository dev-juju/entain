import chroma from 'chroma-js';
var getTextColor = function getTextColor(color) {
  var chromaColor = chroma(color);
  var alpha = chromaColor.alpha();
  var mixRatio = Math.pow(1 - alpha, 2);
  var whitened = chroma.mix(chromaColor, '#FFFFFF', mixRatio);
  var luminanceThreshold = 0.45;
  return whitened.luminance() > luminanceThreshold ? '#000000' : '#FFFFFF';
};
export default getTextColor;