import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './slider.css';
import {useTranslation} from "react-i18next";

function Slider() {
    const { t, i18n } = useTranslation();

    return (
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/f10f5548-07fa-4aa6-bf8d-50572266c931.png"
                    alt="" width={500} height={470}/>
                <div className='inner-text'>
                    <p>
                        {t('comment1')}
                    </p>

                    <p>
                        {t('author1')}
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/496b3394-e954-4f07-8aa6-bbda95d71e93.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        {t('comment2')}
                    </p>

                    <p>
                        {t('author2')}
                    </p>

                </div>
            </div>

            <div className='item'>
                <img
                    src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/e5acba5a-62ae-4651-81d5-7279a0a03660.png"
                    alt="" width={500} height={470}/>

                <div className='inner-text'>
                    <p>
                        {t('comment3')}
                    </p>

                    <p>
                        {t('author3')}
                    </p>

                </div>
            </div>

        {/*TODO duplicates start, need to work on it*/}

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
