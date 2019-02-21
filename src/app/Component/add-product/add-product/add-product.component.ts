import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() onProductAdded =new EventEmitter<Product>(); 
  product :Product;
  constructor() { 
    this.product= {
      name:"",
      description:"",
      price:0
    }
  }

  addProduct(){
    this.onProductAdded.emit(this.product);
    this.product={
      name:"",
      description:"",
      price:0
    }
  }
  ngOnInit() {
  }

}
