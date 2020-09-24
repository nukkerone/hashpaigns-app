import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  constructor(public modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() {}

  async closeModal() {
    return await this.modalController.dismiss();
  }

  done() {
    this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'The user has been added',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
