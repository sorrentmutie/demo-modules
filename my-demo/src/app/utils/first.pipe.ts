import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "first",
})
export class FirstPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
