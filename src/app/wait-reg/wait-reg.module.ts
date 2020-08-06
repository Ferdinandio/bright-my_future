import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitRegPageRoutingModule } from './wait-reg-routing.module';

import { WaitRegPage } from './wait-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitRegPageRoutingModule
  ],
  declarations: [WaitRegPage]
})
export class WaitRegPageModule {}
