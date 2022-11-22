import { CartProductsService } from './../../services/cart-products.service';
import { FetchDataService } from './../../services/fetch-data.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  detail: boolean = false;
  chosenProducts: Product[] = [];

  constructor(private dataService: FetchDataService, private cartProductsService: CartProductsService) {
  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(res => {
      let temp: any = res;
      for(let i=0;i<temp.length;i++){
        temp[i]["amount"] = 1;
      }
      this.products = res as Product[];
    });
    this.cartProductsService.currchosenProducts.subscribe(res => this.chosenProducts = res);
  }

  
  addToCart(product: Product): void{
    this.cartProductsService.addToCart(product);
  }

}
