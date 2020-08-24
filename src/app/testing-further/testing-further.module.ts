import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingFurtherPageRoutingModule } from './testing-further-routing.module';

import { TestingFurtherPage } from './testing-further.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingFurtherPageRoutingModule
  ],
  declarations: [TestingFurtherPage]
})
export class TestingFurtherPageModule {}
