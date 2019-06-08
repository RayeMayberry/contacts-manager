import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getContacts().subscribe(data=>{
      const contacts = data;
    })
  }

}

