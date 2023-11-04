import React, { useState } from 'react';
import { FormControl, TextField} from "@mui/material";
import { styled } from '@mui/material/styles';
import { colors, fontBase } from '../../settings/styles';
import { validateAuth } from '../../utils/validation';

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

    const [errors, setErrors] = useState({});

    const handleChange = (prop) => (event) => {
        setValues(values => ({ ...values, [prop]: event.target.value }));
        setErrors(errors => ({ ...errors, [prop]: '' }));
    };

    const startQuestionsHandler = (event) => {
        event.preventDefault();
        const validationErrors = validateAuth(values.email, values.password);
        setErrors(validationErrors);
        
        if (validationErrors.ok) {
            onSetStep(3);
        }
    }

    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1 className="fancy">Login</h1>
            <div className="content-box">
              <form className="box" onSubmit={startQuestionsHandler} noValidate>
                <div className="field">
                  <FormControl
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={!!errors.email}
                  >
                    <CssTextField
                      label="Email"
                      type="email"
                      value={values.email}
                      error={!!errors.email}
                      onChange={handleChange("email")}
                      helperText={errors.email}
                    />
                  </FormControl>
                </div>
                <div className="field">
                  <FormControl
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={!!errors.password}
                  >
                    <CssTextField
                      label="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      autoComplete="off"
                      helperText={errors.password}
                      error={!!errors.password}
                    />
                  </FormControl>
                </div>
                <button type="submit" className="btn">
                  Start Survey
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
