import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.scss'],
})
export class CampaignCreateComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    return await this.modalController.dismiss();
  }

  create() {
    this.modalController.dismiss();
  }
}
