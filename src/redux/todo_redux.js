
///  Redux in the single file ///

const redux = require("redux");

//Actions Types
const ADD_TODO = "add_todo";
const TOGGLE_TODO = "Toggle_todo";

// Action Functions
const addToDo = (text) => {
  return { payload: text, type: ADD_TODO };
};
const toggleToDo = (index) => {
  return { payload: index, type: TOGGLE_TODO };
};

//Initial State
const initialState = {
  todos: [],
};

//Reducers Functions
//must return updated state
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}

//Creating store
const store = redux.createStore(todoReducer)

//Dispatch actions
store.dispatch(addToDo("breakfast at 9"))
store.dispatch(addToDo("Office at 10"))
store.dispatch(toggleToDo(0)) //passing index to toggle i.e. zero

//Select data from store
console.log(store.getState())
