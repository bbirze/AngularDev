import { Component } from '@angular/core';

class Item {   
   // adding visibility modifier makes these params properties
  constructor(public title: string, 
              public quantity: number,
              public price: number) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Array<Item> = [];
    
  constructor() {
      this.items.push(new Item('Skis', 4, 250));
      this.items.push(new Item('iPad', 2, 3000));
      this.items.push(new Item('Bugatti', 1, 2000000));
  }

  remove(index: number) {
      this.items.splice(index, 1);
  }

}
