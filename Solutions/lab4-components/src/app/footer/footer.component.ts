import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  msg = "We use cookies to provide and improve our services. By using our site, you consent to our Cookies Policy. ";

  constructor() { }

  ngOnInit() {
  }

}
