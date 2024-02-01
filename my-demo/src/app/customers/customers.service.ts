import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CustomersService {
  constructor(@Inject("provaInput") private provaInput: string) {}

  getText(): string {
    return "CustomersService.getText";
  }
}
