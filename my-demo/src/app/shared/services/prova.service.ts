import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProvaService {
  private randomNUmber: number = 0;

  constructor() {
    this.randomNUmber = Math.random();
    console.log("ProvaService constructor");
  }

  getRandomNumber(): number {
    return this.randomNUmber;
  }
}
