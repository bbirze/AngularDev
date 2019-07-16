import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
})
export class BindingsComponent {
  days: number = 365
  unit: string  = "days"
  today: Date = new Date()

  getText() : string { return 'Some Interesting Text'}
}
