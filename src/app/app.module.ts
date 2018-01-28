import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialCustomModule } from './materialCustom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { ContactsService } from './contacts.service';

const routes: Routes =[
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialCustomModule
  ],
  providers: [
    ContactsService
  ],
  entryComponents: [
    AddContactDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
