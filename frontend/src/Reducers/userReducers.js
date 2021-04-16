import { USER_REG_FAIL, USER_REG_REQ, USER_REG_SUC, USER_SIGNIN_FAIL, USER_SIGNIN_REQ, USER_SIGNIN_SUC } from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQ:
            return {loading: true};
        case USER_SIGNIN_SUC:
            return { loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
        case USER_REG_REQ:
            return {loading: true};
        case USER_REG_SUC:
            return { loading: false, userInfo: action.payload};
        case USER_REG_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

export { userSigninReducer, userRegisterReducer };