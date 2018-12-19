import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'study';
  my_menu = {
    'main1': ['sub1', 'sub2'],
    'main2': ['sub1', 'sub2'],
  }
}
