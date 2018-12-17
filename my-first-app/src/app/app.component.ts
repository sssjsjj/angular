import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: [ '/app.component.css' ]
})
export class AppComponent {
  title = 'Using Inputs in Angular';
  phrase: string = 'This bad phrase is rotten This bad phrase is rotten This bad phrase is rotten';
}