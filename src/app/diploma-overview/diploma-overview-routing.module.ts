import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaOverviewPage } from './diploma-overview.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaOverviewPageRoutingModule {}
