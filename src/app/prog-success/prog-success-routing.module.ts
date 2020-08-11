import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgSuccessPage } from './prog-success.page';

const routes: Routes = [
  {
    path: '',
    component: ProgSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgSuccessPageRoutingModule {}
