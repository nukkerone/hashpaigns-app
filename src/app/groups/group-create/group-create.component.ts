import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { GroupsService } from 'src/app/shared/groups.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss'],
})
export class GroupCreateComponent implements OnInit {

  public groupForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    public modalController: ModalController,
    public groupService: GroupsService,
    public toastController: ToastController
  ) { }

  ngOnInit() { }

  async closeModal() {
    return await this.modalController.dismiss();
  }

  done() {
    this.modalController.dismiss();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  create(close = false) {
    const data = this.groupForm.value;
    this.groupService.create(data);

    // this.store.dispatch(add(data));
    this.presentToast('The group has been created');
    if (close) { this.done(); }
  }

}
