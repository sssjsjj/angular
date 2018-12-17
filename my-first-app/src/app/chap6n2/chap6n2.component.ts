import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap6n2',
  templateUrl: './chap6n2.component.html',
  styleUrls: ['./chap6n2.component.css']
})
export class Chap6n2Component implements OnInit {

    myPic: string = "http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionLeft/image.jpg/1539649284630.jpg"
    isEnabled: boolean = false;
    className: string = "myClass";
    
  constructor() { }

  ngOnInit() {
  }

}
