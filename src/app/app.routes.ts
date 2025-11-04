import { Routes } from '@angular/router';
import { Dashboard } from '@app/dashboard/dashboard';
import { Budget } from '@app/budget/budget';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'budget', component: Budget },
];