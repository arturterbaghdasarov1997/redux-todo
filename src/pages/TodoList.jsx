import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTodoAction, markAsDoneTodoAction } from '../store/todo/todo.actions';
import './TodoListPage.css';

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleMarkAsDone = (id) => {
        dispatch(markAsDoneTodoAction(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodoAction(id));
    };

    return (
        <div className="todo-list-container">
            <h1 className="page-heading">ToDo List</h1>
            {todoList.length > 0 ? (
                todoList.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <div className='texts'>
                            <span className="todo-text">{todo.text}</span>
                        </div>
                        <div className='buttons'>
                            <button onClick={() => handleEdit(todo.id)} className="edit-button">Edit</button>
                            {!todo.done && <button onClick={() => handleMarkAsDone(todo.id)} className="mark-done-button">Mark as Done</button>}
                            <button onClick={() => handleDelete(todo.id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-tasks">No tasks available</p>
            )}
            <div className="links">
                <Link to="/create" className="link">To Create Page</Link>
                <Link to="/done" className="link">To Done Page</Link>
            </div>
        </div>
    );
};

export default TodoListPage;