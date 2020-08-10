import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-choose-contact',
  templateUrl: './choose-contact.component.html',
  styleUrls: ['./choose-contact.component.scss']
})

export class ChooseContactComponent {

  constructor(public viewCtrl: ModalController) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
