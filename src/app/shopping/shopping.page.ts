import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: 'shopping.page.html',
  styleUrls: ['shopping.page.scss'],
})
export class ShoppingPage {
  products: any[] = [
    { name: 'Camisa', price: 100.99 },
    { name: 'Calsa', price: 200.99 },
    { name: 'Casaco', price: 230.00 },
    { name: 'Meia', price: 200.99 },
    // Add more products here
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }
}
