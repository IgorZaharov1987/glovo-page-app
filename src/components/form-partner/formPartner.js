import './form.css';
import React, { useState, Component } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap-floating-label';

import ReactFlagsSelect from 'react-flags-select';
import {useTranslation} from "react-i18next";



function FormPartner() {
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState('');


    return (
        <div className='form-wrapper'>
            <form action="" method='post' id='page-form' className='main-form'>
                <div className='form-inner-div' >
                    <p className='partner-us'>{t('description.partnerWithUs')}</p>
                    <p className='partner-us-txt'>{t('description.partnerWithUsText')}</p>
                    <hr id='form-line'/>



                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={code => setSelected(code)}
                    />


                    <br/>
                    {/*<p>Business Name</p>*/}
                    <Form.Control type="text" placeholder={t('description.companyName')} />
                    <br/>
                    {/*<Form.Control type="text" placeholder="Name" className='mb-3'/>*/}
                    {/*<Form.Control type="text" placeholder="Last name" className='mb-3'/>*/}

                    <Row>
                        <Col>
                            <Form.Control placeholder={t('description.firstName')} />
                        </Col>
                        <Col>
                            <Form.Control placeholder={t('description.lastName')} />
                        </Col>
                    </Row>

                    <br/>


                    <Form.Control type="text" placeholder={t('description.eMail')} />

                    <br/>


                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputPrefix" label={t('description.prefix')}>
                                <Form.Control type="phone" placeholder="" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectPhone" label={t('description.phone')}>
                                <Form.Control as='select' aria-label="Floating label select example" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <br/>


                    <FloatingLabel controlId="floatingSelectEstablishment" label={t('description.estType')}>
                        <Form.Control as='select' aria-label="Floating label" />
                    </FloatingLabel>

                    <br/>

                    <p>{t('description.estNumber')}</p>
                    <Form.Control as='select' aria-label={t('description.estNumber')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </Form.Control>

                    <br/>


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
                    {/*TODO*/}

                    <button type="button" className="continue-btn">{t('description.continueBtn')}</button>

                    {/*<Form.Control as="select" aria-label="Default phone">*/}
                    {/*    <option value="None"></option>*/}
                    {/*    <option value="1">Phone-One</option>*/}
                    {/*    <option value="2">Phone-Two</option>*/}
                    {/*    <option value="3">Phone-Three</option>*/}
                    {/*</Form.Control>*/}


                    {/*<div className="dropdown">*/}
                    {/*    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"*/}
                    {/*            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">*/}
                    {/*        Dropdown button*/}
                    {/*    </button>*/}
                    {/*    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
                    {/*        <a className="dropdown-item" href="#">Action</a>*/}
                    {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                    {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<Form.Control as="select" aria-label="Default select example">*/}
                    {/*    <option>Open this select menu</option>*/}
                    {/*    <option value="1">*/}
                    {/*        <img src={require("../../iconsSVG/ad.svg")} alt=""/>*/}
                    {/*    </option>*/}
                    {/*    <option value="2">Two</option>*/}
                    {/*    <option value="3">Three</option>*/}
                    {/*</Form.Control>*/}

                        {/*<div className='dropdown'>*/}
                        {/*    <ul id="country-select" className='dropdown-menu' role='menu' aria-labelledby='dLabel'>*/}
                        {/*        /!*<li value="empty"></li>*!/*/}
                        {/*        <li value="ad">*/}
                        {/*            <div className='displayFlex'> <AndorraIconComponent />  Andorra </div>*/}
                        {/*        </li>*/}
                        {/*        <li value="ad">*/}
                        {/*            <div className='displayFlex'> <AndorraIconComponent />  Andorra </div>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}



                        {/*<option value="arm">Armenia</option>*/}
                        {/*<option value="bel">Belarus</option>*/}
                        {/*<option value="bos">Bosnia and Herzegovina</option>*/}
                        {/*<option value="bul">Bulgaria</option>*/}
                        {/*<option value="cro">Croatia</option>*/}
                        {/*<option value="geo">Georgia</option>*/}
                        {/*<option value="gha">Ghana</option>*/}
                        {/*<option value="ita">Italy</option>*/}
                        {/*<option value="ivo">Ivory Coast</option>*/}
                        {/*<option value="kaz">Kazakhstan</option>*/}
                        {/*<option value="ken">Kenya</option>*/}
                        {/*<option value="kyr">Kyrgyzstan</option>*/}
                        {/*<option value="mol">Moldova</option>*/}
                        {/*<option value="mon">Montenegro</option>*/}
                        {/*<option value="mor">Morocco</option>*/}
                        {/*<option value="nig">Nigeria</option>*/}
                        {/*<option value="pol">Poland</option>*/}
                        {/*<option value="por">Portugal</option>*/}
                        {/*<option value="rom">Romania</option>*/}
                        {/*<option value="ser">Serbia</option>*/}
                        {/*<option value="slo">Slovenia</option>*/}
                        {/*<option value="spa">Spain</option>*/}
                        {/*<option value="tun">Tunisia</option>*/}
                        {/*<option value="uga">Uganda</option>*/}
                        {/*<option value="ukr">Ukraine</option>*/}


                    {/*<CountrySelector />*/}
                </div>
            </form>
        </div>
    );
}

export default FormPartner;
