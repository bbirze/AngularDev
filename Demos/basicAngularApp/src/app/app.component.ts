import { Component } from '@angular/core';

@Component({                  // Angular Decorator
  selector: 'app-root',
  template: `
    <h3>Subscribe for Updates!</h3>
    <input type = "text" [(ngModel)]="email" />
    <button (click)="subscribe()">Subscribe</button>
    <p>{{msg}}</p>
    <app-bindings></app-bindings>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string
  msg = "Enter email and hit 'Subscribe'."
  subscribe() { this.msg = this.email + " is now subscribed!"; }
}
