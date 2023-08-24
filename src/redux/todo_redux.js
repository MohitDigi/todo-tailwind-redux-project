const redux = require("redux");

//Actions
const ADD_TODO = "add_todo";
const TOGGLE_TODO = "Toggle_todo";

// Action Functions
const addToDo = (text) => {
  return { text: text, type: ADD_TODO };
};
const toggleToDo = (index) => {
  return { index: index, type: TOGGLE_TODO };
};

//Initial State
const initialState = {
  todos: [],
};

//Reducers Functions
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i == action.index) {
            todo.completed = !todo.completed;
          }
        }),
      };

    default:
      return state;
  }
}
