import { Component } from "@angular/core";
import { ProvaService } from "../../shared/services/prova.service";

@Component({
  selector: "app-customer-details",
  template: `
    <p>customer-details works!</p>

    {{
      "Random number in CustomerDetailsComponent: " + service.getRandomNumber()
    }}
  `,
  styles: ``,
})
export class CustomerDetailsComponent {
  constructor(public service: ProvaService) {}
}
