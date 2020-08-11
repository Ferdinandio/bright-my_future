import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgOverviewPage } from './prog-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ProgOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgOverviewPageRoutingModule {}
