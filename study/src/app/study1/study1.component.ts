import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({ 
  selector: 'app-study1',
  templateUrl: './study1.component.html',
  styleUrls: ['./study1.component.css'],
  providers: [UserService]
})
export class Study1Component implements OnInit {
users = [];
selectedUser;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.UserService.getUsers()
    .then(users => this.users = users);
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  updateUser(user) {
    this.selectedUser = null;
    this.UserService.updateUser(user)
    .then(() => this.getUsers());
  }
}
