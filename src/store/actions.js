export const ADD_TODO = 'ADD_TODO';
export const GET_ALL_TODOS = 'GET_ALL_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';

export function addTodo(todoText) {
  return {
    type: ADD_TODO,
    payload: todoText
  };
}

export function getAllTodos() {
  return {
    type: GET_ALL_TODOS
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: todo
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

export function modifyTodo(todo) {
  return {
    type: MODIFY_TODO,
    payload: todo
  }
}

