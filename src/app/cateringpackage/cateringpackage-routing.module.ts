import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateringpackagePage } from './cateringpackage.page';

const routes: Routes = [
  {
    path: '',
    component: CateringpackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateringpackagePageRoutingModule {}
