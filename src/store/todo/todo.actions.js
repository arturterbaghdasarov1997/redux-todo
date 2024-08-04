import { TODO_ACTIONS } from "./action.keys";

export const addTodoAction = (text) => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload: { id: Date.now(), text, done: false }
});

export const editTodoAction = (id, updatedTodo) => ({
    type: TODO_ACTIONS.EDIT_TODO,
    id,
    updatedTodo
});

export const deleteTodoAction = (id) => ({
    type: TODO_ACTIONS.DELETE_TODO,
    id
});

export const markAsDoneTodoAction = (id) => ({
    type: TODO_ACTIONS.DONE_TODO,
    id
});