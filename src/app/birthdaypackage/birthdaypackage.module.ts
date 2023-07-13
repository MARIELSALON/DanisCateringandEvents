import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdaypackagePageRoutingModule } from './birthdaypackage-routing.module';

import { BirthdaypackagePage } from './birthdaypackage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdaypackagePageRoutingModule
  ],
  declarations: [BirthdaypackagePage]
})
export class BirthdaypackagePageModule {}
