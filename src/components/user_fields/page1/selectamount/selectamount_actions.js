import {SELECT_AMOUNT} from './selectamount_constants';
import {SELECT_OWN} from './selectamount_constants';



export const selectAmount = (text) => ({
    type: SELECT_AMOUNT,
    payload: text
});

export const ownValue = (text) => ({
    type: SELECT_OWN,
    payload: text
});