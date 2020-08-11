import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaOverviewPageRoutingModule } from './diploma-overview-routing.module';

import { DiplomaOverviewPage } from './diploma-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaOverviewPageRoutingModule
  ],
  declarations: [DiplomaOverviewPage]
})
export class DiplomaOverviewPageModule {}
