//Actions Types
export const ADD_TODO = "add_todo";
export const TOGGLE_TODO = "Toggle_todo";

// Action Functions
export const addToDo = (text) => ({ payload: text, type: ADD_TODO });
export const toggleToDo = (index) => ({ payload: index, type: TOGGLE_TODO });
