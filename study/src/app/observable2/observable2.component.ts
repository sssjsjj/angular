import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from './timer.service';
@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css'],
  providers: [ TimerService ]
})
export class Observable2Component implements OnInit {
  timer$: Observable<any>;

  get seconds() {
    return this.timer.seconds;
  }
  set seconds(value) {
    this.timer.seconds = value;
  }

  constructor(private timer: TimerService) { 
  }

  startAlert() {
    this.timer$ = this.timer.getObservable(); // 서비스의 timer$ 가지오기.
    this.timer.countSec(this.timer.observer); // 클릭하면 타이머 서비스 시작이야
    this.timer$.subscribe( // 타이머에서 뱉어내는 seconds값 구독해
      seconds => {
        this.seconds = seconds; // 여기서 말했던 seconds가 그 서비스의 seconds야
      }
    );
  }

// keyCheck(event){
//     event.preventDefault();
//     this.timer.startAlert();
//     console.log('요 키첵');
// }

  ngOnInit() {}


}
