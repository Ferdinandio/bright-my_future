import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseContactPageRoutingModule } from './choose-contact-routing.module';

import { ChooseContactPage } from './choose-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseContactPageRoutingModule
  ],
  declarations: [ChooseContactPage]
})
export class ChooseContactPageModule {}
