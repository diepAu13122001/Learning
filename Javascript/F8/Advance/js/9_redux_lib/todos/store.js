import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch; // set global scope for dispatch 

export { attach, connect };
