import { BehaviorSubject } from 'rxjs';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailxitemService {
  product = new BehaviorSubject<Product>({id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0
  });

  constructor() { }

  setProduct(product: Product){
    this.product.next(product);
  }
}
