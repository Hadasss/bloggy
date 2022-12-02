import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.interface';
import { ITEMS } from '../../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  items: Item[] = ITEMS;

  constructor() {}

  ngOnInit(): void {}
}
