import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgAcquiringPageRoutingModule } from './prog-acquiring-routing.module';

import { ProgAcquiringPage } from './prog-acquiring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgAcquiringPageRoutingModule
  ],
  declarations: [ProgAcquiringPage]
})
export class ProgAcquiringPageModule {}
