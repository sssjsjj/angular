import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';
@Component({
  selector: 'app-chap10n1',
  templateUrl: './chap10n1.component.html',
  styleUrls: ['./chap10n1.component.css']
})
export class Chap10n1Component implements OnInit {
  users = [];

  constructor(private http: Http) {
    http.get('/src/app/assets/dummyDB.json').toPromise()
    .then((data) => {
        this.users = data.json();
      }).catch((err)=>{
      console.log(err); 
    });
  }

  ngOnInit() {
  }

}
