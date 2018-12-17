import { InMemoryDbService } from 'angular-in-memory-web-api';


export class dataName implements InMemoryDbService {

createDb() {
  const users = [
    {
      'id': 1,
      'userName': 'brendan',
      'email': 'fake1@email.com'
    },
    {
      'id': 2,
      'userName': 'john',
      'email': 'fake2@email.com'
    },
    {
      'id': 3,
      'userName': 'suzan',
      'email': 'fake3@email.com'
    }
  ];

  return {users};
}

}
