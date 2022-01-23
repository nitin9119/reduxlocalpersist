import { LOGIN_SUCESS, LOGIN_FAILURE } from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";
const token = loadData("token");

const initState = {
  isAuth: token ? true : false,
  token: token || "",
};

export const authReducer = (state = initState, { type, payload }) => {
  //console.log(state.token);
  switch (type) {
    case LOGIN_SUCESS:
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
      };

    default:
      return state;
  }
};
