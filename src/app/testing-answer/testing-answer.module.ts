import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingAnswerPageRoutingModule } from './testing-answer-routing.module';

import { TestingAnswerPage } from './testing-answer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingAnswerPageRoutingModule
  ],
  declarations: [TestingAnswerPage]
})
export class TestingAnswerPageModule {}
