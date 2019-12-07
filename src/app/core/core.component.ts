import {Component, OnInit} from '@angular/core';
import {MENU_ITEMS} from './menu-items';

@Component({
  selector: 'ngx-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() {
  }

  ngOnInit() {
  }

}
