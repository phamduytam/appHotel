import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESTORE_TOKEN
} from "../actions/types";

const initialState = { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

      case RESTORE_TOKEN:
        if (payload && payload.user && payload.user.access_token) {
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        } else {
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        }

    default:
      return state;
  }
}