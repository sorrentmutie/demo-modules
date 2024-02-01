import { Component, inject } from "@angular/core";
import { ProvaService } from "./shared/services/prova.service";
import { UtilsService } from "./utils/utils.service";
import { CustomersService } from "./customers/customers.service";
@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <button type="button" routerLink="/customers">Customers</button>
    <button type="button" routerLink="/orders">Orders</button>
    <button type="button" routerLink="">Home</button>

    {{ "Il numero random è: " + service.getRandomNumber() }}

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "Demo";

  utilsService = inject(UtilsService);

  constructor(public service: ProvaService) {}
}
