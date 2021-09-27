import './footer.css';

function Footer() {
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
                                <p className='footer-nav-item-title' >WORK WITH US</p>
                                <ul>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Store partners</a></li>
                                    <li><a href="">Couriers</a></li>
                                    <li><a href="">Glovo Business</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >HELP</p>
                                <ul>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Contact US</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >LEGAL</p>
                                <ul>
                                    <li><a href="">Terms and conditions</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className='footer-nav-item' >
                                <p className='footer-nav-item-title' >FOLLOW US</p>
                                <ul>
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">Twitter</a></li>
                                    <li><a href="">Instagram</a></li>
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