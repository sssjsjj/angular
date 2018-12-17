import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input('tabTitle') title: string;
  @Input('tabUrl') url: string;
@Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
