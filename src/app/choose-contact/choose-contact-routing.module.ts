import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseContactPage } from './choose-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseContactPageRoutingModule {}
