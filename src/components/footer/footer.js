import './footer.css';
import { useTranslation} from "react-i18next";
import {useState} from "react";

function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer>
            <div className="wrapper" >
                <div className='footer-container' >


                    <div className='logo' >
                        <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/948ff55d-afb5-4aa5-853e-0e73b7a6300e.png" alt="Glovo logo"/>
                    </div>


                    <div className='footer-info' >
                        <div className='footer-items-navigation' >
                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >{t('workWithUs')}</p>
                                <ul>
                                    <li><a href="https://glovoapp.com/es/jobs" target="_blank">{t('careers')}</a></li>
                                    <li><a href="https://cloud.partner.glovoapp.com/partners" target="_blank">{t('storePartners')}</a></li>
                                    <li><a href="">{t('couriers')}</a></li>
                                    <li><a href="https://couriers.glovoapp.com/ke/?utm_source=partnersacqage&utm_medium=Glovo&utm_campaign=partnersfooter" target="_blank">{t('glovoBusiness')}</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >{t('help')}</p>
                                <ul>
                                    <li><a href="https://glovoapp.com/es/faq" target="_blank">{t('faq')}</a></li>
                                    <li><a href="https://www.marketinet.eu/glovo/index.html#" target="_blank">{t('contactUs')}</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >{t('legal')}</p>
                                <ul>
                                    <li><a href="https://glovoapp.com/es/legal/terms" target="_blank">{t('terms')}</a></li>
                                    <li><a href="https://glovoapp.com/es/legal/privacy" target="_blank">{t('policy')}</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >{t('followUs')}</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/glovoappES" target="_blank">{t('facebook')}</a></li>
                                    <li><a href="https://twitter.com/Glovo_ES" target="_blank">{t('twitter')}</a></li>
                                    <li><a href="https://www.instagram.com/glovo_es/" target="_blank">{t('instagram')}</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='items-download-app' >
                            <div className='download-ios' >
                                <a href="https://apps.apple.com/app/id951812684?mt=8">
                                    <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/592b9b4e-8d41-4b13-a10a-362f9100a862.png" alt=""/>
                                </a>
                            </div>
                            <div className='download-android' >
                                <a href="https://play.google.com/store/apps/details?id=com.glovo&referrer=adjust_reftag%3Dc4TCWIbVubCPx%26utm_source%3DHomepage%2B-%2BAndroid">
                                    <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/1427ca14-b71a-410f-a1b6-b3625f484e72.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;