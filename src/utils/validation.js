export const validateAuth = (email, password) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};

    if (!email) {
        errors.email = 'E-mail address is required';
    } else if (!re.test(String(email).toLowerCase())) {
        errors.email = 'Invalid email address';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (!errors.email && !errors.password) {
        errors.ok = true;
    }
    return errors;
}

