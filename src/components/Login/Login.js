import React, { useState } from 'react';
import { FormControl, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { colors, fontBase } from '../../settings/styles';

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        fontFamily: fontBase,
        color: colors.mainBlack,
        backgroundColor: colors.white,
    },
    '& label': {
        color: colors.gray,
        fontFamily: fontBase,
    },
    '& label.Mui-focused': {
        color: colors.violet,
        fontFamily: fontBase,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: colors.white,
        },
        '&:hover fieldset': {
            borderColor: colors.violet,
        },
        '&.Mui-focused fieldset': {
            borderColor: colors.violet,
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
