import * as ActionTypes from "../ActionTypes"

const initVal = {
    isLogin: false,
    error: '',
    text: ''
}

export const authReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.CLEARE_TEXT:
            return {
                ...state,
                text: '',
                error: ''
            }
        case ActionTypes.SIGNUP_USER:
            return {
                ...state,
                text: action.payload
            }
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                isLogin: true,
                text: action.payload
            }
        case ActionTypes.LOGOUT_USER:
            return {
                ...state,
                isLogin: false,
                text: action.payload
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