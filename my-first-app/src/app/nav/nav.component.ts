import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sub5s = [
    {
      'url': 'chap5n1',
      'text': 'example 1'
    },
    {
      'url': 'chap5n2',
      'text': 'example 2'
    },
    {
      'url': 'chap5n3',
      'text': 'example 3'
    },
    {
      'url': 'chap5n4',
      'text': 'example 4'
    },
  ];
  sub6s = [
    {
      'url': 'chap6n1',
      'text': 'example 1'
    },
    {
      'url': 'chap6n2',
      'text': 'example 2'
    },
    {
      'url': 'chap6n3',
      'text': 'example 3'
    },
    {
      'url': 'chap6n4',
      'text': 'example 4'
    },
    {
      'url': 'chap6n5',
      'text': 'example 5'
    },
    {
      'url': 'chap6n6',
      'text': 'example 6'
    },
  ];
  sub7s = [
    {
      'url': 'chap7n1',
      'text': 'example 1'
    },
    {
      'url': 'chap7n2',
      'text': 'example 2'
    },
  ];
  sub8s = [
    {
      'url': 'chap8n1',
      'text': 'example 1'
    },
    {
      'url': 'chap8n5',
      'text': 'example 2'
    },
  ];
  sub9s = [
    {
      'url': 'chap9n1',
      'text': 'example 1'
    },
    {
      'url': 'chap9n4', 
      'text': 'example 2'
    },
    {
      'url': 'chap9n10',
      'text': 'example 3'
    },
  ];
  sub10s = [
    {
      'url': 'chap10n1',
      'text': 'example 1'
    },
    {
      'url': 'chap10n7',
      'text': 'example 2'
    },
    {
      'url': 'chap10n12',
      'text': 'example 3',
    },
  ];
  sub11s = [
    {
      'url': 'chap11n2',
      'text': 'example 1',
    },
    {
      'url': 'chap11n4',
      'text': 'example 2',
    },
    {
      'url': 'chap11n8',
      'text': 'example 3',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  // defaultTab(tab: Tab) {
  //   this.tabs.toArray().forEach(tab => tab.active = false);
  // }
}
