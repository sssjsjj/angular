import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = '';
  constructor(private route: ActivatedRoute, private router: Router,) {
  }
  gotoPage2(){
    this.router.navigate(
      ['/route2', this.text],
      {
        relativeTo: this.route,
        skipLocationChange: true
      }
    )
  }

  ngOnInit() {
  }

}
