import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-chap6n5',
  templateUrl: './chap6n5.component.html',
  styleUrls: ['./chap6n5.component.css']
})
export class Chap6n5Component implements OnInit {
  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValue: string = '';
  x: string = '';
  y: string = '';
  sameVal: string = '';
  view: string = '';

  mouseGoesIn = function() {
    this.mouse = 'entered';
  };
  mouseLeft = function(){
    this.mouse = 'left';
  };
  imageArray: string[] = [
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionLeft/image.jpg/1539649284630.jpg',
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/banner/image2.jpg/1536730625840.jpg',
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionRight/image.jpg/1536801602222.jpg',
  ];
  imageUrl: string = this.imageArray[this.counter];
  changeImg = function() {
    if(this.counter < this.imageArray.length -1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    this.imageUrl = this.imageArray[this.counter];
  };
  onKeyup(event:any){
    this.upValues = event.key;
    //this.upValues += event.target.value + ' | ';
  }
  onKeydown(event:any){
    // this.downValues = event.key;
    this.downValues = event.target.value;
  }
  keypress(event:any){
    this.keypressValue = event.key;
    this.sameVal = event.target.value;
  }
  move(event:any){
    this.x = event.clientX;
    this.y = event.clientY;
  }
  underTheScope(event:any){
    if(event.type == "focus"){
      this.view = "the text box is focused";
    }else if(event.type == "blur"){
        this.view = "the input box is blurred";
    }
    console.log(event);
  }



  constructor() { }
  ngOnInit() { }

}
