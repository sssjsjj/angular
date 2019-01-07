import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerAlert(seconds: number){
    setTimeout(() => {
      alert(seconds + '초 땡!');
    },((seconds * 1000) + 100));
  }

}
