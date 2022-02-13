import {
    REQUEST_LINKS_PENDING,
    REQUEST_LINKS_SUCCESS,
    REQUEST_LINKS_FAILED,
    SELECTED_SHELTER
} from './selecttype_constants';

export const requestLinks = () => (dispatch) => {
    dispatch({ type: REQUEST_LINKS_PENDING});
    //fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
    //.then(response => response.json())
    //.then(data => dispatch({ type: REQUEST_LINKS_SUCCESS, payload: data}))
    //.catch(error => dispatch({type: REQUEST_LINKS_FAILED, payload: error}))
};

export const selectShelter2 = (text) => ({
    type: SELECTED_SHELTER,
    payload: text
});