import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap9n4',
  templateUrl: './chap9n4.component.html',
  styleUrls: ['./chap9n4.component.css']
})
export class Chap9n4Component implements OnInit {

  character = null;
characters = [
  {name:'조대훈', weapon: '핵', position: '부장님'},
  {name:'정수진', weapon: '폭탄', position: '사원1'},
  {name:'김태훈', weapon: '총', position: '사원2'},
  {name:'김은지', weapon: '칼', position: '사원3'},
]

selectCharacter(character){
  this.character = character;
}

deleteChar(event){
  var index = this.characters.indexOf(event);
  if(index > -1){
    this.characters.splice(index, 1);
  }
  this.character = null;
}

  constructor() { }
  ngOnInit() {
  }

}
