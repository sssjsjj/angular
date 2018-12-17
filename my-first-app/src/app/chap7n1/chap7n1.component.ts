import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap7n1',
  templateUrl: './chap7n1.component.html',
  styleUrls: ['./chap7n1.component.css']
})
export class Chap7n1Component implements OnInit {
  condition: boolean = true;
  changeCondition = function(){
    this.condition = !this.condition;
  }
  people: string[] = [
    '실장님', '태훈', '은지', '수진'
  ]
  monsters = [
    { name: 'Nessie', location: 'Loch Ness, Scotland' },
    { name: 'Bigfoot', location: 'Pacific Northwest, USA' },
    { name: 'Godzila', location: 'Tokyo, sometimes New York' }
  ]
  changeDay = function(){
    this.time = 'day';
  }
  changeNight = function(){
    this.time = 'night';
  } 
  changeDawn = function(){
    this.time = 'dawn';
  } 
  time: string = 'night';

  constructor() { }
  ngOnInit() {
  }

}
