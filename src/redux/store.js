import { createStore } from "redux";
import { taskReducer } from "./reducer";

// export const store = createStore(taskReducer)

export const store = createStore(
    taskReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
