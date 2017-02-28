import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tododelete',
  templateUrl: './tododelete.component.html',
  styleUrls: ['./tododelete.component.css']
})
export class TododeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('delete');
  }

}
