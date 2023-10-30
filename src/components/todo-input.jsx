import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/todo-provider';

function TodoInput() {
  const { todos, setTodos, todoInput, setTodoInput, isEdit, todoEdit, setIsEdit } = useContext(TodoContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    if (!todoInput.trim()) {
      setErrorMessage('Form tidak boleh kosong');
      return;
    }

    setErrorMessage('');

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
    } else {
      let newTodo = {
        id: new Date(),
        value: todoInput,
        status: false,
      };

      setTodos([...todos, newTodo]);
    }

    setTodoInput('');
  };

  return (
    <div>
      <form className="form-inline d-flex justify-content-between">
        <input className="form-control" style={{ margin: '10px 10px 10px 10px' }} type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button className="btn btn-primary" style={{ margin: '10px', marginRight: '50%' }} onClick={handleClick}>
          {isEdit ? 'Edit' : 'Add'}
        </button>
      </form>

      {errorMessage && (
        <div className="text-danger" style={{ padding: '0 0 0 10px' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default TodoInput;
