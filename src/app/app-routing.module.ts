import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { ServicePage } from './service/service.page';
import { WeddingpackagePage } from './weddingpackage/weddingpackage.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule),

  },
  {
    path: 'weddingpackage',
    loadChildren: () => import('./weddingpackage/weddingpackage.module').then( m => m.WeddingpackagePageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'cateringpackage',
    loadChildren: () => import('./cateringpackage/cateringpackage.module').then( m => m.CateringpackagePageModule)
  },
  {
    path: 'birthdaypackage',
    loadChildren: () => import('./birthdaypackage/birthdaypackage.module').then( m => m.BirthdaypackagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

