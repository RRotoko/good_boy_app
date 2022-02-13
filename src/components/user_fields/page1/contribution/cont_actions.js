import {SELECT_TYPE} from './cont_constants';

export const selectType = (text) => ({
    type: SELECT_TYPE,
    payload: text
});

