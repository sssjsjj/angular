import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class character {
  name: string;
  role: string;
  hobby: string;
  alignment: string;
  age: number;
}

@Injectable()
export class SharedService {
  characters: character[] = [
    {
      name: '정동수',
      role: '아빵',
      hobby: '허허참',
      alignment: '으른',
      age: 56
    },
    {
      name: '홍해자',
      role: '엄망',
      hobby: '블로그',
      alignment: '으른',
      age: 56
    },
    {
      name: '정수진',
      role: '하나 뿐인 딸램',
      hobby: '비미츠',
      alignment: '애깅',
      age: 28
    },
    {
      name: '정태진',
      role: '둘째 아들',
      hobby: '훈수',
      alignment: '애깅',
      age: 27
    },
    {
      name: '정호진',
      role: '막내 아들',
      hobby: '게임',
      alignment: '애깅',
      age: 10
    },
  ];

// 옵저버블 타입의 charobservable을 생성하는 메서드 정의.
// 옵저버 객체는 observer 서비스 변수에 저장. 그 후 characters 배열을 내보냄.
  charObservable: Observable<character[]>;
  observer;
  constructor() {
    this.charObservable = new Observable(observer => {
      this.observer = observer;
      this.observer.next(this.characters);
    })
   }

   getCharacters(): Observable<character[]>{
     return this.charObservable;
   }

   youngerMagic(character, younger){
     var index = this.characters.indexOf(character, 0);
      if(index > -1){
        this.characters[index].age -= younger;
        if(this.characters[index].age <= 0){
          this.characters.splice(index, 1);
        }
      } 
      this.observer.next(this.characters);
   }
}
