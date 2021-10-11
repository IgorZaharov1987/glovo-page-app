import './header.css';
import React, {useContext} from 'react';
import FormPartner from "../form-partner/formPartner";
import { useTranslation } from 'react-i18next';
import {Store} from '../../App';


function Header() {
    const { t, i18n } = useTranslation();
    const  {setLang} = useContext(Store);

    const langChanger = (event) => {
        const value = event.currentTarget.value;
        i18n.changeLanguage(value, () => {
        }). then(r => setLang(value));

    }


    return (
      <div className='main-header'>
        <header className='header'>
            <div className='lang-container'>
                <div className='lang-selector'>
                    <select name="lang-select" id="langSelect" onChange={langChanger}>
                        <option className='option' value='en'>English</option>
                        <option className='option' value='ro'>Romanian</option>
                    </select>
                </div>
            </div>

            <div className='title-container'>
                <h1 className='title' >{t('description.part0')}</h1>
            </div>

            <div className='header-content-wrapper'>
                <div className='text-part-wrapper'>
                    <div className="text-part-inline">
                        <p className='paragraph-one'>{t('description.part1')}</p>
                        <p className='paragraph-two'>{t('description.part2')}</p>
                        <p className='paragraph-three'>{t('description.part3')}</p>
                    </div>
                </div>


                <div className='form-part' >
                    <FormPartner />
                </div>
            </div>
        </header>
      </div>
    );
};

export default Header;