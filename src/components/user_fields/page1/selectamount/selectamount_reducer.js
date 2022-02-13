import {SELECT_AMOUNT} from './selectamount_constants';
import {SELECT_OWN} from './selectamount_constants';

const initialState1 = {
    value: 0,
};

export const selectValue = (state=initialState1, action) => {
    switch(action.type) {
        case SELECT_AMOUNT:
            return Object.assign({}, state, {value: action.payload});
        default:
            return state;
    }
};

const initialValue2 = {
    selectown: false,
}

export const ownValueSelect = (state=initialValue2, action) => {
    switch(action.type) {
        case SELECT_OWN:
            return Object.assign({}, state, {selectown: action.payload});
        default:
            return state;
    }
};
