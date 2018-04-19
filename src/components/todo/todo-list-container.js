import TodoList from './todo-list';
import connect from 'react-redux/es/connect/connect';
import {modifyTodo, removeTodo, toggleTodo} from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos
  }
};

const mapDispatchToProps = (dispatch) => ({
  todoClick: (todo) => dispatch(toggleTodo(todo)),
  todoRemove: (id) => dispatch(removeTodo(id)),
  todoModify: (todo) => dispatch(modifyTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);