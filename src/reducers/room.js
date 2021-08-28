import {
  ROOM_LOAD_SUCCESS,
  ROOM_LOAD_BY_ID_SUCCESS,
  ROOM_ADD_SUCCESS,
  ROOM_EDIT_SUCCESS,
  ROOM_DELETE_SUCCESS,
  ROOM_LOAD_FAIL
} from "../actions/types";

const initialState = {
        };

export default function (state = initialState, action) {
  const { type, payload } = action;
  let room, data;
  switch (type) {
    case ROOM_LOAD_SUCCESS:
    console.log('ROOM_LOAD_SUCCESS', payload.room);
      return {
        ...state,
        room: payload.room.data,
      };

    // case ROOM_ADD_SUCCESS:
    //     // console.log('ROOM_ADD_SUCCESS', state, payload)
    //     room = Object.assign({}, state.room);
    //     data = room.data.concat(payload.room.data);
    //     room.data = data;
    //     console.log('ROOM_ADD_SUCCESS', room);
    //     return {
    //         ...state,
    //         room: room,
    //     };

    // case ROOM_DELETE_SUCCESS:
    //     // console.log('ROOM_DELETE_SUCCESS', state, payload)
    //     let newState = Object.assign({}, state);
    //     // data = room.data.data.filter(item => item.id !== parseInt(payload.room.data.id));
    //     // room.data.data = data;
    //     const index = newState.room.data.findIndex(item => {return item.id === parseInt(payload.room.data.id)});
    //     newState.room.data.splice(index, 1);
    //     newState.isDelete = true;
    //     console.log('ROOM_DELETE_SUCCESS', newState);
    //     return {
    //       ...newState
    //     };

    case ROOM_LOAD_BY_ID_SUCCESS:
      console.log('ROOM_LOAD_BY_ID_SUCCESS', payload.room);
      return {
        ...state,
        room: payload.room,
      };

    // case ROOM_EDIT_SUCCESS:
    //   console.log('ROOM_LOAD_BY_ID_SUCCESS', payload.room);
    //   return {
    //     ...state,
    //     room: payload.room,
    //   };

    default:
      return state;
  }
}