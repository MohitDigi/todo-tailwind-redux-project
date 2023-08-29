import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

//Initial State
const initialState = {
    todos: [{
      "text":"Good news",
      completed: true
    }],
  };  

//Reducers Functions
//must return updated state
export function todoReducer(state = initialState, action) {
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
  