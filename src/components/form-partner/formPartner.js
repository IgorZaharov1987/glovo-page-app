import './form.css';
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {useTranslation} from "react-i18next";
import { useForm } from "react-hook-form";
import Prefix from '../prefix-list/prefix';



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

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.country')}<span
                        className="c-yellow">*</span></p>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={code => setSelected(code)}
                        placeholder=' '
                        className="country-selector"
                        {...register("countryFlag")}
                    />

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.companyName')}<span
                        className="c-yellow">*</span></p>
                    <input type="text" style={{width: "100%"}} {...register("businessName", { required: true})}/>

                    <div className="names-wrapper">
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>{t('description.firstName')}<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "50%"}}>
                            <p id="" className="" style={{padding: "0px"}}>{t('description.lastName')}<span
                                className="c-yellow">*</span></p></div>
                    </div>


                    <input type="text" style={{width: "50%"}} {...register("firstName", { required: true})}/>
                    <input type="text" style={{width: "50%"}} {...register("lastName", { required: true})} />
                    <div><p id="" className="" style={{padding: "0px"}}>{t('description.eMail')}<span
                        className="c-yellow">*</span></p></div>
                    <input type="text" style={{width: "100%"}} {...register("userEmail", { required: true})}/>

                    <div className="phone-wrapper">
                        <div style={{width: "30%"}}>
                            <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.phone')}<span
                                className="c-yellow">*</span></p></div>
                        <div style={{width: "70%"}}>
                            <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}></p></div>
                    </div>

                    {/*Prefix component*/}

                    <Prefix {...register("numberPrefix")} />

                    {/*Phone number*/}
                    <input type="number" style={{width: "70%"}} {...register("phoneNumber", { required: true})} />

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.estType')}<span
                        className="c-yellow">*</span></p>
                    <select {...register("typeOfEstablishment")} style={{width: "100%"}}>
                        <option disabled selected value></option>
                        <option value="restaurant">Restaurant</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="shop">Shop</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="becomeCourier">Do you want to become a courier?</option>
                    </select>

                    <p id="prefix_dropdown-toggle" className="" style={{padding: "0px"}}>{t('description.estNumber')}<span
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

                    <button type="submit" className="continue-btn">{t('description.continueBtn')}</button>

                    </div>
            </form>
        </div>
    );
}

export default FormPartner;
