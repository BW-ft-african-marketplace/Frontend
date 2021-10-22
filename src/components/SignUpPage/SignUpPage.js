import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import * as yup from 'yup';

import schema from "../../validation/SignUpSchema";

const initialFormValues = {
    username: "",
    password: "",
    market_name: "",
    tos: false,
}

const initialFormErrors = {
    username: "",
    password: "",
    market_name: "",
    tos: ""
}

const initialDisabled = false;
const initialCreateError = "";

const SignupPage = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [createError, setCreateError] = useState(initialCreateError);
    
    const history = useHistory();
    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ""}))
            .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}));

    };

    const handleChanges = (e) => {
        const {name, value, checked, type} = e.target;
        const valueToUse = type === "checkbox" ? checked : value;
        validate(name, valueToUse);
        setFormValues({
            ...formValues,
            [name]: valueToUse
        })
    };
   

    const submit = (e) => {
        e.preventDefault();
        console.log(formValues);

        axios.post('https://web46unit4buildweek.herokuapp.com/api/auth/register', formValues)
            .then( (res) => {
                history.push('/login');
            })
            .catch( (err) => {
                setCreateError(err.response.data.message);
            })
    };

    useEffect(() => {
        schema.isValid(formValues)
        .then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    return (
        <div className="signup">
            
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
                    <button className="signup-button" disabled={disabled}>Create Account!</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;
