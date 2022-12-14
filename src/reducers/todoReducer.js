import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CHECHK_TODO,
} from "../actions/actions";
import { initialTodos } from "./initialState";

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, title: action.title, checked: false }];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, title: action.title } : todo
      );

    case CHECHK_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
