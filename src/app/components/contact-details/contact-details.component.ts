import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import swal from 'sweetalert';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact()

  constructor(private service: PhonebookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData["id"])
        .subscribe(data => this.contact = data);
    });
  }

  deleteContact() {
    swal({
      title: " You are about to delete this contact",
      text: "Please confirm",
      icon: "warning",
      buttons:
      {
        pos: {
          text: "Yes, Delete contact",
          value: true
        },
        neg: {
          text: "Cancel",
          value: false,
          className: "neg"
        }
      }
    })
      .then(result => {
        if (result === true) {
          this.service.deleteContact(this.contact.id)
            .subscribe(() => {
              this.router.navigate(["/contact-list"]);
            });
        }
      });
  }

  // trying out sweetalert functions

  // testSwal() {
  // swal("Hello");
  // swal("phonebook App", "Hello fff", "success")   ----> success, warning
  //   swal({
  //     title: "Phonebook App",
  //     icon: "info",
  //     text: "You are in th contact-details page"
  //   });
  // }

}
