import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { navIsShowSelector, overlayIsShowSelector } from './store/selectors/dom-elements.selector';
import {
  hideModalAction,
  hideNavAction,
  hideOverlayAction,
} from './store/actions/dom-elements.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShow$: Observable<boolean> = this.store$.pipe(select(overlayIsShowSelector));

  constructor(private store$: Store) {}

  hide() {
    this.store$.dispatch(hideOverlayAction());
    this.store$.dispatch(hideNavAction());
    this.store$.dispatch(hideModalAction());
  }
}
