import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const users = [
     {
        'id': 1,
        'userName': 'brendan',
        'email': 'fake@email.com'
      },
      {
        'id': 2,
        'userName': 'brad',
        'email': 'email@notreal.com'
      },
      {
        'id': 3,
        'userName': 'caleb',
        'email': 'dummy@email.com'
      }
    ];

    const characters = [
      {
        id: 1,
        name: '정동수',
        role: '아빵',
        hobby: '허허참',
        alignment: '으른',
        age: 56
      },
      {
        id: 2,
        name: '홍해자',
        role: '엄망',
        hobby: '블로그',
        alignment: '으른',
        age: 56
      },
      {
        id: 3,
        name: '정수진',
        role: '하나 뿐인 딸램',
        hobby: '비미츠',
        alignment: '애깅',
        age: 28
      },
      {
        id: 4,
        name: '정태진',
        role: '둘째 아들',
        hobby: '훈수',
        alignment: '애깅',
        age: 27
      },
      {
        id: 5,
        name: '정호진',
        role: '막내 아들',
        hobby: '게임',
        alignment: '애깅',
        age: 10
      },
    ];
    return {users, characters};
  }
}