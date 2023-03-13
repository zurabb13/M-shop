import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PrimengModule } from '../../shared/primeng.module';
import { register } from 'swiper/element/bundle';
import { SliderComponent } from './slider/slider.component';
register();

@NgModule({
  declarations: [HeaderComponent, SliderComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
