import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonChattingPageRoutingModule } from './common-chatting-routing.module';

import { CommonChattingPage } from './common-chatting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonChattingPageRoutingModule
  ],
  declarations: [CommonChattingPage]
})
export class CommonChattingPageModule {}
