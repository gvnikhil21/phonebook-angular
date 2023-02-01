import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component'
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",   // to ensure empty string is the only thing in the path 
    redirectTo: "home"   // redirects to home when it matches "" (empty string) but empty string is part of every path
    // component: HomeComponent   ---- or you can type component with which component you want
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact-list",
    component: ContactListComponent
  },
  {
    path: "contact-details/:id",
    component: ContactDetailsComponent
  },
  {
    path: "add-contact",
    component: AddContactComponent
  },
  {
    path: "edit-contact/:id",
    component: EditContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ContactDetailsComponent,
    FullnamePipe,
    AgePipe,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
