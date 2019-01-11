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
export class UserService {
  url = 'api/characters';

  charObservable$: Observable<Character[]>;

   constructor(public http: Http) {}

   getCharacters(): Observable<any[]> {
     return this.http.get( this.url ).pipe( map( res => res.json() ) );
   }
}
