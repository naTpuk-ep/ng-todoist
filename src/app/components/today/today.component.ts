import { Component, OnInit } from '@angular/core';
import { ITodoItem, ITodosState } from '../../store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { setTodosSelector } from '../../store/selectors/todos.selector';
import { setTodosAction } from '../../store/actions/todos.actions';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {

  exTodoList: ITodoItem[] = [
    {
      title: '1',
      date: new Date(),
      complete: false
    },
    {
      title: '2',
      date: new Date(),
      complete: false
    },
  ];

  todoList: ITodoItem[] = [];

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.select(setTodosSelector)
      .subscribe(todos => this.todoList = todos);
    this.store$.dispatch(setTodosAction({
      todos: this.exTodoList
    }));
  };

}
