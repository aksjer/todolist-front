import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { Priority } from './enums/priority';
import { todoApiUrl } from '../environments/environment';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  todos: Todo[] = [
    { id: 1, title: 'buy chips', description: 'to hyper u', priority: Priority.high, finish: false },
    { id: 2, title: 'doctor', description: 'date!', priority: Priority.low, finish: true },
    { id: 3, title: 'radio', description: 'rdv!', priority: Priority.normal, finish: false },
    { id: 3, title: 'stromae', description: 'alors on danse!', priority: Priority.normal, finish: false },
    { id: 3, title: 'ecluzelles', description: 'picnic!', priority: Priority.normal, finish: false },
    { id: 3, title: 'coiffeur', description: 'se faire couper les cheveux!', priority: Priority.normal, finish: false },
  ];

  getAllAsync(): Observable<Todo[]> {
    // return this.http
    //   .get(`${todoApiUrl}/todos`)
    //   .map(e => e.json() as Todo[])
    return Observable.create(observer =>
      observer.next(this.todos));

  }

  getAsync(id: number): Observable<Todo> {
    return Observable.create(observer =>
      observer.next(this.todos.find(t => t.id === id)));
  }

  putAsync(todo: Todo) {
    const old = this.todos.find(t => t.id === todo.id);
    old.title = todo.title;
    old.description = todo.description;
    old.priority = todo.priority;
    old.finish = todo.finish;
  }

}
