import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: '[container]',
  templateUrl: './chapt8n5sub.component.html',
  styleUrls: ['./chapt8n5sub.component.css']
})
export class Chapt8n5subComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;


  constructor() { }
  ngOnInit() {
  }

}
