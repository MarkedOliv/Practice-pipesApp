import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  routes: {
    basics: string;
    numbers: string;
    uncommon: string;
    custom: string;
  } = {
    basics: '/',
    numbers: '/numbers',
    uncommon: '/uncommon',
    custom: '/custom',
  };

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: this.routes.basics,
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: this.routes.numbers,
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: this.routes.uncommon,
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: this.routes.custom,
      },
    ];
  }
}
