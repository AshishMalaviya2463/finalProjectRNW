import { act } from "@testing-library/react"
import * as ActionTypes from "../ActionTypes"

const initVal = {
    isLogin: false,
    error: '',
    text: '',
    navigateTo: ''
}

export const authReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.CLEARE_TEXT:
            return {
                ...state,
                text: '',
                error: '',
                navigateTo: ''
            }
        case ActionTypes.SIGNUP_USER:
            return {
                ...state,
                text: action.payload.text,
                navigateTo: action.payload.navigateTo
            }
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                isLogin: true,
                text: action.payload.text,
                navigateTo: action.payload.navigateTo
            }
        case ActionTypes.LOGOUT_USER:
            return {
                ...state,
                isLogin: false,
                text: action.payload.text
            }
        case ActionTypes.ERROR:
            return {
                ...state,
                error: action.payload,
                text: ''
            }
        default:
            return state;
    }
}