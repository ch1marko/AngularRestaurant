import { Component, OnInit } from '@angular/core';
import { IMenu } from '../iMenu/menuItems';
import { items } from '../iMenu/items';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  detailOfItem: IMenu = {} as IMenu 

  constructor( 
    private route: ActivatedRoute,
    private shop: CartService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.detailOfItem = items[this.id];
    })
  }

  addToCart() {
    alert("Addedd to cart!")
    this.shop.addToCart(this.detailOfItem)
  }

}
