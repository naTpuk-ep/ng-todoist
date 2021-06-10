import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  modalIsShowSelector,
  navIsShowSelector,
} from '../../store/selectors/dom-elements.selector';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form: FormGroup | undefined
  isShow$: Observable<boolean> = this.store$.pipe(select(modalIsShowSelector));

  constructor(private store$: Store) { }

  submitHandler() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

}
