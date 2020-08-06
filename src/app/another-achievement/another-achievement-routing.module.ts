import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherAchievementPage } from './another-achievement.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherAchievementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherAchievementPageRoutingModule {}
