// const redux = require("redux"); or use
import redux from "redux";
import todoReducer from "./reducers/todoReducers";

//Creating store
export const store = redux.createStore(todoReducer)
