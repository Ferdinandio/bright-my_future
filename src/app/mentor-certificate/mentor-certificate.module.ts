import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorCertificatePageRoutingModule } from './mentor-certificate-routing.module';

import { MentorCertificatePage } from './mentor-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorCertificatePageRoutingModule
  ],
  declarations: [MentorCertificatePage]
})
export class MentorCertificatePageModule {}
