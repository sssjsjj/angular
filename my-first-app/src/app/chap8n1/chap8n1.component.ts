import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap8n1',
  templateUrl: './chap8n1.component.html',
  styleUrls: ['./chap8n1.component.css']
})
export class Chap8n1Component implements OnInit {

  images: string[] = [
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionLeft/image.jpg/1539649284630.jpg',
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/banner/image2.jpg/1536730625840.jpg',
    'http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionRight/image.jpg/1536801602222.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
