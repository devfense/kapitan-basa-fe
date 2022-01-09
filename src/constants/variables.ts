export const ALERT_TIMEOUT = 2000

export const ALERT = {
    GENERAL_TITLE: {
        SUCCESS: 'Success',
        ERROR: 'Error',
        APP_ERROR: 'Application Error',
        LOGIN_FAILED: 'Login Failed',
    }
}

export const COOKIE = {
    SETTINGS: {
        NAME: 'USER_INFO',
        EXP: parseInt(process.env.REACT_APP_COOKIE_EXP || '1'),
        DOMAIN: process.env.REACT_APP_ENV === 'LOCAL' ? 'localhost' : process.env.REACT_APP_BASE_URL
    }
}