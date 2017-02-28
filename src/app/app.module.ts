import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TododeleteComponent } from './tododelete/tododelete.component';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { SearchtodoComponent } from './searchtodo/searchtodo.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotfoundComponent,
    TodolistComponent,
    TodoComponent,
    TodoDetailComponent,
    TododeleteComponent,
    TodoaddComponent,
    SearchtodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
