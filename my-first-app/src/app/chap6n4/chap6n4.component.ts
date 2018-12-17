import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap6n4',
  templateUrl: './chap6n4.component.html',
  styleUrls: ['./chap6n4.component.css']
})
export class Chap6n4Component implements OnInit {
  twoColors: boolean = true;
  changeColor = function(){
    this.twoColors = !this.twoColors;
    //this 란 지금 이 컴포넌트를 말하는것같다!
  }
  myBorder = "1px solid black"

  constructor() { }

  ngOnInit() {
  }

}
