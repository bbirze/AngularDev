import { Component } from '@angular/core';
import { FormGroup } from '@angular/Forms';

class Item {
  // adding visibility modifier makes these params properties
  constructor(public title: string,
              public quantity: number,
              public price: number, 
              public timestamp: Date = new Date()) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Array<Item> = [];
  sliceStart: number;
  sliceEnd: number;
  quantity: number;

  constructor() {
    this.items.push(new Item('Skis', 4, 250));
    this.items.push(new Item('iPad', 2, 3000));
    this.items.push(new Item('Bugatti', 1, 2000000));
    this.items.push(new Item('Wine Goblets', 8, 10));
    this.items.push(new Item('Leather Sofa', 1, 1200));
    this.items.push(new Item('Lawn Darts', 3, 15));
    this.sliceStart = 0;
    this.sliceEnd= this.items.length;
  }

  remove(index: number) {
    this.items.splice(index, 1);
    this.sliceStart = 0;
    this.sliceEnd= this.items.length;
  }

  // Calculate the total cost of all lines in the cart.
  totalCartCost(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  numberItems() : number {
    let num = 0;
    for (let item of this.items) {
      num += item.quantity;
    }
    return num;
  }

}
