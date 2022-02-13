import { 
    USER_NAME,
    USER_SURNAME,
    USER_EMAIL,
    USER_PHONE
} from './page2_constants'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
}

export const userData = (state=initialState, action) => {
    switch(action.type) {
        case USER_NAME:
            return Object.assign({}, state, {firstName: action.payload});
        case USER_SURNAME:
            return Object.assign({}, state, {lastName: action.payload});
        case USER_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case USER_PHONE:
            return Object.assign({}, state, {phone: action.payload});
        default:
            return state;
    }
}