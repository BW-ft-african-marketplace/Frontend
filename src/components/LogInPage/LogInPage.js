import React , { useState } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router';

import LogInSchema from '../../validation/LogInSchema';

//INITIAL VALUES LOCATION
const initialValue = {
    username: "",
    password: "",
}

const initialErrors = {
    username: "",
    password: "",
    empty: ""
}

const LogInPage = (props) => {
    const [ formValues, setFormValues ] = useState(initialValue);
    const [ errorsValues, setErrorsValues ] = useState(initialErrors);
    const history = useHistory();

    const validate = (name, value) => {
        yup
            .reach(LogInSchema, name)
            .validate(value)
            .then(() => setErrorsValues({ ...errorsValues, [name]: ""}))
            .catch((err) => setErrorsValues({...errorsValues, [name]: err.errors[0]}))
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        validate(name, value);
        setFormValues({...formValues, [name]: value});
    }
    const submit = (e) => {
        e.preventDefault();

        if (formValues.username === "" || formValues.password === ""){
            setErrorsValues({...errorsValues, empty: "Please Fill In All Field"});
        } else {
            console.log(formValues);
        }
        
    }

    return(
        <div className="login">
            <div className="form">
                <form onSubmit={submit}>
                    <label htmlFor="username"> Username </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                    <p className="warning">{errorsValues.username}</p>
                    <label htmlFor="password"> Password </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p className="warning">{errorsValues.password}</p>
                    <button id="submit-button">Log In</button>
                </form>
                {
                    errorsValues.empty ? <p id="error">{errorsValues.empty}</p> :  <p id="error" />
                }
            </div>
        </div>
    )
};

export default LogInPage;