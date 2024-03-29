import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { CountryComponent }  from './country.component';
import { CountryListComponent }  from './country-list/country.list.component';
import { CountryService } from './services/country.service';
import { CountryRoutingModule }  from './country-routing.module';

@NgModule({
  imports: [     
        CommonModule,
		CountryRoutingModule
  ], 
  declarations: [
		CountryComponent,
		CountryListComponent
  ],
  providers: [ CountryService ]
})
export class CountryModule {
  constructor() {
    console.log('CountryModule loaded.');
  }
}