import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap6n3',
  templateUrl: './chap6n3.component.html',
  styleUrls: ['./chap6n3.component.css']
})
export class Chap6n3Component implements OnInit {

  myCustomClass: string = 'blueBox';
  isTrue = true;
  constructor() { }

  ngOnInit() {
  }

}
