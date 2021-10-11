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
                        comment1: 'Glovo is a cool app for both customers and partners. It enables us to reach more customers and spread our brand across the city very fast.',
                        author1: 'Ion Dumitru - Owner',
                        comment2: 'Glovo is part of the app revolution and has changed the market! It\'s our closest ally as we have a common goal, and that\'s making sure our clients keep coming back.',
                        author2: 'Julio Gauna - Managing partner',
                        comment3: 'Glovo has proven a great option. Technologically compliant with our solution for processing orders.',
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
                        instagram: 'Instagram',
                        partnerWithUs: 'Partner with us',
                        partnerWithUsText: 'We need more information about your business to assess the partnership possibilities',
                        companyName: 'Company name',
                        firstName: 'First name',
                        lastName: 'Last name',
                        eMail: 'E-mail',
                        prefix: 'Phone number prefix',
                        phone: 'Phone number',
                        estType: 'Type of establishment',
                        estNumber: 'Number of establishments',
                        referral: 'Do you have a Referral or Promotional Code?',
                        privacy: 'I accept the privacy policy',
                        continueBtn: 'Continue'
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
                        main0: 'BENEFICIILE LUCRĂRII CU GLOVO:',
                        main1: 'Monitorizați comenzile dvs. de la pregătire până la livrare',
                        main2: 'Dezvoltați-vă marca, datorită bazei noastre de date de milioane de utilizatori.',
                        main3: 'Îmbunătățiți-vă vânzările și creșteți profiturile',
                        main4: 'Livrați comenzile rapid și ușor: în termen de 30 de minute, în fiecare zi a anului, 24 de ore pe zi.',
                        comment1: 'Glovo este o aplicație interesantă atât pentru clienți, cât și pentru parteneri. Ne permite să ajungem la mai mulți clienți și răspândiți marca noastră în oraș foarte repede.',
                        author1: 'Ion Dumitru - Proprietar',
                        comment2: 'Glovo face parte din revoluția aplicațiilor și a schimbat piața! Este cel mai apropiat aliat al nostru, așa cum avem un obiectiv comun și asta ne asigură că clienții noștri revin în continuare.',
                        author2: 'Julio Gauna - Partener executiv',
                        comment3: 'Glovo s-a dovedit o opțiune excelentă. Conform tehnologic cu soluția noastră de procesare Comenzi.',
                        author3: 'Vladimir Neskovic, cofondator al Loha Hawaiian Food',
                        workWithUs: 'LUCREAZA CU NOI',
                        careers: 'Cariere',
                        storePartners: 'Parteneri de magazin',
                        couriers: 'Curierii',
                        glovoBusiness: 'Glovo Business',
                        help: 'AJUTOR',
                        faq: 'FAQ',
                        contactUs: 'Contactează-ne',
                        legal: 'LEGAL',
                        terms: 'Termeni si conditii',
                        policy: 'Politica de confidențialitate',
                        followUs: 'URMEAZĂ-NE',
                        facebook: 'Facebook',
                        twitter: 'Twitter',
                        instagram: 'Instagram',
                        partnerWithUs: 'Partener cu noi',
                        partnerWithUsText: 'Avem nevoie de mai multe informații despre afacerea dvs. pentru a evalua posibilitățile de parteneriat',
                        companyName: 'Numele Companiei',
                        firstName: 'Nume',
                        lastName: 'Nume',
                        eMail: 'E-mail',
                        prefix: 'Prefixul numărului de telefon',
                        phone: 'Număr de telefon',
                        estType: 'Tipul de unitate',
                        estNumber: 'Numărul de unități',
                        referral: 'Aveți un Cod de recomandare sau de promovare?',
                        privacy: 'Accept politica de confidențialitate',
                        continueBtn: 'Continuare'
                    }
                }
            },
        }
    });

export default i18n;