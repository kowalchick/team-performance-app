import React from 'react';

import {FormControl} from "@mui/material";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        fontFamily: "'Montserrat', sans-serif",
    },
    '& label': {
        color:'#C9CBCF',
        fontFamily: "'Montserrat', sans-serif",
    },
    '& label.Mui-focused': {
        color: '#EE3A68',
        fontFamily: "'Montserrat', sans-serif",
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#EE3A68',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#EE3A68',
        },
    },
});

const Login = ({onSetStep}) => {
    const startQuestionsHandler = (e) => {
        onSetStep(3);
    }

    const [values, setValues] = React.useState({
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
                                <FormControl sx={{ m: 1, width: '25ch', backgroundColor:'white'}} variant="outlined" color="secondary">
                                    <CssTextField label="Email" id="outlined-adornment-email" />
                                </FormControl>
                            </div>

                            <div className="field">
                                <FormControl sx={{ m: 1, width: '25ch',backgroundColor:'white' }} variant="outlined" color="secondary">
                                    <CssTextField
                                        label="Password"
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
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