import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { GroupsService } from '../shared/groups.service';
import { GroupCreateComponent } from './group-create/group-create.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  protected groups: Observable<any>;

  constructor(
    public modalController: ModalController,
    public auth: AuthService,
    public groupsService: GroupsService,
  ) {
    this.groups = groupsService.getAll();
  }

  async ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GroupCreateComponent,
    });
    return await modal.present();
  }

}
