import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap7n2',
  templateUrl: './chap7n2.component.html',
  styleUrls: ['./chap7n2.component.css']
})
export class Chap7n2Component implements OnInit {
  colors: string[] = ['red', 'blue', 'green', 'yellow'];
  name: string;
  color: string = 'color';
  isDisabled: boolean = true;
  classes: string[] = ['bold', 'italic', 'highlight'];
  selectedClass:string[] = [];
  enabler(){
    this.isDisabled = !this.isDisabled;
  }
  addClass(event: any){
    this.selectedClass = [];
    var value = event.target.options;
    var opt: any;

    for (var i=0, iLen = value.length; i<iLen; i++){
      opt = value[i];
      if(opt.selected){
        this.selectedClass.push(opt.text);
      }
    }
  }

  constructor() { }
  ngOnInit() {
  }

}
