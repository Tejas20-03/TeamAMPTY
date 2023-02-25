import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (fontData, history) => async(dispatch) => {
    try {
    history.push('/');    
    } catch (error) {
        console.log(error);
    }
}
export const signup = (fontData, history) => async(dispatch) => {
    try {
    history.push('/');    
    } catch (error) {
        console.log(error);
    }
}