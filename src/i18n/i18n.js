import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from "./locales/ru.json"
import en from "./locales/en.json"


i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: ru
            },
            en: {
                translation: en
            },
        },
        fallbackLng: 'ru',
        lang: 'ru'
    });
export default i18n

