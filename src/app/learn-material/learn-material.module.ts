import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnMaterialPageRoutingModule } from './learn-material-routing.module';

import { LearnMaterialPage } from './learn-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnMaterialPageRoutingModule
  ],
  declarations: [LearnMaterialPage]
})
export class LearnMaterialPageModule {}
