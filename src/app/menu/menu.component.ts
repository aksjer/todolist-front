import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  authenticate() {
    this.userService.authenticate().subscribe(e => {
      // debugger
    })
  }

  test() {
    this.userService.test().subscribe(() => { })
  }

  logout() {
    this.userService.logout();
  }

}
