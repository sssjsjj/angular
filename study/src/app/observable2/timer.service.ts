import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timer$: Observable<any>;
  observer;
  seconds = 0;

  constructor () {
    // subscribe 할 수 있도록 observable 인스턴스화
    this.timer$ = new Observable(observer => {
      this.observer = observer;
      this.observer.next( this.seconds );
    });
  }
  // 요기서 만든 observable 내놓기
getObservable(): Observable<any> {
  return this.timer$;
}
//  Alert 뜨는 서비스
timerAlert(seconds: number){
  setTimeout(() => {
    alert(seconds + '초 땡!');
  },((seconds * 1000) + 100));
}
//  입력한 초 카운스 시작 서비스
countSec(observer){
  const startCount =  setInterval(() => {
      this.seconds -= 1;
      if( this.seconds === 0 ) {
        clearInterval(startCount);
        this.timerAlert(this.seconds);
      }
    },1000);
    this.observer.next( this.seconds );
}

}
