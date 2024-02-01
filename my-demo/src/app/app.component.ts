import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>

    <button type="button" routerLink="/customers">Customers</button>
    <button type="button" routerLink="/orders">Orders</button>
    <button type="button" routerLink="">Home</button>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Demo';
}
