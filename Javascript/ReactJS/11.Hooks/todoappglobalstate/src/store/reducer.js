import { ADD_TODO_INPUT, DEL_TODO_INPUT, SET_TODO_INPUT } from "./constant";

export const initState = {
  todos: [],
  todoInput: "",
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        todos: state.todos,
        todoInput: action.data,
      };
    case ADD_TODO_INPUT:
      return {
        todos: [...state.todos, action.data],
        todoInput: "",
      };
    case DEL_TODO_INPUT:
      const newtodos = [...state.todos];
      newtodos.splice(action.data, 1);
      return {
        todos: newtodos,
        todoInput: state.todoInput,
      };
    default:
      throw new Error("Please just choose ADD/ DEL/ INPUT");
  }
}
