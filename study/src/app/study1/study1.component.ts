import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study1',
  templateUrl: './study1.component.html',
  styleUrls: ['./study1.component.css']
})
export class Study1Component implements OnInit {
  seconds = 0;
  countNum = 0;

  constructor() { }


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
