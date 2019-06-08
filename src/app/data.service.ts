import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get('localhost:1234/categories');
  }

  getCompanies(){
    return this.http.get('localhost:1234/companies');
  }

  getContacts(){
    return this.http.get('localhost:1234/contacts');
  }

}
