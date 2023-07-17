import { Component } from '@angular/core';
import { Observable, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name = 'Oliver';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Oliver' && this.gender === 'male') {
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Oliver';
      this.gender = 'male';
    }
  }

  // i18n Plural

  public clients: string[] = [
    'Jesus',
    'Miguel',
    'Alejandra',
    'Celeste',
    'Fernando',
    'John',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue

  public person = {
    name: 'Oliver',
    age: 20,
    address: 'Portuguesa, Venezuela',
  };

  // Async

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:' + value)),
  );

  public myPromiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
