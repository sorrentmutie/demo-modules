import { Component, inject } from "@angular/core";
import { ProvaService } from "../shared/services/prova.service";
import { UtilsService } from "../utils/utils.service";
import { CustomersService } from "./customers.service";

@Component({
  selector: "app-customers",
  template: `
    <p>
      customers works!
      {{ testVeloce | first }}
    </p>

    <div>
      {{ custService.getText() }}
    </div>

    <button type="button" routerLink="./customer-details">
      Customer Detail
    </button>

    {{ "Random number in CustomerComponent: " + service.getRandomNumber() }}
  `,
  //providers: [ProvaService],
  styles: ``,
})
export class CustomersComponent {
  testVeloce = "test veloce";

  utilsService = inject(UtilsService);
  constructor(
    public service: ProvaService,
    public custService: CustomersService
  ) {}
}
