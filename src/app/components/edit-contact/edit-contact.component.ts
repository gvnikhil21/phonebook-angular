import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'pb-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private service: PhonebookService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getContactDetails(params['id'])
        .subscribe(contact => {
          this.contactForm.setValue({ ...contact })
        });
    });
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(),
      gender: new FormControl(),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,12}$/)]),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      picture: new FormControl(),
      dob: new FormControl(),
    });
  }

  saveChanges() {
    this.service.updateContact(this.contactForm.value)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id]);
      });
  }
}
