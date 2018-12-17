import {InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        'id': 1,
        'userName': '조대훈',
        'email': 'fake@email.com'
      },
      {
        'id': 2,
        'userName': '정수진',
        'email': 'sssjsjj@ipartners.co.kr'
      },
      {
        'id': 3,
        'userName': '김태훈',
        'email': 'email@notreal.com'
      },
      {
        'id': 4,
        'userName': '김은지',
        'email': 'dmswl@email.com'
      }
    ]
    return {users}
  }
  constructor() { }

}
