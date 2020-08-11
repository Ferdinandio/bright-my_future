import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgPassportsPage } from './prog-passports.page';

const routes: Routes = [
  {
    path: '',
    component: ProgPassportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgPassportsPageRoutingModule {}
