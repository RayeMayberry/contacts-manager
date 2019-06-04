import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyInfoComponent} from './company-info/company-info.component'
import {CompanyLookupComponent} from './company-lookup/company-lookup.component';

const routes: Routes = [
  { path: '', component: CompanyInfoComponent } ,
  { path: 'lookup', component: CompanyLookupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
