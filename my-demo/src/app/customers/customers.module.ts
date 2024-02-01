import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { ProvaService } from "../shared/services/prova.service";
import { UtilsModule } from "../utils/utils.module";
import { CustomersService } from "./customers.service";

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  exports: [CustomerDetailsComponent],
  providers: [
    ProvaService,
    { provide: CustomersService, useClass: CustomersService },
  ],
  imports: [CommonModule, CustomersRoutingModule, UtilsModule],
})
export class CustomersModule {}
