import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IDomElementsState,
  domElementsNode,
} from '../reducers/dom-elements.reducer';


export const domElementsFeatureSelector = createFeatureSelector<IDomElementsState>(
  domElementsNode);

export const navIsShowSelector = createSelector(
  domElementsFeatureSelector,
  (state: IDomElementsState): boolean => state.navIsShow,
);

export const modalIsShowSelector = createSelector(
  domElementsFeatureSelector,
  (state: IDomElementsState): boolean => state.modalIsShow,
);

export const overlayIsShowSelector = createSelector(
  domElementsFeatureSelector,
  (state: IDomElementsState): boolean => state.overlayIsShow,
);
