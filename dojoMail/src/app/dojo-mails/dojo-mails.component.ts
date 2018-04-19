import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dojo-mails',
  templateUrl: './dojo-mails.component.html',
  styleUrls: ['./dojo-mails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DojoMailsComponent implements OnInit {
emails: any
  constructor() { 
    this.emails = [
      {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Windows XI will launch in 2100.'},
      {email: 'ada@lovelace.com', important: true, subject: 'Programming', content: 'Echantress of Numbers.'},
      {email: 'john@carmac.com', important: false, subject: 'Updated Algo', content: 'New Algorithm for shadow volumes.'},
      {email: 'gabe@gates.com', important: false, subject: 'HL3!', content: 'Just kidding...'}
    ]

  }
  
  ngOnInit() {
  }

}
