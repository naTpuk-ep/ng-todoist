// import { Action } from '@ngrx/store';
// import { ITodoItem } from '../reducers/todos.reducer';
//
//
// export enum TodosActionsType {
//   setTodos = '[TODOS] set'
// }
//
// export class SetTodosAction implements Action {
//   readonly type = TodosActionsType.setTodos;
//   constructor(public payload: {
//     todos: ITodoItem[]
//   }) {}
// }
//


import { createAction, props } from '@ngrx/store';
import { ITodoItem } from '../reducers/todos.reducer';


export enum TodosActionsType {
  setTodos = '[TODOS] set',
  createTodo = '[TODOS] create'
}


export const setTodosAction = createAction(
  TodosActionsType.setTodos,
  props<{todos: ITodoItem[]}>()
  );

export const createTodoAction = createAction(
  TodosActionsType.createTodo,
  props<{todo: ITodoItem}>()
)

