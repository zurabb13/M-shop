import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

const UX = [ButtonModule, KnobModule];

@NgModule({
  imports: [...UX],
  exports: [...UX],
})
export class PrimengModule {}
