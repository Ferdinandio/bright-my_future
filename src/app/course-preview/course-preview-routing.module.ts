import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePreviewPage } from './course-preview.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePreviewPageRoutingModule {}
