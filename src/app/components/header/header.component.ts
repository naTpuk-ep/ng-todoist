import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  showModalAction,
  showNavAction, showOverlayAction,
} from '../../store/actions/dom-elements.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private store$: Store) { }

  showNav() {
    this.store$.dispatch(showNavAction());
    this.store$.dispatch(showOverlayAction());
  }

  showModal() {
    this.store$.dispatch(showModalAction());
    this.store$.dispatch(showOverlayAction());
  }

  ngOnInit(): void {
  }

}
