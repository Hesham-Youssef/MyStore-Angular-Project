import { DetailxitemService } from './../../services/detailxitem.service';
import { CartProductsService } from './../../services/cart-products.service';
import { Product } from './../../model/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0
  };
  numbers: number[] = [2,3,4,5,6,7,8,9,10];
  amount: number = 0;
  @Output() clicked: EventEmitter<Product> = new EventEmitter();


  constructor(private detailxitemService: DetailxitemService) {
    this.detailxitemService.product.asObservable().subscribe(res => this.product = res);
  }

  ngOnInit(): void {
  }


  setProduct(product: Product){
    this.detailxitemService.setProduct(product);
  }

}
