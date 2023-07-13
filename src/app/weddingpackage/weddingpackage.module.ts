import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingpackagePageRoutingModule } from './weddingpackage-routing.module';

import { WeddingpackagePage } from './weddingpackage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingpackagePageRoutingModule
  ],
  declarations: [WeddingpackagePage]
})
export class WeddingpackagePageModule {}
