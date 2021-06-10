import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { navIsShowSelector } from '../../store/selectors/dom-elements.selector';
import {
  hideNavAction,
  hideOverlayAction,
} from '../../store/actions/dom-elements.actions';
import { RoutesPaths } from '../../routes';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef | undefined;

  // isShow = false;
  isShow$: Observable<boolean> = this.store$.pipe(select(navIsShowSelector));
  routePaths = RoutesPaths;

  constructor(private store$: Store) {
    // this.isShow$.subscribe(value => {
    //   this.isShow = value;
    // })
  }

  closeNav() {
    this.store$.dispatch(hideNavAction());
    this.store$.dispatch(hideOverlayAction());
  }

  ngOnInit(): void {
    console.log(this.nav);
  }

}
