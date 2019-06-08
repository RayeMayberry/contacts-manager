import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyInfoComponent} from './company-info/company-info.component'
import {CompanyLookupComponent} from './company-lookup/company-lookup.component';
import{CreateCategoryComponent} from './create-category/create-category.component';
import{PhoneLookupComponent} from './phone-lookup/phone-lookup.component';

const routes: Routes = [
  { path: '', component: CompanyInfoComponent } ,
  { path: 'lookup', component: CompanyLookupComponent },
  { path: 'create-category', component: CreateCategoryComponent},
  { path: 'phone-lookup', component: PhoneLookupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
