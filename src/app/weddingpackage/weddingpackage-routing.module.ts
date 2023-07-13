import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingpackagePage } from './weddingpackage.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingpackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingpackagePageRoutingModule {}
