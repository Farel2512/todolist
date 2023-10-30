import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../context/todo-provider';
import { Form, Modal, Button } from 'react-bootstrap';

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit, setTodoFilter } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // "all" for all todos, "completed" for completed todos, "incomplete" for incomplete todos

  useEffect(() => {
    // Misalnya, lakukan proses loading data dari sumber eksternal di sini
    // Setelah selesai loading, atur setLoading(false)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Contoh: Berhenti loading setelah 2 detik
  }, []);

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;
    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo, index) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
    setSelectedTodoIndex(index);
  };

  const handleDelete = (index) => {
    setShowDeleteModal(true);
    setSelectedTodoIndex(index);
  };

  const confirmDelete = () => {
    let cloneTodos = [...todos];
    cloneTodos.splice(selectedTodoIndex, 1);
    setTodos(cloneTodos);
    setShowDeleteModal(false);
  };

  // Filter function to determine whether a todo should be displayed
  const filterTodos = (todo) => {
    if (filterStatus === 'all') {
      return true;
    } else if (filterStatus === 'completed') {
      return todo.status;
    } else if (filterStatus === 'incomplete') {
      return !todo.status;
    }
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>;
  }

  return (
    <div>
      <div>
        {/* Filter buttons */}
        <button className="btn btn-white" style={{ margin: '10px' }} onClick={() => setFilterStatus('all')}>
          Show All
        </button>
        <button className="btn btn-danger" style={{ margin: '10px' }} onClick={() => setFilterStatus('incomplete')}>
          Active
        </button>
        <button className="btn btn-success" style={{ margin: '10px' }} onClick={() => setFilterStatus('completed')}>
          Completed
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ paddingLeft: '10px' }}>
                No
              </th>
              <th scope="col">Status</th>
              <th scope="col" style={{ width: '50%' }}>
                Job To Do
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.filter(filterTodos).map((todo, index) => (
              <tr key={todo.id}>
                <td style={{ paddingLeft: '15px' }}>{index + 1}</td>
                <td>
                  <Form.Check type="checkbox" id={`todo-${index}`} label="" checked={todo.status} onChange={() => handleStatus(index)} />
                </td>
                <td>
                  <span onClick={() => handleStatus(index)} className={todo.status ? 'text-decoration-line-through' : ''}>
                    {todo.value}
                  </span>
                </td>
                <td>{todo.status ? null : <button onClick={() => handleEdit(todo, index)}>✏️</button>}</td>
                <td>{todo.status ? null : <button onClick={() => handleDelete(index)}>❌</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal untuk Delete Todo */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoList;
