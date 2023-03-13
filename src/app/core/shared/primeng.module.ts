import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

const UX = [ButtonModule];

@NgModule({
  imports: [...UX],
  exports: [...UX],
})
export class PrimengModule {}
