const init = {
  todos: [
    { id: 1, name: "Buy milk", completed: false },
    { id: 2, name: "Eat out", completed: true },
  ],
  filters: [{ all: true }, { active: false }, { completed: false }],
  backup: [
    { id: 1, name: "Buy milk", completed: false },
    { id: 2, name: "Eat out", completed: true },
  ],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD":
      const newTaskName = args[0]; // 1 lan chi them 1 item
      const newTask = {
        id: state.todos.length + 1,
        name: newTaskName,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, ...[newTask]],
        filters: state.filters,
        backup: [...state.todos, ...[newTask]],
      };

    case "DEL":
      const delTaskId = args[0];
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== delTaskId),
        filters: state.filters,
        backup: state.todos.filter((todo) => todo.id !== delTaskId),
      };

    case "EDIT":
      const editTaskName = args[0];
      const editTaskId = args[1];
      const edited_list = state.todos.map((todo) => {
        if (todo.id === editTaskId) {
          return {
            id: editTaskId,
            name: editTaskName,
            completed: false,
          };
        } else return todo;
      });
      return {
        ...state,
        todos: edited_list,
        filters: state.filters,
        backup: edited_list,
      };

    case "ALL-COMPLETED":
      const checked = args[0];
      if (checked) {
        return {
          ...state,
          filters: state.filters,
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
          backup: state.todos.map((todo) => ({ ...todo, completed: true })),
        };
      } else
        return {
          ...state,
          filters: state.filters,
          todos: state.todos.map((todo) => ({ ...todo, completed: false })),
          backup: state.todos.map((todo) => ({ ...todo, completed: false })),
        };

    case "COMPLETED":
      const completedTaskId = args[0];
      const completed_list = state.todos.map((todo) => {
        if (todo.id === completedTaskId) {
          return { ...todo, completed: true };
        } else return todo;
      });
      return {
        ...state,
        todos: completed_list,
        filters: state.filters,
        backup: completed_list,
      };

    case "UNCOMPLETED":
      const uncompletedTaskId = args[0];
      const uncompleted_list = state.todos.map((todo) => {
        if (todo.id === uncompletedTaskId) {
          return { ...todo, completed: false };
        } else return todo;
      });
      return {
        ...state,
        todos: uncompleted_list,
        filters: state.filters,
        backup: uncompleted_list,
      };

    case "CLEAR-COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
        filters: state.filters,
        backup: state.todos.filter((todo) => !todo.completed),
      };

    case "FILTER":
      const filterType = args[0];
      let todo_list = [];
      if (filterType === "all") {
        todo_list = state.backup;
      } else if (filterType === "active") {
        todo_list = state.backup.filter((todo) => !todo.completed);
      } else if (filterType === "completed") {
        todo_list = state.backup.filter((todo) => todo.completed);
      }
      return {
        ...state,
        todos: todo_list,
        filters: state.filters.map((tag) => {
          const [key, value] = Object.entries(tag)[0];
          if (filterType === key) return { [filterType]: true };
          else return { [key]: false };
        }),
      };

    default:
      return state;
  }
}
