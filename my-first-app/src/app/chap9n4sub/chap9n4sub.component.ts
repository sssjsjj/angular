import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chap9n4sub',
  templateUrl: './chap9n4sub.component.html',
  styleUrls: ['./chap9n4sub.component.css']
})
export class Chap9n4subComponent implements OnInit {
  @Input('character') character: any;
  @Output() CharacterDeleted = new EventEmitter<any>();

  deleteChar(){
    this.CharacterDeleted.emit(this.character);
  }


  constructor() { }
  ngOnInit() {
  }

}
