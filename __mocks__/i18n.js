import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false
    },
    lng: 'en-US',
    whitelist: ['en-US'],
    ns: ['common'],
    defaultNS: ['common'],
    fallbackLng: false,
    load: 'currentOnly'
  });

export default i18n;
