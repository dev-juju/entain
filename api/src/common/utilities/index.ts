/**
 * @packageDocumentation
 * @category Util
 */

export const isDev = process.env.NODE_ENV?.toLowerCase() == 'development';
export const isTest = process.env.NODE_ENV?.toLowerCase() == 'test';
export const isProduction = process.env.NODE_ENV?.toLowerCase() == 'production';
