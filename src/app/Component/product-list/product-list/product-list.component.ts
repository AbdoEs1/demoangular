import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../../../Model/product';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products:Array<Product>;
  
  _isSorting = false;
  
  constructor(){
    this.products=[];
  }

  ngOnInit() {
  }

  search(searchString :string) {   
    if(isNullOrUndefined(searchString)){
      return this.products;
    }else{
      return this.products.filter(p=>p.name.includes(searchString) || p.description.includes(searchString) );
    }
  }
  sortProduct(column:string) {   
    console.log(column);
    if(this._isSorting)
    {  
      this.products.sort((a,b) => a[column].localeCompare(b[column]));
    }else{
      this.products.sort((a,b) => b[column].localeCompare(a[column]));
    }
    this._isSorting =!this._isSorting;
  }



}
