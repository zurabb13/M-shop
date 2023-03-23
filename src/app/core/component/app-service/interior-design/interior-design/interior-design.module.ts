import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorDesignRoutingModule } from './interior-design-routing.module';
import { InteriorDesignComponent } from './interior-design.component';
import { InteriorHeaderComponent } from './interior-header/interior-header.component';
import { InteriorBodyComponent } from './interior-body/interior-body.component';
import { InteriorBenefitsComponent } from './interior-benefits/interior-benefits.component';
import { InteriorProjectsComponent } from './interior-projects/interior-projects.component';
import { InteriorPricingComponent } from './interior-pricing/interior-pricing.component';
import { PrimengModule } from '../../../../shared/primeng.module';
import { HeaderModule } from '../../../header/header.module';

@NgModule({
  declarations: [
    InteriorDesignComponent,
    InteriorHeaderComponent,
    InteriorBodyComponent,
    InteriorBenefitsComponent,
    InteriorProjectsComponent,
    InteriorPricingComponent,
  ],
  imports: [
    CommonModule,
    InteriorDesignRoutingModule,
    PrimengModule,
    HeaderModule,
  ],
})
export class InteriorDesignModule {}
