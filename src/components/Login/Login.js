import React, { useState } from 'react';
import { FormControl, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        fontFamily: "'Montserrat', sans-serif",
        color: "black",
        backgroundColor: 'white',
    },
    '& label': {
        color: '#C9CBCF',
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

const Login = ({ onSetStep }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (prop) => (event) => {
        setValues(values => ({ ...values, [prop]: event.target.value }));
    };

    const startQuestionsHandler = () => {
        onSetStep(3);
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="fancy">Login</h1>
                    <div className="content-box">
                        <form className="box" onSubmit={startQuestionsHandler}>
                            <div className="field">
                                <FormControl fullWidth variant="outlined" margin="normal">
                                    <CssTextField
                                        label="Email"
                                        autoComplete="off"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                                </FormControl>
                            </div>
                            <div className="field">
                                <FormControl fullWidth variant="outlined" margin="normal">
                                    <CssTextField
                                        label="Password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        autoComplete="off"
                                    />
                                </FormControl>
                            </div>
                            <button type="submit" className="btn">Start Survey</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
