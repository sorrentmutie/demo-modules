import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstPipe } from "./first.pipe";

@NgModule({
  declarations: [FirstPipe],
  imports: [CommonModule],
  exports: [FirstPipe],
})
export class UtilsModule {}
