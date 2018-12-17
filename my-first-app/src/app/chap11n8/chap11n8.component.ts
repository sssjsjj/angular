import { Component, OnInit } from '@angular/core';
import { RandomImageService } from './random-image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chap11n8',
  templateUrl: './chap11n8.component.html',
  styleUrls: ['./chap11n8.component.css'],
  providers: [RandomImageService]
})
export class Chap11n8Component implements OnInit {
  title = 'app';
  randomImage: Observable<any>;
  imageInfo: any;
  imageHistory: any[];
  
  constructor(private randomImages: RandomImageService) {
    this.imageInfo = {
      url: '',
      title: 'Loading. . . ',
      width: 400
    };
    this.imageHistory = [];
  }

  ngOnInit() {
    this.randomImage = this.randomImages.getRandomImage();
    this.randomImage.subscribe(
      imageData => {
        this.imageInfo = imageData;
        this.imageHistory.push(imageData);
      }
    )
  }

}
