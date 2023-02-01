import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { map } from 'rxjs/operators';

// const baseUrl = "http://phonebook-jellyfish.surge.sh/";
const baseUrl = "http://localhost:3000/contacts";

// npm install rxjs-compat

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getContactDetails(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id).pipe(map(data => data as Contact));
  }

  addNewContact(contact: Contact): Observable<Contact> {
    return this.http.post(baseUrl, contact).pipe(map(data => data as Contact));
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(baseUrl + contact.id, contact).pipe(map(data => data as Contact));
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }

  getAllContacts(pageNumber: number = 1): Observable<Contact[]> {
    let param = {
      "_page": "" + pageNumber
    }
    return this.http.get(baseUrl, { params: param }).pipe(map(resp => resp as Contact[]));
  }

}
