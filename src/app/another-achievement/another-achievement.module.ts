import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherAchievementPageRoutingModule } from './another-achievement-routing.module';

import { AnotherAchievementPage } from './another-achievement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherAchievementPageRoutingModule
  ],
  declarations: [AnotherAchievementPage]
})
export class AnotherAchievementPageModule {}
