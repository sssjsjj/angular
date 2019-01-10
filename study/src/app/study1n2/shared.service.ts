import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


export class Character {
  name: string;
  role: string;
  hobby: string;
  alignment: string;
  age: number;
}

@Injectable()
export class SharedService {
  url = 'api/characters';
  characters = [];

// 옵저버블 타입의 charobservable을 생성하는 메서드 정의.
// 옵저버 객체는 observer 서비스 변수에 저장. 그 후 characters 배열을 내보냄.
  charObservable: Observable<Character[]> ;
  observer;
  constructor(public http: Http) {
    this.charObservable = new Observable(observer => {
      this.observer = observer;
      // this.observer.next(this.characters);
      this.http
      .get( this.url ).pipe( map( res => res.json() ) );
    })
   }

   getCharacters(): Observable<Character[]>{
     return this.charObservable;
    //  return this.http
    //   .get( this.url ).pipe( map( res => res.json() ) );
   }
  // getCharacters(): Promise<any[]> {
  //   return this.http.get(this.url).toPromise()
  //   .then(response => response.json())
  //   .catch(this.handleError);
  // }

   youngerMagic(character, younger) {

     const index = this.characters.indexOf(character, 0);
      if (index > -1) {
        this.characters[index].age -= younger;
        if (this.characters[index].age <= 0) {
          this.characters.splice(index, 1);
        }
      }
      this.observer.next(this.characters);
   }

   handleError(error): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
