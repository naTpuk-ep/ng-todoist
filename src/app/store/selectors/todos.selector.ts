import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoItem, ITodosState, todosNode } from '../reducers/todos.reducer';


export const todosFeatureSelector = createFeatureSelector<ITodosState>(
  todosNode);

export const setTodosSelector = createSelector(
  todosFeatureSelector,
  (state: ITodosState): ITodoItem[] => state.todos,
);
