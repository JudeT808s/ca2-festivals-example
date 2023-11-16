import axios from 'axios';
import { useState } from 'react';

const LoginForm = ({authenticated, onAuthenticated}) => {

    const errorStyle = {
        color: 'red'
    }

    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({
        email: "n00212272@iadt.ie",
        password: "Secret123"
    });

    const handleClick = () => {
        console.log("clicked");

        axios.post('https://festivals-api.vercel.app/api/users/login', {
            email: form.email,
            password: form.password
        })
        .then(response =>{
            console.log(response.data);
            onAuthenticated(true, response.data.token)
        })
        .catch(err => {
            console.error(err)
            setErrorMessage(err.response.data.message)

        })
    };

    const handleForm = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));
    };

    return (
        <>
            Email: <input onChange={handleForm} type="text" name="email" value={form.email} /> <br />
            Password: <input onChange={handleForm} type="password" name="password" value={form.password} />

            <button onClick={handleClick}>Submit</button>
            <p style={errorStyle}>{errorMessage}</p>
        </>
    );
};

export default LoginForm;