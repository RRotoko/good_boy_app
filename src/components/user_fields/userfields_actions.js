import {PAGE_NUMBER, INFO_MESSAGE} from './userfields_constants';

export const pageNumberAction = (value) => ({
    type: PAGE_NUMBER,
    payload: value
})

export const infoMessage = (value) => ({
    type: INFO_MESSAGE,
    payload: value
})