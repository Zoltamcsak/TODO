import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({todos, todoClick, todoRemove, todoModify}) => (
  <div>
    {todos.map(todo => {
      return <TodoItem key={todo.id}
                       todo={todo}
                       onTodoClick={() => todoClick(todo)}
                       onTodoRemove={() => todoRemove(todo.id)}
                       onTodoModify={(newTodo) => todoModify(newTodo)}
      />
    })}
  </div>
);

export default TodoList;