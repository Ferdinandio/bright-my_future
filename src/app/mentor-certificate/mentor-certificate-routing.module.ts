import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorCertificatePage } from './mentor-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: MentorCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorCertificatePageRoutingModule {}
