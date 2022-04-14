import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(mod => mod.CountryModule),
    data: { preload: true }
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule),
    data: { preload: true }
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then(mod => mod.AddressModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: CustomPreloadingStrategy
      })
  ],
  exports: [
    RouterModule
  ],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }