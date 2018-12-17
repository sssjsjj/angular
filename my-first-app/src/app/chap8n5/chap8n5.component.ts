import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chap8n5',
  templateUrl: './chap8n5.component.html',
  styleUrls: ['./chap8n5.component.css']
})
export class Chap8n5Component implements OnInit {
  images: any = [
    {
      src: "http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionLeft/image.jpg/1539649284630.jpg",
      title: "angels Landing",
      description: "A natural wonder in Zion National Park Utha, USA"
    },
    {
      src: 'http://www.sulwhasoo.com/kr/ko/_jcr_content/banner/image2.jpg/1536730625840.jpg',
      title: 'Tikal',
      description: 'mayan Ruins, Tikal Guatemala'
    },
    {
      src:'http://www.sulwhasoo.com/kr/ko/_jcr_content/promotionRight/image.jpg/1536801602222.jpg',
      title: 'Tikal',
      description: 'mayan Ruins, Tikal Guatemala'
    }
  ]


  constructor() { }
  ngOnInit() {
  }

}
