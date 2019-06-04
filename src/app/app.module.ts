import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewCompanyFormComponent } from './new-company-form/new-company-form.component';
import { NewContactFormComponent } from './new-contact-form/new-contact-form.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyLookupComponent } from './company-lookup/company-lookup.component';
import { HeaderComponent } from './header/header.component';
import { RootMenuComponent } from './root-menu/root-menu.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    ContactsListComponent,
    NewCompanyFormComponent,
    NewContactFormComponent,
    MenuComponent,
    CompanyLookupComponent,
    HeaderComponent,
    RootMenuComponent,
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
