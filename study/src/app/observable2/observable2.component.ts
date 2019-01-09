import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from './timer.service'
@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {
  seconds = 0;
  timer$: Observable<any>;

  constructor(private timer: TimerService) { 
  }

  startAlert() {
    this.timer$ = new Observable(observer => {
      this.countSec(observer);
    });
    this.timer$.subscribe(
      num => {
        this.seconds = num.seconds;
      }
    );
  }
  
  countSec(observer){
    const startCount =  setInterval(() => {
        this.seconds -= 1;
        if( this.seconds === 0 ){
          clearInterval(startCount);
          this.timer.timerAlert(this.seconds);
        }
      },1000);
  }

keyCheck(event){
    event.preventDefault();
    this.startAlert();
    console.log('요 키첵');
}

  ngOnInit() {}


}
