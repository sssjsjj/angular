import { Component, OnInit } from '@angular/core';
import { PromiseService } from './promise.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-study1',
  templateUrl: './study1.component.html',
  styleUrls: ['./study1.component.css'],
  providers: [PromiseService]
})
export class Study1Component implements OnInit {
  seconds = 0;
  countNum = 0;

  constructor(private alert: PromiseService) { }

  createAlert() {
    this.showNum();
    this.alert.createTimedAlert(this.seconds);
    this.countNum = this.seconds;
  }

  showNum() {
    const startCount = setInterval( () => {
      // console.log(this.countNum);
      this.countNum -= 1;
      if (this.countNum === 0) {
        clearInterval(startCount);
      }
    }, 1000);
  }

  ngOnInit() {}


}
