import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-chap10n12',
  templateUrl: './chap10n12.component.html',
  styleUrls: ['./chap10n12.component.css'],
  providers: [UserService]
})
export class Chap10n12Component implements OnInit {
  users = [];
  selectedUser;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.UserService.getUsers().then(users => this.users = users);
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  updateUser(user) {
    this.selectedUser = null;
    this.UserService.updateUser(user).then(() => this.getUsers());
  }

}
