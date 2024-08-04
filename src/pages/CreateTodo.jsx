import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todo/todo.actions';
import { Link } from 'react-router-dom';
import './CreateTodoPage.css';

const CreateTodoPage = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(addTodoAction(value));
            setValue('');
        }
    };

    return (
        <form onSubmit={onSubmit} className="create-todo-form">
            <h1 className="form-heading">Create Page</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-input"
            />
            <button type="submit" className="submit-button">Submit</button>
            <div className="links">
                <Link to="/" className="link">To List</Link>
                <Link to="/done" className="link">To Done Page</Link>
            </div>
        </form>
    );
};

export default CreateTodoPage;