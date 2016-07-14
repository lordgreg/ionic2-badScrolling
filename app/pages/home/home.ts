import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Items} from '../../providers/items/items';
import {SingleItem} from '../../components/single-item/single-item';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [SingleItem],
})
export class HomePage {
  constructor(
    private navController: NavController,
    private items: Items
    ) {

  }

  public add(num: number = 50) {
    this.items.generateItems(num);
  }

  public rem(num: number = 50) {
    this.items.removeItems(num);
  }

  public reset() {
    this.items.resetItems();
  }
}
