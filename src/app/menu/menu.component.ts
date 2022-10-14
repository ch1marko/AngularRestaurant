import { Component, OnInit } from '@angular/core';
import { IMenu } from '../iMenu/menuItems';
import { items } from '../iMenu/items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Array <IMenu> = items;

  constructor() { }

  ngOnInit(): void {
  }

}
