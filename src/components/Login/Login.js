import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors, fontBase } from "../../settings/styles";
import { validateAuth } from "../../utils/validation";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontFamily: fontBase,
    color: colors.mainBlack,
    backgroundColor: colors.white,
  },
  "& label": {
    color: colors.gray,
    fontFamily: fontBase,
  },
  "& label.Mui-focused": {
    color: colors.violet,
    fontFamily: fontBase,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.white,
    },
    "&:hover fieldset": {
      borderColor: colors.violet,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.violet,
    },
  },
});

const Login = ({ onSetStep }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (prop) => (event) => {
    setValues((values) => ({ ...values, [prop]: event.target.value }));
    setErrors((errors) => ({ ...errors, [prop]: "" }));
  };

  const startQuestionsHandler = (event) => {
    event.preventDefault();
    const validationErrors = validateAuth(values.email, values.password);
    setErrors(validationErrors);

    if (validationErrors.ok) {
      onSetStep(3);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="fancy">Login</h1>
          <div className="content-box">
            <form
              id="login-form"
              className="box"
              onSubmit={startQuestionsHandler}
              noValidate
            >
              <div className="field">
                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
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
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
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
            </form>
          </div>
          <button type="submit" form="login-form" className="btn">
            Start Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
