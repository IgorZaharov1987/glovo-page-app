import './form.css';
import React, { useState, Component } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap-floating-label';

import ReactFlagsSelect from 'react-flags-select';
import {useTranslation} from "react-i18next";
import { useForm } from "react-hook-form";



function FormPartner() {
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));


    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} id='page-form' className='main-form'>
                <div className='form-inner-div' >
                    <p className='partner-us'>{t('description.partnerWithUs')}</p>
                    <p className='partner-us-txt'>{t('description.partnerWithUsText')}</p>
                    <hr id='form-line'/>

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Country <span
                        className="c-yellow">*</span></p>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={code => setSelected(code)}
                        placeholder=' '
                        className="country-selector"
                    />

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Business Name <span
                        className="c-yellow">*</span></p>
                    <input type="text" placeholder={t('description.companyName')} style={{width: "100%"}}/>

                    <div className="names-wrapper">
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>Name<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>Surname<span
                                className="c-yellow">*</span></p></div>
                    </div>


                    <input type="text" placeholder={t('description.firstName')} style={{width: "50%"}}/>
                    <input type="text" placeholder={t('description.lastName')} style={{width: "50%"}}/>
                    <div><p id="" className="" style={{padding: "0px"}}>E-mail<span
                        className="c-yellow">*</span></p></div>
                    <input type="text" placeholder={t('description.eMail')} style={{width: "100%"}}/>

                    <div className="phone-wrapper">
                        <div style={{width: "30%"}}>
                            <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Prefix<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "70%"}}>
                            <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Phone number<span
                                className="c-yellow">*</span></p></div>
                    </div>

                    <input type="number" placeholder={t('description.prefix')} style={{width: "30%"}}/>
                    <input type="number" placeholder={t('description.phone')} style={{width: "70%"}}/>

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Type of establishment<span
                        className="c-yellow">*</span></p>
                    <select {...register("typeOfEstablishment")} style={{width: "100%"}}>
                        <option disabled selected value></option>
                        <option value="restaurant">Restaurant</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="shop">Shop</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="becomeCourier">Do you want to become a courier?</option>
                    </select>

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>Number of establishments<span
                        className="c-yellow">*</span></p>
                    <select {...register("numberOfEstablishments")} style={{width: "100%"}}>
                        <option disabled selected value></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>

                    <div className='promo-code'>
                        <span>{t('description.referral')}</span>
                        <input type="checkbox" id="have-promo-code" />
                    </div>

                    <div className='have-promo-hidden' >
                    </div>

                    <div className='accept-privacy'>
                        <input type="checkbox" id="accept-privacy-input"/>
                        <span>{t('description.privacy')}</span>
                    </div>

                    <button type="button" className="continue-btn">{t('description.continueBtn')}</button>

                    </div>
            </form>
        </div>
    );
}

export default FormPartner;
