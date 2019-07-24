import { Component } from '@angular/core';
import { FormGroup } from '@angular/Forms';

class Item {
  // adding visibility modifier makes these params properties
  constructor(public title: string,
              public quantity: number,
              public price: number,
              public timestamp: Date = new Date()) { }
}
class Product {
  constructor(public id: number, 
              public title: string, 
              public price: number) {}
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
  //  Form properties
  products: Array<Product> = []
  selectedProduct: Product;
  quantity: number;

  constructor() {
    // this.items.push(new Item('Skis', 4, 250));
    // this.items.push(new Item('iPad', 2, 3000));
    // this.items.push(new Item('Bugatti', 1, 2000000));
    this.products.push(new Product(0, 'Skis', 250));
    this.products.push(new Product(1, 'iPad', 3000));
    this.products.push(new Product(2, 'Bugatti', 2000000));
    this.products.push(new Product(3, 'Cardiff City shirt', 5));
    this.products.push(new Product(4, 'Swansea City shirt', 45));

    this.sliceStart = 0;
    this.sliceEnd= this.items.length;
  }

  addItem(f : FormGroup)  {
    let selItem : Item;
    for(var it of this.items) {
        if (it.title == this.selectedProduct.title)
        selItem = it;
    }
    if (selItem == undefined) {       // item not in cart
                                      // instantiate new item
      selItem = new Item(this.selectedProduct.title, 
                         this.quantity, 
                         this.selectedProduct.price)
      this.items.push(selItem);       // add it to cart
      this.sliceStart = 0;            // reset slice
      this.sliceEnd= this.items.length;
    }  
    else {                           // just update quantity
      selItem.quantity += this.quantity;
    }
    this.quantity = 0;                // reset form
    this.selectedProduct = undefined;
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
