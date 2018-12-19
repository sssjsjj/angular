import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-study1n2',
  templateUrl: './study1n2.component.html',
  styleUrls: ['./study1n2.component.css'],
  providers: [ SharedService ]
})
export class Study1n2Component implements OnInit {
  //sharedservice html에서 사용하기 위해 shared변수에 할당.
  constructor(public shared: SharedService) { }

  ngOnInit() {
  }

}
