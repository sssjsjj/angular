import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chap9n1sub',
  templateUrl: './chap9n1sub.component.html',
  styleUrls: ['./chap9n1sub.component.css']
})
export class Chap9n1subComponent implements OnInit {
  private message ='';

  @Output() sEvent: EventEmitter<any> = new EventEmitter();

  clicked(){
    this.message = "you've made a cusom event";
    this.sEvent.emit(this.message);
  }

  mouseleave(){
    this.message="";
    this.sEvent.emit(this.message);
  }
  constructor() { }
  ngOnInit() {
  }

}
