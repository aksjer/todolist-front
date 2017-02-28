import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';
import { Priority } from '../enums/priority';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [
    trigger('mytest', [
      state('inactive', style({
        // transform: 'scale(1)',
        marginTop: '5px',
        backgroundColor: '#eee',
        width: '2px'
      })),
      state('active', style({
        // transform: 'scale(1.1)',
        backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TodolistComponent implements OnInit {

  todolist: Todo[];
  displaydelete: boolean;

  constructor(private todoService: TodoService) { }

  state: string = 'inactive';

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAllAsync().subscribe(todolist => this.todolist = todolist);
    this.todoService.getAllAsync().subscribe(e => {
      // console.log(e)
    });
  }

  check() {
    return !this.todolist.some(e => e.selected);
  }

  add(todo: string) {
    this.todolist.push({ id: 0, title: todo, description: '', priority: Priority.high, finish: false })
  }

  selected(id: number) {
    this.todolist.find(e => e.id === id).selected = true;
  }

  unselected(id: number) {
    this.todolist.find(e => e.id === id).selected = false;
  }

  delete() {
    for (let i = this.todolist.length - 1; i >= 0; i--) {
      if (this.todolist[i].selected)
        this.todolist.splice(i, 1);
    }
  }

  searchTodo(todos: Todo[]) {
    this.todolist = todos
  }

}
