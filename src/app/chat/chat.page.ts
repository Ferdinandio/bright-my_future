import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChooseContactComponent } from '../choose-contact/choose-contact.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  constructor(public modalController: ModalController) { }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ChooseContactComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
