import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setTodosAction } from './store/actions/todos.actions';
import { map } from 'rxjs/operators';
import { ITodoItem } from './store/reducers/todos.reducer';


@Injectable()
export class AppEffects {

  // todos$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(setTodos),
  //     map(() => setTodos({
  //       todos: this.exTodoList,
  //     })),
  //   ),
  //   { dispatch: false },
  // );


  constructor(private actions$: Actions) {}
}
