import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap6n1',
  templateUrl: './chap6n1.component.html',
  styleUrls: ['./chap6n1.component.css']
})
export class Chap6n1Component implements OnInit {

  str1: string = "Hello my name is";
  name: string = "brendan";
  str2: string = "I like to";
  likes: string[] = ['hike', 'rappel', 'Jeep']
  getLikes = function(arr:any){
    var arrString = arr.join(', ');
    return ' ' + arrString
  }
  imageSrc: string = "http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionLeft/image.jpg/1539649284630.jpg"

  constructor() { }

  ngOnInit() {
  }

}
