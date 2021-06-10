import { createAction } from '@ngrx/store';


export enum DomElementsActionsType {
  navShow = '[NAV] show',
  navHide = '[NAV] hide',
  modalShow = '[MODAL] show',
  modalHide = '[MODAL] hide',
  overlayShow = '[OVERLAY] show',
  overlayHide = '[OVERLAY] hide',
}

export const showNavAction = createAction(
  DomElementsActionsType.navShow,
);

export const hideNavAction = createAction(
  DomElementsActionsType.navHide,
);

export const showModalAction = createAction(
  DomElementsActionsType.modalShow,
);

export const hideModalAction = createAction(
  DomElementsActionsType.modalHide,
);

export const showOverlayAction = createAction(
  DomElementsActionsType.overlayShow,
);

export const hideOverlayAction = createAction(
  DomElementsActionsType.overlayHide,
);
