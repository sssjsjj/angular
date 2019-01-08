import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  pages = [
    {
      'url': 'study1',
      'text': 'http',
      'subPages': [
        {
          'url': 'study1',
          'text': 'http 예제'
        },
        {
          'url': 'study1n2',
          'text': '공유 서비스 예제'
        },
      ]
    },
    {
      'url': 'observable1',
      'text': 'observable',
      'subPages': [
        {
          'url': 'observable1',
          'text': '교재 예제'
        },
        {
          'url': 'observable2',
          'text': '타이머(과제)'
        },
      ]
    },
    {
      'url': 'study3',
      'text': 'study 3',
      'subPages': [
        {
          'url': 'study3-1',
          'text': 'study 3-1 '
        },
        {
          'url': 'study3-2',
          'text': 'study 3-2'
        },
      ]
    },
    {
      'url': 'study4',
      'text': 'study 4',
      'subPages': [
        {
          'url': 'study4-1',
          'text': 'study 4-1 '
        },
        {
          'url': 'study4-2',
          'text': 'study 4-2'
        },
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
