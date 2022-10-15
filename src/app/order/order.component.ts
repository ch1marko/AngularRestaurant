import { Component, OnInit } from '@angular/core';
import { IMenu } from '../iMenu/menuItems';
import { CartService } from '../cart.service';

const orderedItems = [
  {
      id: 0,
      img: "https://cdn.pixabay.com/photo/2020/03/10/03/58/fresh-oyster-4917758_960_720.jpg",
      name: "Oysters",
      description: "Oysters from the Adriatic",
      price: 14,
      availability: true,
      details: "A family-run fishing company is our supplier of sea food."
  },
  {
      id: 0,
      img: "https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg",
      name: "Steak",
      description: "Best Wagyu Beef",
      price: 36,
      availability: true,
      details: "Wagyu Beef"
  },
]

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderedItems: Array <IMenu> = orderedItems;
  orderedItems2: Array <IMenu> = [];
  orderedItems3: Array <IMenu> = [];
  sum: number = 0;

  constructor(private shop: CartService) { 
    this.orderedItems3 = this.shop.getItems();
  }

  ngOnInit(): void {
    this.orderedItems2 = this.shop.getItems();
    this.sum = this.shop.sumTotal();
  }
}
