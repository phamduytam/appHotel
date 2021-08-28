import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESTORE_TOKEN,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";
import { storageService } from "../services/storage.service";

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const restore = () => (dispatch) => {
  return storageService.getData('user').then(
    (data) => {
      dispatch({
        type: RESTORE_TOKEN,
        payload: { user: data },
      });

      return Promise.resolve();
    }
  );
};