import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs';
import {Chap10n72Service} from './chap10n7-2.service';

@Component({
  selector: 'app-chap10n7',
  templateUrl: './chap10n7.component.html',
  styleUrls: ['./chap10n7.component.css'],
  providers: [Chap10n72Service]
})
export class Chap10n7Component implements OnInit {
  users = [];
  selectedUser;

  constructor(private Chap10n72Service: Chap10n72Service) {  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void{
    this.Chap10n72Service.getUsers().then(users => this.users = users)
  }

  deleteUser(user){
    this.Chap10n72Service.deleteUser(user.id)
      .then(()=> {
        this.getUsers();
      })
  }
  createUser(userName, email){
    this.selectedUser = null;
    let user = {
      'userName': userName.trim(),
      'email': email.trim()
    };
    if (!user.userName || !user.email){
      return;
    }
    this.Chap10n72Service.createUser(user)
      .then(res =>{
        this.users.push(res)
      })
  }
}
