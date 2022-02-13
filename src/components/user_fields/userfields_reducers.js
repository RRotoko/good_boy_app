import {PAGE_NUMBER, INFO_MESSAGE} from './userfields_constants';

const initialState = {
    page: 1
}

export const pageNumber = (state=initialState, action) => {
    switch(action.type) {
        case PAGE_NUMBER:
            return Object.assign({}, state, {page: action.payload});
        default:
            return state;
    }
}

const initialMesage = {
    infomessage: ''
}
export const changeMessage = (state=initialMesage, action) => {
    switch(action.type) {
        case INFO_MESSAGE:
            return Object.assign({}, state, {infomessage: action.payload});
        default:
            return state;
    }
}