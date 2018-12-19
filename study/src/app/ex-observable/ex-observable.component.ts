import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ex-observable',
  templateUrl: './ex-observable.component.html',
  styleUrls: ['./ex-observable.component.css']
})
export class ExObservableComponent implements OnInit {

  combinedTotal = 0; //모두 합친 값
  // observable객체. 컴포넌트가 초기화될 때 실행되는 ngOnInit함수 내에서 초기화,구독.
  // observable객체명에 'Stream'의 의미로 달러 기호를 쓰는것이 일반적이라고함.
  private pass$: Observable<any>; 
  private run$: Observable<any>;
  teams = [];

  ngOnInit(){
    this.teams.push({passing:0, running:0, total:0});
    this.teams.push({passing:0, running:0, total:0});
    console.log(this.teams);

    // passing
    this.pass$ = new Observable(observer => {
      // this.playLoop(observer);
    })
  }


  constructor() { }

}
