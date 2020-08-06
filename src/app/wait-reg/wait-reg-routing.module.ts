import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitRegPage } from './wait-reg.page';

const routes: Routes = [
  {
    path: '',
    component: WaitRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitRegPageRoutingModule {}
