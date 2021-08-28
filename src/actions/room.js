import {
  ROOM_LOAD_SUCCESS,
  ROOM_LOAD_BY_ID_SUCCESS,
  ROOM_ADD_SUCCESS,
  ROOM_EDIT_SUCCESS,
  ROOM_DELETE_SUCCESS,
  ROOM_LOAD_FAIL,
  SET_MESSAGE
} from "./types";

import RoomService from "../services/room.service";

export const getAll = () => (dispatch) => {
  return RoomService.getAll().then(
    (data) => {
      dispatch({
        type: ROOM_LOAD_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const create = (params) => (dispatch) => {
  return RoomService.create(params).then(
    (data) => {
    console.log('create', data);
      dispatch({
        type: ROOM_ADD_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteById = (id) => (dispatch) => {
  return RoomService.delete(id).then(
    (data) => {
    console.log('delete', data);
      dispatch({
        type: ROOM_DELETE_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const loadById = (id) => (dispatch) => {
  return RoomService.getById(id).then(
    (data) => {
    console.log('getById', data);
      dispatch({
        type: ROOM_LOAD_BY_ID_SUCCESS,
        payload: { room: data.data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const update = (id, params) => (dispatch) => {
  return RoomService.update(id, params).then(
    (data) => {
    console.log('update', data);
      dispatch({
        type: ROOM_EDIT_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getAvailable = () => (dispatch) => {
  return RoomService.getAvailable().then(
    (data) => {
      dispatch({
        type: ROOM_LOAD_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getBooked = () => (dispatch) => {
  return RoomService.getBooked().then(
    (data) => {
      dispatch({
        type: ROOM_LOAD_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getNotClean = () => (dispatch) => {
  return RoomService.getNotClean().then(
    (data) => {
      dispatch({
        type: ROOM_LOAD_SUCCESS,
        payload: { room: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

      dispatch({
        type: ROOM_LOAD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};