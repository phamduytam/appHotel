import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import room from "./room";

export default combineReducers({
  auth,
  message,
  room
});