import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateringpackagePageRoutingModule } from './cateringpackage-routing.module';

import { CateringpackagePage } from './cateringpackage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateringpackagePageRoutingModule
  ],
  declarations: [CateringpackagePage]
})
export class CateringpackagePageModule {}
