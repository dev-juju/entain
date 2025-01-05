/**
 * @packageDocumentation
 * @category Util
 */

export enum SupportedLanguageEnum {
  english = 'english',
  estonian = 'estonian',
  russian = 'russian'
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getLanguageFromLocale
 *--------------------------------------------------------------------------------------------------------------------------
 *
*/
export function getLanguageFromLocale(locale?: string): LanguageKey {
  if (!locale || typeof locale != 'string') return 'english';

  const allLocales = locale.split(',');
  let language;

  for (let i = 0, len = allLocales.length; i < len; i++) {
    language = getLanguage(allLocales[i].split(';')[0]);
    if (language) return language;
  }

  return 'english';

  function getLanguage(localeKey: string): LanguageKey {
    switch (localeKey) {
      case 'en':
      case 'en-US': return 'english';
      case 'ru':
      case 'ru_RU': return 'russian';
      case 'et':
      case 'et-EE': return 'estonian';

      default: return 'english';
    }
  }
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getLanguageName
 *--------------------------------------------------------------------------------------------------------------------------
 *
*/
export function getLanguageName(language: LanguageKey) {
  switch (language) {
    case 'english': return 'English';
    case 'estonian': return 'Eesti';
    case 'russian': return 'Русский';
  }
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getLanguageLocale
 *--------------------------------------------------------------------------------------------------------------------------
 *
*/
export function getLanguageLocale(language: LanguageKey): LanguageCode {
  switch (language) {
    case 'english': return 'en-US';
    case 'estonian': return 'et-EE';
    case 'russian': return 'ru-RU';
    default: return 'en-US';
  }
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getLanguageCode
 *--------------------------------------------------------------------------------------------------------------------------
 *
*/
export function getLanguageCode(language: LanguageKey) {
  switch (language) {
    case 'english': return 'en';
    case 'estonian': return 'et';
    case 'russian': return 'ru';
  }
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getLanguageLogo
 *--------------------------------------------------------------------------------------------------------------------------
 *
*/
export function getLanguageLogo(language: LanguageKey) {
  switch (language) {
    case 'english': return '🇺🇸';
    case 'estonian': return '🇪🇪';
    case 'russian': return '🇷🇺';
  }
}
