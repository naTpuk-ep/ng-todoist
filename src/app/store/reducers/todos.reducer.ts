import { createReducer, on } from '@ngrx/store';
import { createTodoAction, setTodosAction } from '../actions/todos.actions';
import { act } from '@ngrx/effects';


export const todosNode = 'todos';

export interface ITodoItem {
  title: string,
  date: Date,
  complete: false,
  id?: string
}

export interface ITodosState {
  todos: ITodoItem[];
}

const initialState: ITodosState = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(setTodosAction, (state, action) => ({
    ...state,
    todos: action.todos,
  })),
  on(createTodoAction, (state, action) => ({
    ...state,
    todos: state.todos.concat([action.todo])
  }))
);
