import React from 'react';

import {FormControl} from "@mui/material";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        fontFamily: "'Montserrat', sans-serif",
        color: "black",
        backgroundColor:'white',
    },
    '& label': {
        color:'#C9CBCF',
        fontFamily: "'Montserrat', sans-serif",

    },
    '& label.Mui-focused': {
        color: 'rgba(161, 0, 255, 0.5)',
        fontFamily: "'Montserrat', sans-serif",
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(161, 0, 255, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(161, 0, 255, 0.5)',
        },
    },
});

const Login = ({onSetStep}) => {
    const startQuestionsHandler = (e) => {
        onSetStep(3);
    }

    const [values, setValues] = React.useState({
        email:'',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="fancy">Login</h1>
                    <div className="content-box">

                        <form className="box">
                            <div className="field">
                                <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
                                    <CssTextField
                                        label="Email"
                                        id="outlined-basic"
                                        autoComplete="off"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                                </FormControl>
                            </div>

                            <div className="field">
                                <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
                                    <CssTextField
                                        label="Password"
                                        id="outlined-password-input"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        autoComplete="off"
                                    />
                                </FormControl>
                            </div>
                        </form>
                    </div>
                    <button className="btn" onClick={startQuestionsHandler}>Start Survey</button>
                </div>
            </div>
        </div>
    );
}

export default Login;