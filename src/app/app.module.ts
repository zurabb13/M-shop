import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './core/component/navbar/navbar.module';
import { HeaderModule } from './core/component/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
