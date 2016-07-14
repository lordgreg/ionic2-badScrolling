import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IItem {
  id: number;
  title: string;
  date: number;
  description: string;
}

export class Item implements IItem {
  public id: number;
  public title: string;
  public date: number;
  public description: string;

  constructor() {
  }

}

const TITLES = [
  'Abababab abababab',
  'Lelelele lelelele',
  'Ghghghgh ghghghgh',
  'zzzZZzzz zzZZZzzz',
  'Hahahaha hahahaha',
  'Kekekeke kekekeke'
];
const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
]

@Injectable()
export class Items {
  data: Array<IItem>;

  constructor(private http: Http) {
    // define empty array
    this.data = Array<IItem>();
  }

  public generateItems(num: number = 50) {

    for (let i: number = 0; i < num; i++) {

      let item = new Item();
      item.date = Date.now();
      item.description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
      item.id = Math.round(Math.random() * 10000);
      item.title = TITLES[Math.floor(Math.random() * TITLES.length)];

      this.data.push(item);
    }

  }

  public removeItems(num: number = 50) {

    this.data.splice(-num, num);

  }

  public resetItems() {

    this.data = Array<IItem>();

  }


}

