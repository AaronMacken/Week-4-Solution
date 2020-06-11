import { CREATE_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";
// this is where we write action creators and use redux thunks
// an action creator is a function that returns an aciton (an object with the action type & payload)
// the thunk is what allows us to call dispatch and do any asynchronous requests if needed

// this is the action creator
export function createUser(userData) {
  // this is the thunk
  return function (dispatch) {
    dispatch({
      type: CREATE_USER,
      payload: userData,
    });
  };
}

export function updateUser(updateData) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER,
      payload: updateData,
    });
  };
}

export function deleteUser(userId) {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER,
      payload: userId,
    });
  };
}
