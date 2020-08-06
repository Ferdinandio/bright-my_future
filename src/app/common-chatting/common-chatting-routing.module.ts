import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonChattingPage } from './common-chatting.page';

const routes: Routes = [
  {
    path: '',
    component: CommonChattingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonChattingPageRoutingModule {}
