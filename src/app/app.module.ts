import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/component/header/header.module';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { AppServiceModule } from './core/component/app-service/app-service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NavbarComponent,
    AppServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
