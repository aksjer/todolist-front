import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() event: EventEmitter<{}> = new EventEmitter();
  @Output() event2: EventEmitter<{}> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }


  detail() {
    this.router.navigate(['todo', this.todo.id]);
  }

  delete() {
    this.router.navigate(['todo', this.todo.id, 'delete'])
  }

  changed(e) {
    e.checked ? this.event.emit(this.todo.id) : this.event2.emit(this.todo.id)

  }

}
