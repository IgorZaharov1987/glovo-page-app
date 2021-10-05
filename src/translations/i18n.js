import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part0: 'Join Glovo!',
                        part1: 'Register your business in Glovo!',
                        part2: 'Increase your sales up to 40%',
                        part3: 'Customers are ordering online now more than ever - be where they are'
                    }
                }
            },
            ro: {
                translation: {
                    description: {
                        part0: 'Alătură-te lui Glovo!',
                        part1: 'Înregistrează-ți afacerea în Glovo!',
                        part2: 'Creșteți-vă vânzările cu până la 40%',
                        part3: 'Clienții fac comenzi online acum mai mult ca oricând - fie acolo unde sunt'
                    }
                }
            },
        }
    });

export default i18n;