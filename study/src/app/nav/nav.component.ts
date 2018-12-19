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
      'text': 'study 1',
      'subPages': [
        {
          'url': 'study1-1',
          'text': 'study 1-1 '
        },
        {
          'url': 'ex-observable',
          'text': 'ex observable'
        },
        {
          'url': 'study1n2',
          'text': 'study 1-2'
        },
      ]
    },
    {
      'url': 'study2',
      'text': 'study 2',
      'subPages': [
        {
          'url': 'study2-1',
          'text': 'study 2-1 '
        },
        {
          'url': 'study2-2',
          'text': 'study 2-2'
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
