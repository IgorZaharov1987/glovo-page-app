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
                        part3: 'Customers are ordering online now more than ever - be where they are',
                        main0: 'BENEFITS OF WORKING WITH GLOVO:',
                        main1: 'Monitor your orders from preparation to delivery',
                        main2: 'Grow your brand, thanks to our database of millions of users.',
                        main3: 'Improve your sales and increase profits',
                        main4: 'Deliver your orders quickly and easily: within 30 minutes, every day of the year, 24 hours a day.',
                        comment1: 'Glovo is a cool app for both customers and partners. It enables us to reach more customers and\n' +
                            'spread our brand across the city very fast.',
                        author1: 'Ion Dumitru - Owner',
                        comment2: 'Glovo is part of the app revolution and has changed the market! It\'s our closest ally as we have\n' +
                            'a common goal, and that\'s making sure our clients keep coming back.',
                        author2: 'Julio Gauna - Managing partner',
                        comment3: 'Glovo has proven a great option. Technologically compliant with our solution for processing\n' +
                            'orders.',
                        author3: 'Vladimir Neskovic, Co-founder of Loha Hawaiian Food',
                        workWithUs: 'WORK WITH US',
                        careers: 'Careers',
                        storePartners: 'Store partners',
                        couriers: 'Couriers',
                        glovoBusiness: 'Glovo Business',
                        help: 'HELP',
                        faq: 'FAQ',
                        contactUs: 'Contact US',
                        legal: 'LEGAL',
                        terms: 'Terms and conditions',
                        policy: 'Privacy Policy',
                        followUs: 'FOLLOW US',
                        facebook: 'Facebook',
                        twitter: 'Twitter',
                        instagram: 'Instagram'
                    }
                }
            },
            ro: {
                translation: {
                    description: {
                        part0: 'Alătură-te lui Glovo!',
                        part1: 'Înregistrează-ți afacerea în Glovo!',
                        part2: 'Creșteți-vă vânzările cu până la 40%',
                        part3: 'Clienții fac comenzi online acum mai mult ca oricând - fie acolo unde sunt',
                        main0: '11',
                        main1: '11',
                        main2: '222',
                        main3: '2',
                        main4: '22',
                        comment1: '111',
                        author1: '11',
                        comment2: '111',
                        author2: '111',
                        comment3: '111',
                        author3: '111'
                    }
                }
            },
        }
    });

export default i18n;