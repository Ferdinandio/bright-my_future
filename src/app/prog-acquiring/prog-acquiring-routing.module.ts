import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgAcquiringPage } from './prog-acquiring.page';

const routes: Routes = [
  {
    path: '',
    component: ProgAcquiringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgAcquiringPageRoutingModule {}
