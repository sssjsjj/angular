import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap9n1',
  templateUrl: './chap9n1.component.html',
  styleUrls: ['./chap9n1.component.css']
})
export class Chap9n1Component implements OnInit {
  text: string = '';
  eventHandler(event: any){
    this.text = event;
  }


  constructor() { }
  ngOnInit() {
  }

}
