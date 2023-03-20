import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppServiceRoutingModule } from './app-service-routing.module';
import { AppServiceComponent } from './app-service.component';
import { AppServiceHeaderComponent } from './app-service-header/app-service-header.component';
import { AppServiceDesignComponent } from './app-service-design/app-service-design.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    AppServiceComponent,
    AppServiceHeaderComponent,
    AppServiceDesignComponent,
  ],
  imports: [CommonModule, AppServiceRoutingModule, HeaderModule],
})
export class AppServiceModule {}
