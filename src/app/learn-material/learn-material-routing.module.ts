import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnMaterialPage } from './learn-material.page';

const routes: Routes = [
  {
    path: '',
    component: LearnMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnMaterialPageRoutingModule {}
