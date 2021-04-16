import axios from "axios";
import Cookies from "js-cookie";
import { USER_SIGNIN_REQ, USER_SIGNIN_SUC, USER_SIGNIN_FAIL, USER_REG_REQ, USER_REG_SUC, USER_REG_FAIL } from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQ, payload: { email, password } });
    try {
        const { data } = await axios.post("/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUC, payload: data });
        Cookies.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REG_REQ, payload: { name, email, password } });
    try {
      const { data } = await axios.post("/api/users/register", { name, email, password });
      dispatch({ type: USER_REG_SUC, payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_REG_FAIL, payload: error.message });
    }
  }

export { signin, register };