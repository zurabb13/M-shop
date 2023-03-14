import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PrimengModule } from '../../shared/primeng.module';
import { register } from 'swiper/element/bundle';
import { SliderComponent } from './slider/slider.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { ServiceComponent } from './service/service.component';
import { SectionProjectComponent } from './section-project/section-project.component';
import { ProjectComponent } from './section-project/project/project.component';
register();
@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    SectionOneComponent,
    ServiceComponent,
    SectionProjectComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
