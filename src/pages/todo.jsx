import React from 'react';
import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

function Todo() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todo;
