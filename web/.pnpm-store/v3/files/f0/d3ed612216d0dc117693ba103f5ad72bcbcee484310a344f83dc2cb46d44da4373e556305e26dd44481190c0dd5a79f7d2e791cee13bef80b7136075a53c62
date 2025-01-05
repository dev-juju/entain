import transformArrayPalette from './transformation/transformArrayPalette';
import transformObjectPalette from './transformation/transformObjectPalette';
var transformPalette = function transformPalette(paletteObj) {
  if (Array.isArray(paletteObj.palette)) {
    return transformArrayPalette(paletteObj);
  }
  return transformObjectPalette(paletteObj);
};
export default transformPalette;