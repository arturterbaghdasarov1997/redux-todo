import { TODO_ACTIONS } from "./action.keys";

const initialState = {
    todoList: []
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case TODO_ACTIONS.EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo =>
                    todo.id === action.id ? action.updatedTodo : todo
                )
            };
        case TODO_ACTIONS.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.id)
            };
        case TODO_ACTIONS.DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo =>
                    todo.id === action.id ? { ...todo, done: true } : todo
                )
            };
        default:
            return state;
    }
};