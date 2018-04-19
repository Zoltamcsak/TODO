import React, {Component} from 'react';
import './App.css';
import TodoListContainer from './components/todo/todo-list-container';
import AddTodo from './components/add-todo/add-todo'

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
