import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  temp: Product[] = [];
  chosenProducts = new BehaviorSubject<Product[]>([]);
  totalPrice = new BehaviorSubject<string>('');
  name = new BehaviorSubject<string>('');

  currTotalPrice = this.totalPrice.asObservable();
  currname = this.name.asObservable();
  currchosenProducts = this.chosenProducts.asObservable();

  constructor() {
    console.log(this.chosenProducts);
  }

  changeName(name: string){
    this.name.next(name);
  }

  addToCart(product: Product): void{
    if(product.amount == 0){
      alert("Please choose amount");
    }else{
      let temp = this.chosenProducts.getValue();
      let index = temp.indexOf(product);
      if(index != -1){
        temp[index] = product;
      }else{
        temp.push(product)
        this.setChosenProducts(temp);
      }
      alert("Added to cart");
    }
  }
  


  setChosenProducts(products: Product[]){
    this.chosenProducts.next(products);
    this.totalPrice.next(this.getTotalPrice());
  }

  getTotalPrice(){
    let res = 0;
    let temp: any = this.chosenProducts.getValue()
    for(let i=0;i<this.chosenProducts.getValue().length;i++){
      res += temp[i].amount * temp[i].price;
    }
    return res.toFixed(2);
  }

  
  removeFromCart(product: Product): void{
    // alert("Product deleted");
    // this.chosenProducts.forEach((value,index)=>{
    //   if(value==product) this.chosenProducts.splice(index,1);
    // });
  }

}
