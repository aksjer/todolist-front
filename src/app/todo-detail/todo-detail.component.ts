import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap(params => this.todoService.getAsync(+params['id']))
      .subscribe(todo => this.todo = todo);
  }

}
