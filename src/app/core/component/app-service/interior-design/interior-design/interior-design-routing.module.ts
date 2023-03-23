import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorDesignComponent } from './interior-design.component';

const routes: Routes = [
  {
    path: '',
    component: InteriorDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteriorDesignRoutingModule {}
