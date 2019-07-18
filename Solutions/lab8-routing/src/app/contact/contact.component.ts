import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string
  msg = ""

  constructor() { }

  ngOnInit() {
  }
  
  enter() { 
    this.msg=`Thank you ${this.email} for leaving your email!`;
    // To Do!  Give email to someone who cares.... 
  }



}
