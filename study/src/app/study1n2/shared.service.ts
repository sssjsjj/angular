import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { UserService } from '../study1n2/user.service';


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
  characters: Character[];
  observer;
  charObservable$: Observable<Character[]>;

   constructor( private http: Http) {
     this.charObservable$ = new Observable( observer => {
       this.observer = observer;
       this.observer.next(this.characters);
     })
   }

   getCharacters(): Observable<any[]> {
     return this.http.get( this.url ).pipe( map( res => res.json() ) );
   }

   getGet(): void {
      
   }

  //  youngerMagic(character, younger) {
  //   console.log( character );
  //       character.age -= younger;
  //       if (character.age <= 0) {
  //         character.splice(character.indexOf, 1);
  //       }
  //       const url = '${this.url}/${character.id}';
  //       return this.http.put(url, JSON.stringify(character));
  //  }

  //  기존 소스
   youngerMagic(character, younger) {
    const index = this.characters.indexOf(character, 0);
     if (index > -1) {
       this.characters[index].age -= younger;
       if (this.characters[index].age <= 0) {
         this.characters.splice(index, 1);
       }
     }
     const url = '${this.url}/${character.id}';
     return this.http.put(url, JSON.stringify(character));
  }

   handleError(error): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
