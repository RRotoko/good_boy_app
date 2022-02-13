import {
    REQUEST_LINKS_PENDING,
    REQUEST_LINKS_SUCCESS,
    REQUEST_LINKS_FAILED,
    SELECTED_SHELTER
} from './selecttype_constants';

const initialState1 = {
    isPending: true,
    shelters: [],
    error: '',
    shelterID: ''
};

export const selectShelter = (state=initialState1, action) => {
    switch(action.type) {
        case REQUEST_LINKS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_LINKS_SUCCESS:
            return Object.assign({}, state, {shelters: action.payload, isPending: false});
        case REQUEST_LINKS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case SELECTED_SHELTER:
            return Object.assign({}, state, {shelterID: action.payload});
        default:
            return state;
    }
};
