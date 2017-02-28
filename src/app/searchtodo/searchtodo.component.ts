import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-searchtodo',
  templateUrl: './searchtodo.component.html',
  styleUrls: ['./searchtodo.component.css']
})
export class SearchtodoComponent implements OnInit {
  @Output() event = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.event.emit(this.todoService.todos.filter(e => e.title.includes(term)));
  }

}
