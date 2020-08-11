import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorParticipationPage } from './mentor-participation.page';

const routes: Routes = [
  {
    path: '',
    component: MentorParticipationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorParticipationPageRoutingModule {}
