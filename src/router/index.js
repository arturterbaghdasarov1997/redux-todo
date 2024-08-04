import CreateTodoPage from "../pages/CreateTodo";
import DoneTodoPage from "../pages/DoneTodo";
import EditTodoPage from "../pages/EditTodo";
import TodoListPage from "../pages/TodoList";

const routes = [
    {
        element: <TodoListPage />,
        path: '/',
    },
    {
        element: <CreateTodoPage />,
        path: '/create',
    },
    {
        element: <EditTodoPage />,
        path: '/edit/:id',
    },
    {
        element: <DoneTodoPage />,
        path: '/done',
    },
];

export default routes;