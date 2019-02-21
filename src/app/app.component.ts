import { Component } from '@angular/core';
import { Product } from './Model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Array<Product>;

  constructor(){
    this.products=[];
  }

  onProductAdded(product: Product) {
    this.products.push(product);
  }
}
