import { useRef } from "react";
import "./App.css";
import {
  ADD_TODO_INPUT,
  addAction,
  delAction,
  inputAction,
  useStore,
} from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addAction(todoInput));
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        onChange={(e) => dispatch(inputAction(e.target.value))}
        value={todoInput}
        placeholder="new task..."
        ref={inputRef}
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        <ul>
          {todos?.map((t, index) => (
            <li key={index}>
              {t}
              <button onClick={() => dispatch(delAction(index))}>X</button>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
