import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgOverviewPageRoutingModule } from './prog-overview-routing.module';

import { ProgOverviewPage } from './prog-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgOverviewPageRoutingModule
  ],
  declarations: [ProgOverviewPage]
})
export class ProgOverviewPageModule {}
