import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase = false;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  //Table

  public heroes: Hero[] = [
    {
      name: 'Superman',
      color: Color.blue,
      canFly: true,
    },
    {
      name: 'Batman',
      color: Color.black,
      canFly: false,
    },
    {
      name: 'Daredevil',
      color: Color.red,
      canFly: false,
    },
    {
      name: 'Robin',
      color: Color.green,
      canFly: false,
    },
    {
      name: 'Green Lantern',
      color: Color.green,
      canFly: true,
    },
  ];

  //Sort By

  public sortBy: keyof Hero | '' = '';

  changeOrder(value: keyof Hero) {
    this.sortBy = value;
  }
}
