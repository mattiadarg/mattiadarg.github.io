import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './eng.json';
import it from './ita.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        it: {
            translation: it,
        },
    },
    lng: 'en', // Lingua predefinita
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React gestisce già la sicurezza
    },
});

export default i18n;
