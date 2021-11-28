import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})

export class Menu {
  location: string[] = ["London", "Paris", "Spain"]
  constructor() {}
}
