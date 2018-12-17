import { Component } from '@angular/core';

@Component({
  selector: 'app-chap5n4',
  templateUrl: './chap5n4.component.html',
  styleUrls: ['./chap5n4.component.css']
})
export class Chap5n4Component {
  today = Date.now();
  jsonObject = [{title: "mytitle"}, {title: "Programmer"}];
  days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  wait = new Promise<string>((res, err) => {
    setTimeout(function(){
      res('wait for it...');
    },1000);
  });
  diary = new Promise<string>((res, err) => {
    setTimeout(function(){
      res('dairy');
    },2000);
  })
}
