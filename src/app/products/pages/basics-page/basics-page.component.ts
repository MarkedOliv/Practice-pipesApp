import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower = 'oliver';
  public nameUpper = 'OLIVER';
  public fullName = 'OlIVeR maRQuEz';

  public customDate: Date = new Date();
}
