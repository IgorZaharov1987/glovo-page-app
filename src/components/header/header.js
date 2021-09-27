import './header.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FormPartner from "../form-partner/formPartner";



function Header() {
    return (
      <div className='main-header' >
        <header className='header' >
            <div className='lang-container' >
                <div className='lang-selector' >
                    {/*<NativeSelect id="select">*/}
                    {/*    <option value="esp">Español</option>*/}
                    {/*    <option value="eng">English</option>*/}
                    {/*    <option value="cat">Català</option>*/}
                    {/*    <option value="fr">Français</option>*/}
                    {/*    <option value="hrv">Hrvatski</option>*/}
                    {/*    <option value="it">Italiano</option>*/}
                    {/*    <option value="Ენა">ქართული</option>*/}
                    {/*    <option value="pol">Polski</option>*/}
                    {/*    <option value="port">Português</option>*/}
                    {/*    <option value="rom">Română</option>*/}
                    {/*    <option value="ru">Русский</option>*/}
                    {/*    <option value="srp">Srpski</option>*/}
                    {/*    <option value="ukr">Українська</option>*/}
                    {/*</NativeSelect>*/}
                    <select name="lang-select" id="langSelect">
                        <option className='option' >Español</option>
                        <option className='option'>English</option>
                        <option className='option'>Català</option>
                        <option className='option'>Français</option>
                        <option className='option'>Hrvatski</option>
                        <option className='option'>Italiano</option>
                        <option className='option'>ქართული</option>
                        <option className='option'>Polski</option>
                        <option className='option'>Português</option>
                        <option className='option'>Română</option>
                        <option className='option'>Русский</option>
                        <option className='option'>Srpski</option>
                        <option className='option'>Українська</option>
                    </select>
                </div>
            </div>

            <div className='title-container' >
                <h1 className='title' >Join Glovo!</h1>
            </div>

            <div className='header-content-wrapper' >
                <div className='text-part-wrapper' >
                    <div className="text-part-inline" >
                        <p className='paragraph-one'>Register your business in Glovo!</p>
                        <p className='paragraph-two'>Increase your sales up to 40%</p>
                        <p className='paragraph-three'>Customers are ordering online now more than ever - be where they are</p>
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