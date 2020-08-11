import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgPassportsPageRoutingModule } from './prog-passports-routing.module';

import { ProgPassportsPage } from './prog-passports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgPassportsPageRoutingModule
  ],
  declarations: [ProgPassportsPage]
})
export class ProgPassportsPageModule {}
