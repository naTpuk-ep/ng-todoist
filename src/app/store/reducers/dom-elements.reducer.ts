import {
  DomElementsActionsType,
  hideModalAction,
  hideNavAction, hideOverlayAction,
  showModalAction,
  showNavAction,
  showOverlayAction,
} from '../actions/dom-elements.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const domElementsNode = 'domElements';

export interface IDomElementsState {
  navIsShow: boolean,
  modalIsShow: boolean,
  overlayIsShow: boolean,
}

const initialState: IDomElementsState = {
  navIsShow: false,
  modalIsShow: false,
  overlayIsShow: false,
};

export const domElementsReducer = createReducer(
  initialState,
  on(showNavAction, state => ({
    ...state,
    navIsShow: true,
  })),
  on(hideNavAction, state => ({
    ...state,
    navIsShow: false,
  })),
  on(showModalAction, state => ({
    ...state,
    modalIsShow: true,
  })),
  on(hideModalAction, state => ({
    ...state,
    modalIsShow: false,
  })),
  on(showOverlayAction, state => ({
    ...state,
    overlayIsShow: true,
  })),
  on(hideOverlayAction, state => ({
    ...state,
    overlayIsShow: false,
  })),
);

// export const domElementsReducer = (
//   state = initialState,
//   action: Action,
// ): IDomElementsState => {
//   switch (action.type) {
//     case DomElementsActionsType.navShow:
//       return {
//         ...state,
//         navIsShow: true,
//       };
//     case DomElementsActionsType.navHide:
//       return {
//         ...state,
//         navIsShow: false,
//       };
//     default:
//       return state;
//   }
// };
