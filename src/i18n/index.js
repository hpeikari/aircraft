import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

export const loadNamespaces = namespaces =>
  i18n.loadNamespaces(namespaces).catch(err => {
    console.log(
      `An error occurred during loading ${namespaces.join(', ')} namespace${namespaces.length > 1 ? 's' : ''}: `,
      err
    );
  });

export const getT = namespace => i18n.getFixedT(i18n.language, namespace);

const currentDomain = `${window.location.origin}${(window.appConfig || {}).URL_ROOT || ''}`;

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
      wait: true
    },
    detection: {
      order: ['navigator'],
      lookupFromPathIndex: 0
    },
    ns: ['common'],
    defaultNS: ['common'],
    fallbackLng: 'en-US',
    load: 'currentOnly',
    wait: true,
    backend: {
      loadPath: `${currentDomain}/locales/{{lng}}/{{ns}}.json`
    },
    interpolation: {
      escape: str => str
    }
  });

loadNamespaces(['common']);

export default i18n;
