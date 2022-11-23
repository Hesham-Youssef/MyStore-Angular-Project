import { CartProductsService } from './../../services/cart-products.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { format } from 'mathjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  chosenProducts: Product[] = [];
  totalPrice: string = '';
  empty: boolean = false;

  validName: boolean = false;
  validCard: boolean = false;

  name: string = '';
  address: string = '';
  creditNumber: string = '';

  
  constructor(private cartProductsService: CartProductsService) {
  }

  ngOnInit(): void {
    this.cartProductsService.currname.subscribe(res => this.name=res);
    this.cartProductsService.currchosenProducts.subscribe(res => this.chosenProducts = res);
    this.cartProductsService.currTotalPrice.subscribe(res => this.totalPrice = res);
  }

  updateProducts(product: Product){
    if(product.amount < 1){
      alert("Product deleted");
      this.chosenProducts.forEach((value,index)=>{
        if(value==product) this.chosenProducts.splice(index,1);
      });
    }
    this.cartProductsService.setChosenProducts(this.chosenProducts);
    if(this.chosenProducts.length == 0)
      this.empty = true;
  }

  onSubmit(){
    alert("done");
  }

  changeName(){
    this.cartProductsService.changeName(this.name);
  }



  validateName(){
    if(/[^a-zA-Z]/.test(this.name)){
      this.name = this.name.substring(0, this.name.length - 1);
      this.validName = false;
      alert("Name must only include letters");
    }else{
      this.validName = true;
    }
  }

  validateCardNumber(){
    if(!/^\d+$/.test(this.creditNumber)){
      this.creditNumber = this.creditNumber.substring(0, this.creditNumber.length - 1);
      this.validCard = false;
      alert("Card number must only include numbers");
    }else{
      this.validCard = true;
    }
  }
}
