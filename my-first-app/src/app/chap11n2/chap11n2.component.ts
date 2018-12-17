import { Component, OnInit } from '@angular/core';
import { PiService } from './pi.service';

@Component({
  selector: 'app-chap11n2',
  templateUrl: './chap11n2.component.html',
  styleUrls: ['./chap11n2.component.css'],
  providers: [ PiService ]
})
export class Chap11n2Component implements OnInit {
  pi: number;
  
  constructor(private PiService: PiService) {}

  ngOnInit() {
    this.pi = this.PiService.getPi();
  }

}
