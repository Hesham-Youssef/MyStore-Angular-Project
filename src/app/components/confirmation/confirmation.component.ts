import { CartProductsService } from './../../services/cart-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  totalPrice: string = '';

  constructor(private cartProductsService:CartProductsService) {
  }

  ngOnInit(): void {
    this.cartProductsService.currname.subscribe(res => this.name=res);
    this.cartProductsService.currTotalPrice.subscribe(res => this.totalPrice = res);    
  }
  
  clearCart(){
    this.cartProductsService.setChosenProducts([]);
  }

}
