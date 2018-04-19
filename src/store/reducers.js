import {ADD_TODO, GET_ALL_TODOS, MODIFY_TODO, REMOVE_TODO, TOGGLE_TODO} from './actions';

let todoId = 0;

const initState = {
  todos: []
};

export function todoReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          {
            id: todoId++,
            text: action.payload,
            done: false
          },
          ...state.todos
        ]
      };
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !action.payload.done
          };
        } else {
          return todo;
        }
      })}
    }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case MODIFY_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id ? {
            ...todo,
            text: action.payload.text
          } : todo;
        })
      };
    case GET_ALL_TODOS:
    default:
      return state;
  }
}