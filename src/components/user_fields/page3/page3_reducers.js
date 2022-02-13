import {USER_AGREES} from './page3_constants';

const initialState = {
    useragrees: 'no'
};

export const userAgree = (state=initialState, action) => {
    switch(action.type) {
        case USER_AGREES:
            return Object.assign({}, state, {useragrees: action.payload});
        default:
            return state;
    }
}