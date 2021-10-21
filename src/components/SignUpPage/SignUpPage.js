import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import * as yup from 'yup';
import './SignUpPage.css'

import SignUpSchema from "../../validation/SignUpSchema";

const initialFormValues = {
    username: "",
    password: "",
    market_name: "",
    tos: false
}

const initialFormErrors = {
    username: "",
    password: "",
    market_name: "",
    tos: ""
}

const initialDisable = true;
const initialCreateError = "";

const SignupPage = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisable);
    const [createError, setCreateError] = useState(initialCreateError);
    
    const history = useHistory();
    const validate = (name, value) => {
        yup
            .reach(SignupPage, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ""}))
            .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}));

    };
    const handleChanges = (e) => {
        const {name, value, checked, type} = e.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        validate(name, valueToUse);
        setFormValues({
            ...formValues,
            [name]: value
        })
    };
    const submit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    useEffect(() => {
        SignUpSchema.isValid(formValues)
        .then((valid) => setDisabled(valid));
    }, [formValues]);

    return (
        <div className='parentContainer'>
        <div className='sideImage'>
        </div>
        <div className="signup">
            <button className = 'backButton' onClick = { () => history.push('/home')}> Back </button>
            
            <div className="form">
                <h1>Create New Account</h1>
                {createError && <p className="warning">{createError}</p>}

                <form onSubmit={submit}>
                    <label htmlFor="username"> Username </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChanges}
                    />
                    <p className="warning">{formErrors.username}</p>
                    <label htmlFor="market_name"> Market Name </label>
                    <input 
                        id="market_name"
                        type="text"
                        name="market_name"
                        value={formValues.market_name}
                        onChange={handleChanges}
                    />
                    <p className="warning">{formErrors.market_name}</p>
                    <label htmlFor="password"> Password </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChanges}
                    />
                    <p className="warning">{formErrors.password}</p>
                    <label htmlFor="tos"> Terms of Service </label>
                    <input
                        id="tos"
                        type="checkbox"
                        name="tos"
                        value={formValues.tos}
                        onChange={handleChanges}
                    />
                    <p className="warning">{formErrors.tos}</p>
                    <button className="signup-button" disabled={disabled}> Create Account! </button>
                </form>
            </div>
        </div>
        
        </div>
    )
}

export default SignupPage;
