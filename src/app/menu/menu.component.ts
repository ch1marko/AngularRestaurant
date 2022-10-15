import { Component, OnInit } from '@angular/core';
import { IMenu } from '../iMenu/menuItems';
import { items } from '../iMenu/items';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Array<IMenu> = items;
  orderz: IMenu = {} as IMenu;

  constructor(private shop: CartService) { }

  ngOnInit(): void {
  }

  orderItem(id: any) {
    window.alert("Added to the cart!"),
    this.shop.addToCart(this.items[id])
    console.log(this.shop.getItems())
  }

}
