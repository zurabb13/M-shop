import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
const UX = [ButtonModule, KnobModule, TabViewModule, PanelModule];

@NgModule({
  imports: [...UX],
  exports: [...UX],
})
export class PrimengModule {}
