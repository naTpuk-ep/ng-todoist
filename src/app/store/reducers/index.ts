import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
  domElementsReducer,
  IDomElementsState,
  domElementsNode,
} from './dom-elements.reducer';
import { ITodosState, todosNode, todosReducer } from './todos.reducer';


export interface State {
  [domElementsNode]: IDomElementsState,
  [todosNode]: ITodosState,
}

export const reducers: ActionReducerMap<State> = {
  [domElementsNode]: domElementsReducer,
  [todosNode]: todosReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
