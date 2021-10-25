import React, {useState} from 'react';
import { useEffect } from "react";
import classes from './scroll.module.css';
import { Link } from 'react-scroll';
import {useTranslation} from "react-i18next";

const Scroll = () => {
    const { t, i18n } = useTranslation();
    const [active, setActive] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);

    const scrollCheck = () => {
        if (window.pageYOffset >= 100) {
            setActive(true);
        } else {
            setActive(false);
        }
    };


    const scrollCheckButton = () => {
        if (window.pageYOffset >= 800) {
            setActiveBtn(true);
        } else {
            setActiveBtn(false);
        }
    };



    useEffect(() => {
        window.addEventListener('scroll', scrollCheck);

        return () => {
            window.removeEventListener('scroll', scrollCheck);
        };
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', scrollCheckButton);

        return () => {
            window.removeEventListener('scroll', scrollCheckButton);
        };
    }, []);

    return (
        <div className={ active ? classes.wrapper : '' } style={{display: active ? '' : "none", height: activeBtn ? "80px": "60px"}} >
            <div className={classes.container}>
                <div>
                    <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/75c8e49e-9856-413b-affb-06e17e05b928.png" alt="logo"/>
                </div>
                <Link to={'main-header'} spy={true} smooth={true} style={{display: activeBtn ? "block" : "none"}} >
                    <button className={classes.headerButton}>
                        {t('description.partnerWithUsLink')}
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Scroll;