import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority } from '../enums/priority';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent implements OnInit {

  @Output() event = new EventEmitter();
  title: string;
  description: string;
  priority: Priority;
  finish: boolean;

  constructor() { }

  ngOnInit() {
  }

  keys(): string[] {
    const keys = Object.keys(Priority);
    const lng = keys.length;
    return keys.slice(lng / 2, lng);
  }

  add() {
    console.log(this.title, this.description, this.priority, this.finish)
  }

}
