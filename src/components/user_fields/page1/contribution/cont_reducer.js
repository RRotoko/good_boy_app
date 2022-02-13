import {SELECT_TYPE} from './cont_constants';

const initialState = {
    contributiontype: 'whole'
};

export const contributionType = (state=initialState, action) => {
    switch (action.type) {
        case SELECT_TYPE:
            return Object.assign({}, state, {contributiontype: action.payload});
        default:
            return state
    }
};