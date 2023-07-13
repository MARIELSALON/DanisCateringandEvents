import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdaypackagePage } from './birthdaypackage.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdaypackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdaypackagePageRoutingModule {}
