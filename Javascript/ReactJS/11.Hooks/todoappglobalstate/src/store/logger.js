export default function logger(reducer) {
  return (state, action) => {
    console.group(action.type);
    console.log("PrevState", state);
    const newState = reducer(state, action);
    console.log("NewState", newState);
    console.groupEnd();
    return newState;
  };
}
