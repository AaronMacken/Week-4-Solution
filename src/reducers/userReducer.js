import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../actions/actionTypes";

const initialState = {
  users: [
    {
      name: "Aaron",
      id: 1,
    },
    {
      name: "Jamie",
      id: 2,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      let updatedArray = state.users.map((user) => {
        if (user.id == action.payload.id) {
          user.name = action.payload.name;
        }
        return user;
      });
      return {
        ...state,
        users: updatedArray,
      };
    case DELETE_USER:
      let filteredArray = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredArray,
      };

    default:
      return state;
  }
}
