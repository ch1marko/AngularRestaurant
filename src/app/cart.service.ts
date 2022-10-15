import { Injectable } from '@angular/core';
import { IMenu } from './iMenu/menuItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsForOrder: Array<IMenu> = [];
  sum: number = 0;

  constructor() { }



    addToCart(item: IMenu) {
        this.itemsForOrder.push(item)
    }

    getItems() {
        return this.itemsForOrder;
    }

    sumTotal() {
        this.sum = 0
        for (let item of this.itemsForOrder) {
            this.sum += item.price
        };
        return this.sum
    }
}
