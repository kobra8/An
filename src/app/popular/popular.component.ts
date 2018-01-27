import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'app/contacts.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  private contacts: any[];

  constructor(
    private _contactsService: ContactsService
  ) { 
    this.contacts = _contactsService.getContacts().slice(0,3);
  }

  ngOnInit() {
  }

}
