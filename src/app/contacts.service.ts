import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    let contacts: IContact[] = [
      {
      name: 'Janez',
      number: '321456789'
    },
      {
      name: 'Ana',
      number: '1236789'
    },
      {
      name: 'John',
      number: '321987789'
    },
      {
      name: 'Jasmine',
      number: '987656789'
    },
  ]
  return contacts;
  }

}
