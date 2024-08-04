import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTodoAction } from '../store/todo/todo.actions';
import './EditTodoPage.css';

const EditTodoPage = () => {
    const { id } = useParams();
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [todo, setTodo] = useState({ text: '', done: false });
    
    useEffect(() => {
        const existingTodo = todoList.find((item) => item.id === parseInt(id));
        if (existingTodo) {
            setTodo(existingTodo);
        }
    }, [id, todoList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodoAction(todo.id, todo));
        navigate('/');
    };

    return (
        <div className="edit-todo-container">
            <h1 className="page-heading">Edit Todo</h1>
            <form onSubmit={handleSubmit} className="edit-todo-form">
                <div className="form-group">
                    <label className="form-label">Text:</label>
                    <input
                        type="text"
                        name="text"
                        value={todo.text}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Done:</label>
                    <input
                        type="checkbox"
                        name="done"
                        checked={todo.done}
                        onChange={(e) => setTodo({
                            ...todo,
                            done: e.target.checked
                        })}
                        className="checkbox-input"
                    />
                </div>
                <button type="submit" className="submit-button">Save</button>
                <button type="button" onClick={() => navigate('/')} className="cancel-button">Cancel</button>
            </form>
        </div>
    );
};

export default EditTodoPage;