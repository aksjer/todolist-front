import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TododeleteComponent } from './tododelete/tododelete.component';

export const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'todolist', component: HomeComponent },
  {
    path: 'todo',
    children: [
      { path: ':id', component: TodoDetailComponent },
      { path: ':id/delete', component: TododeleteComponent }

    ]
  },


  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];