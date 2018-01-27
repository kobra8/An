import { Component, OnInit, Inject } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private contacts: any[];

  constructor(
    private _contactsService: ContactsService,
    public dialog: MatDialog
  ) { 
    this.contacts = _contactsService.getContacts();
  }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddContactDialog);
    dialogRef.afterClosed().subscribe(x => {
      if(x) {
        this.contacts.push(x);
      }
    })
  }

}

@Component({
  selector: 'add-contact-dialog',
  template: `
  <h1 mat-dialog-title>Add contact</h1>
  <mat-form-field>
    <input matInput #contactName placeholder="Contact name">
  </mat-form-field>
  <mat-form-field>
    <input matInput #contactNumber placeholder="Contact number">
  </mat-form-field>
  <button mat-raised-button color="primary"
  (click)="dialogRef.close({
    name: contactName.value,
    number: contactNumber.value
  })"
  >Save</button>
  <button mat-raised-button (click)="dialogRef.close()">
  Close
  </button>
  `
})

export class AddContactDialog {

  constructor(
    public dialogRef: MatDialogRef<AddContactDialog>,@Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  save() {
    
  }
}
