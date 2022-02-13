import {
    USER_NAME,
    USER_SURNAME,
    USER_EMAIL,
    USER_PHONE,
} from './page2_constants'

export const userName = (value) => ({
    type: USER_NAME,
    payload: value
});

export const userSurname = (value) => ({
    type: USER_SURNAME,
    payload: value
});

export const userEmail = (value) => ({
    type: USER_EMAIL,
    payload: value
});

export const userPhone = (value) => ({
    type: USER_PHONE,
    payload: value
});
