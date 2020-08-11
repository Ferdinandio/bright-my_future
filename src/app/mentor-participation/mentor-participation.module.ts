import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorParticipationPageRoutingModule } from './mentor-participation-routing.module';

import { MentorParticipationPage } from './mentor-participation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorParticipationPageRoutingModule
  ],
  declarations: [MentorParticipationPage]
})
export class MentorParticipationPageModule {}
