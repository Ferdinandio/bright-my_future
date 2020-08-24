import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingAnswerPage } from './testing-answer.page';

const routes: Routes = [
  {
    path: '',
    component: TestingAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingAnswerPageRoutingModule {}
