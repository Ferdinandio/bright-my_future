import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgSuccessPageRoutingModule } from './prog-success-routing.module';

import { ProgSuccessPage } from './prog-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgSuccessPageRoutingModule
  ],
  declarations: [ProgSuccessPage]
})
export class ProgSuccessPageModule {}
