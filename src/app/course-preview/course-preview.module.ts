import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePreviewPageRoutingModule } from './course-preview-routing.module';

import { CoursePreviewPage } from './course-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePreviewPageRoutingModule
  ],
  declarations: [CoursePreviewPage]
})
export class CoursePreviewPageModule {}
