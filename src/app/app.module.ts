import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyLookupComponent } from './company-lookup/company-lookup.component';
import { HeaderComponent } from './header/header.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CompanyLookupComponent,
    HeaderComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
