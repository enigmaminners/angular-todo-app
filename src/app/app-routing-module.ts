import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { FormsPage } from './components/forms-page/forms-page';
import { TodoApp } from './components/todo-app/todo-app';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'forms',
    component: FormsPage,
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoApp,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
