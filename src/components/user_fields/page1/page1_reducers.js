import {contributionType} from './contribution/cont_reducer';
import {selectValue} from './selectamount/selectamount_reducer';
import {selectShelter} from './selecttype/selecttype_reducers';
import { combineReducers } from "redux";

export const page1reducers = combineReducers(contributionType, selectValue, selectShelter);