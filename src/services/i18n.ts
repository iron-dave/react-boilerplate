import { store } from "redux/store";
import { merge } from "lodash";
import {
  setLocale as i18nSetLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import { setLocale } from "redux/features/settings/settingsSlice";

/**
 * Translate to language
 * @example setLanguage("en")
 * @export
 * @param {string} language Language to translate into
 */
export function setLanguage(language: string): void {
  store.dispatch(setLocale(language));
  store.dispatch(i18nSetLocale(language));
}

/**
 * Initialize translations
 * @example loadLanguage("demo")
 * @export
 * @param {string} skin Name of the skin
 */
export function loadLanguage(skin: string): void {
  import(`assets/i18n/translations.json`)
    .then((globalTranslation) => {
      import(`skins/${skin}/assets/i18n/translations.json`)
        .then((skinTranslation) => {
          const translation = merge(
            globalTranslation.default,
            skinTranslation.default
          );
          syncTranslationWithStore(store);
          store.dispatch(loadTranslations(translation));
        })
        .catch((error: Error) => {
          throw new Error(error.message);
        });
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}

export default setLanguage;
