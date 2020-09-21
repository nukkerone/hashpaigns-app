import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GroupCreateComponent } from './group-create/group-create.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  protected groups = [];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GroupCreateComponent,
    });
    return await modal.present();
  }

}
