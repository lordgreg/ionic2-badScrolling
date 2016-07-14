import { Component, Input } from '@angular/core';
import {IItem} from '../../providers/items/items';

@Component({
  selector: 'single-item',
  templateUrl: 'build/components/single-item/single-item.html'
})
export class SingleItem {
  @Input() public item: IItem;

  constructor() {}
}
