import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PrimengModule } from '../../shared/primeng.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
