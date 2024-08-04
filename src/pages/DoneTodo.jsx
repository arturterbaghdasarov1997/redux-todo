import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodoAction } from '../store/todo/todo.actions';
import './DoneTodoPage.css';

const DoneTodoPage = () => {
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const doneTodos = todoList.filter(todo => todo.done);

    const handleDelete = (id) => {
        dispatch(deleteTodoAction(id));
    };

    return (
        <div className="done-todo-container">
            <h1 className="page-heading">Done Page</h1>
            {doneTodos.length > 0 ? (
                doneTodos.map(todo => (
                    <div key={todo.id} className="todo-item">
                        <span className="todo-text">{todo.text}</span>
                        <button onClick={() => handleDelete(todo.id)} className="delete-button">Delete</button>
                    </div>
                ))
            ) : (
                <p className="no-tasks">No completed tasks available</p>
            )}
            <div className="links">
                <Link to="/" className="link">To List</Link>
                <Link to="/create" className="link">To Create Page</Link>
            </div>
        </div>
    );
};

export default DoneTodoPage;