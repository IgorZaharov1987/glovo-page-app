import './form.css';
import React, {useEffect, useState} from "react";
import ReactFlagsSelect from "react-flags-select";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import Prefix from '../prefix-list/prefix';
import useValidation from '../../hooks/formValidation';



function FormPartner() {
    const {t, i18n} = useTranslation();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [values, setValues] = useValidation();
    const [typeEstablishment, setTypeEstablishment] = useState('');
    const [numberEstablishment, setNumberEstablishment] = useState('');
    const [referral, setReferral] = useState(false);
    const [policy, setPolicy] = useState(false);

    const [phoneCode, setPhoneCode] = useState('');

    const [active, setActive] = useState(false);


    const toggleClass = () => {
        setActive(!active);
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        console.log({
            ...values, phoneCode, selectedCountry, typeEstablishment, numberEstablishment, referral, policy
        });

        return {
            ...values, phoneCode, selectedCountry, typeEstablishment, numberEstablishment, referral, policy
        }
    }


    // console.log(phoneCode);


    // useEffect(() => {
    //     console.log(phoneCode);
    // }, [phoneCode]);

    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit} id='page-form' className='main-form'>
                <div className='form-inner-div'>
                    <p className='partner-us'>{t('description.partnerWithUs')}</p>
                    <p className='partner-us-txt'>{t('description.partnerWithUsText')}</p>
                    <hr id='form-line'/>

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.country')}<span
                        className="c-yellow">*</span></p>


                    <ReactFlagsSelect
                        selected={selectedCountry}
                        onSelect={code => setSelectedCountry(code)}
                        placeholder=' '
                        className="country-selector"
                    />

                    <p id="prefix_dropdown-toggle" className=""
                       style={{padding: "0px"}}>{t('description.companyName')}<span
                        className="c-yellow">*</span></p>

                    <input type="text" style={{width: "100%"}} name="companyName" onChange={setValues} required={true} />

                    <div className="names-wrapper">
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>{t('description.firstName')}<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>{t('description.lastName')}<span
                                className="c-yellow">*</span></p></div>
                    </div>


                    <input type="text" style={{width: "50%"}} name="firstName" onChange={setValues} required={true} />
                    <input type="text" style={{width: "50%"}} name="lastName" onChange={setValues} required={true} />
                    <div><p id="" className="" style={{padding: "0px"}}>{t('description.eMail')}<span
                        className="c-yellow">*</span></p></div>
                    <input type="email" style={{width: "100%"}} name="email" required={true} />

                    <div className="phone-wrapper">
                        <div style={{width: "30%"}}>
                            <p id="prefix_dropdown-toggle" className=""
                               style={{padding: "0px"}}>{t('description.phone')}<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "70%"}}>
                            <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}></p>
                        </div>
                    </div>

                    {/*Prefix component*/}

                    <Prefix onChange={(phoneCode) => setPhoneCode(phoneCode)}/>

                    {/*Phone number*/}
                    <input type="number" style={{width: "70%"}} name="phoneNumber" onChange={setValues} required={true} />

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.estType')}<span
                        className="c-yellow">*</span></p>


                    <select onChange={(event) => setTypeEstablishment(event.target.value)} style={{width: "100%"}} required={true} >
                        <option disabled selected value></option>
                        <option value="restaurant">Restaurant</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="shop">Shop</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="becomeCourier">Do you want to become a courier?</option>
                    </select>

                    <p id="prefix_dropdown-toggle" className=""
                       style={{padding: "0px"}}>{t('description.estNumber')}<span
                        className="c-yellow">*</span></p>
                    <select onChange={(event) => setNumberEstablishment(event.target.value)} style={{width: "100%"}} required={true} >
                        <option disabled selected value></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>

                    {/*ADDING CLASS TO HIDDEN ELEMENT WHEN CHECKED*/}
                    <div className='promo-code'>
                        <span>{t('description.referral')}</span>
                        <input type="checkbox" id="have-promo-code" checked={referral}
                               onChange={() => setReferral(!referral)}
                               onClick={toggleClass}
                        />
                    </div>

                    {/*HIDDEN ELEMENT*/}
                    <div className={`${active ? 'active' : 'hidden'}`} >
                        <input type="text" name="promoCode"
                               id="promoCodeInline"
                               style={{color: "rgb(0, 160, 130)", borderColor: "rgb(0, 160, 130)"}}
                        />
                        <button type="button" className="btn-primary">Apply</button>
                        <p className="" style={{width: "50%", color: "rgb(0, 160, 130)"}}></p>
                    </div>


                    <div className='have-promo-hidden'>
                    </div>

                    <div className='accept-privacy'>
                        <input type="checkbox" id="accept-privacy-input" checked={policy}
                               onChange={() => setPolicy(!policy)} required={true} />
                        <span>{t('description.privacy')}</span>
                    </div>

                    <button type="submit" className="continue-btn">{t('description.continueBtn')}</button>

                </div>
            </form>
        </div>
    );
}

export default FormPartner;
