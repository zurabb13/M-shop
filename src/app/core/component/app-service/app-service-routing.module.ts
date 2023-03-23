import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppServiceComponent } from './app-service.component';

const routes: Routes = [
  {
    path: '',
    component: AppServiceComponent,
  },
  {
    path: 'service/interior-design',
    loadChildren: () =>
      import(
        '../app-service/interior-design/interior-design/interior-design.module'
      ).then((design) => design.InteriorDesignModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppServiceRoutingModule {}
