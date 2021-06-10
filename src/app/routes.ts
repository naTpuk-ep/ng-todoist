import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TodayComponent } from './components/today/today.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export enum RoutesPaths {
  MAIN = '',
  TODAY = 'today',
  NOT_FOUND = '**'
}

export const appRoutes: Routes = [
  {
    path: RoutesPaths.MAIN,
    component: MainComponent,
  },
  {
    path: RoutesPaths.TODAY,
    component: TodayComponent,
  },
  {
    path: RoutesPaths.NOT_FOUND,
    component: NotFoundComponent,
  },
];
