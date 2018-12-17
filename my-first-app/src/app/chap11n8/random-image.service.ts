import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RandomImageService {
  imageChange: Observable<any>;
  private images = [
    {
      url: 'http://www.hanyul.co.kr/product/mentha-trouble-foam/_jcr_content/meta/indeximage.img.jpg/1529029525810.jpg',
      title: "한율 산들박하 트러블폼"
    },
    {
      url: 'http://www.hanyul.co.kr/product/tristige_emulsion/_jcr_content/meta/indeximage.img.jpg/1529030199839.jpg',
      title: "한율 극진 에멀전"
    },
    {
      url: 'http://www.hanyul.co.kr/product/seoritae-skin-refining-essence/_jcr_content/meta/indeximage.img.jpg/1529030402924.jpg',
      title: "서리태 새결 에센스"
    },
    {
      url: 'http://www.hanyul.co.kr/product/yuja-face-oil/_jcr_content/meta/indeximage.img.jpg/1537433937531.jpg',
      title: "달빛유자 페이스 오일"
    },
    {
      url: 'http://www.hanyul.co.kr/product/rice-essential-eye-cream/_jcr_content/meta/indeximage.img.jpg/1529030578941.jpg',
      title: "한율 쌀 진액 아이크림"
    },
    {
      url: 'http://www.hanyul.co.kr/product/yuja-oil-sheet-mask/_jcr_content/meta/indeximage.img.jpg/1537433960490.jpg',
      title: "한율 달빛유자 시트 마스크"
    }
  ]

  //imageChange 옵저버블을 초기화 하고 changeLoop 메서드를 호출하면서 observer를 받는 changeLoop 메서드를 정의한다.
  constructor() {
    this.imageChange = new Observable(observer => {
      this.changeLoop(observer);
    });
  }
  changeLoop(observer){
    setTimeout(() => {
      let imgIndex = this.getRandom(0,6);
      let image = this.images[imgIndex];
      observer.next(
        {
          url: image.url,
          title: image.title,
          width: this.getRandom(200,400)
        }
      );
      this.changeLoop(observer);
    }, this.getRandom(1000,3000));
  }
  getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomImage(): Observable<any>{
    return this.imageChange;
  }
}
