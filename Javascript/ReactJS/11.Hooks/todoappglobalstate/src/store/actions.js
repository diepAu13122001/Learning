import { SET_TODO_INPUT, ADD_TODO_INPUT, DEL_TODO_INPUT } from "./constant";

export const inputAction = (data) => {
  return { type: SET_TODO_INPUT, data: data };
};

export const addAction = (data) => {
  return { type: ADD_TODO_INPUT, data: data };
};

export const delAction = (index) => {
  return { type: DEL_TODO_INPUT, data: index };
};
