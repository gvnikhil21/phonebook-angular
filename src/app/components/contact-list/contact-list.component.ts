import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import * as $ from 'jquery';


@Component({
  selector: 'pb-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  pageNumber: number = 1;

  constructor(private service: PhonebookService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllContacts()
      .subscribe(data => this.contacts = data);

    $(window).on("scroll", () => {
      let w = $(window);
      let d = $(document);
      if (Number(w.height()) + Number(w.scrollTop()) === Number(d.height())) {
        this.loadMore();
      }
    });

  }

  loadMore() {
    this.pageNumber++;
    this.service.getAllContacts(this.pageNumber)
      .subscribe(data => this.contacts = [...this.contacts, ...data]);  // ... => spread operator, creates a new array
    // .subscribe(data=>this.contacts.push(...data)) => this can also be used
  }


  deleteContact(id: number) {
    //   if (!confirm("Are you sure?")) {
    //     return;
    //   }
    //   this.service.deleteContact(id)
    //     .subscribe(data =>{
    //       this.contacts = this.contacts.filter(con => con.id != (data as Contact).id);
    //     });
  }
}
