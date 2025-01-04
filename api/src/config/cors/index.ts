/**
 * @packageDocumentation
 * @category Config
 */

//#region imports
import { isDev } from 'Entain/common/utilities';
//#endregion

const allowedOrigins = [];

export const corsOptions = {
  origin: function (origin, callback) {
    if (isDev || allowedOrigins.indexOf(origin) !== -1 || !origin) callback(null, true);
    else if (origin && origin.includes(process.env.Entain_DOMAIN)) callback(null, true);
    else {
      console.log(`Origin ${ origin } is not allowed by CORS`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};
