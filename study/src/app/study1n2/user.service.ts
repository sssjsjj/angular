import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'api/characters';
  constructor(private http: Http) { }

  getData(): Promise<any[]> {
    return this.http.get(this.url).toPromise()
    .then(response => response.json())
    .catch();
  }
}
