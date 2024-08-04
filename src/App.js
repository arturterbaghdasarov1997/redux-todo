import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoListPage from './pages/TodoList';
import EditTodoPage from './pages/EditTodo';
import DoneTodoPage from './pages/DoneTodo';
import CreateTodoPage from './pages/CreateTodo';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoListPage />} />
                <Route path="/edit/:id" element={<EditTodoPage />} />
                <Route path="/done" element={<DoneTodoPage />} />
                <Route path="/create" element={<CreateTodoPage />} />
            </Routes>
        </Router>
    );
};

export default App;