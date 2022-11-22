import { DetailxitemService } from './../../services/detailxitem.service';
import { CartProductsService } from './../../services/cart-products.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    };
  numbers: number[] = [2,3,4,5,6,7,8,9,10];
  chosenProducts: Product[] = [];

  constructor(private cartProductsService : CartProductsService,
              private detailxitemService: DetailxitemService) {
  }

  ngOnInit(): void {
    this.detailxitemService.product.asObservable().subscribe( res => {
      this.product = res;
    });

    this.cartProductsService.currchosenProducts.subscribe(res => this.chosenProducts = res);
  }
  
  addToCart(product: Product): void{
    this.cartProductsService.addToCart(product);
  }

}
