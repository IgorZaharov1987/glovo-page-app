import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './slider.css';

function Slider() {
    return (
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/f10f5548-07fa-4aa6-bf8d-50572266c931.png"
                    alt="" width={500} height={470}/>
                <div className='inner-text'>
                    <p>
                        Glovo is a cool app for both customers and partners. It enables us to reach more customers and
                        spread our brand across the city very fast.
                    </p>

                    <p>
                        Ion Dumitru - Owner
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/496b3394-e954-4f07-8aa6-bbda95d71e93.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        Glovo is part of the app revolution and has changed the market! It's our closest ally as we have
                        a common goal, and that's making sure our clients keep coming back.
                    </p>

                    <p>
                        Julio Gauna - Managing partner
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/e5acba5a-62ae-4651-81d5-7279a0a03660.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        Glovo has proven a great option. Technologically compliant with our solution for processing
                        orders.
                    </p>

                    <p>
                        Vladimir Neskovic, Co-founder of Loha Hawaiian Food
                    </p>

                </div>
            </div>

        {/*TODO duplicates start, need to work on it*/}
            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/f10f5548-07fa-4aa6-bf8d-50572266c931.png"
                    alt="" width={500} height={470}/>
                <div className='inner-text'>
                    <p>
                        Glovo is a cool app for both customers and partners. It enables us to reach more customers and
                        spread our brand across the city very fast.
                    </p>

                    <p>
                        Ion Dumitru - Owner
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/496b3394-e954-4f07-8aa6-bbda95d71e93.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        Glovo is part of the app revolution and has changed the market! It's our closest ally as we have
                        a common goal, and that's making sure our clients keep coming back.
                    </p>

                    <p>
                        Julio Gauna - Managing partner
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/e5acba5a-62ae-4651-81d5-7279a0a03660.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        Glovo has proven a great option. Technologically compliant with our solution for processing
                        orders.
                    </p>

                    <p>
                        Vladimir Neskovic, Co-founder of Loha Hawaiian Food
                    </p>

                </div>
            </div>

        {/*TODO duplicates end here, need to work on it*/}
        </OwlCarousel>


        // <OwlCarousel className='owl-theme' loop margin={10} nav>
        //     <div class='item'>
        //         <h4>1</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>2</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>3</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>4</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>5</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>6</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>7</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>8</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>9</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>10</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>11</h4>
        //     </div>
        //     <div class='item'>
        //         <h4>12</h4>
        //     </div>
        // </OwlCarousel>
    );
}


export default Slider;
