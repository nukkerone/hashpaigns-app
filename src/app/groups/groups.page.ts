import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../shared/auth.service';
import { GroupsService } from '../shared/groups.service';
import { GroupCreateComponent } from './group-create/group-create.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  protected groups$: Observable<any>;

  constructor(
    public modalController: ModalController,
    public store: Store<{ groups: Array<any> }>,
    public auth: AuthService,
    public groupsService: GroupsService,
  ) {
    this.groups$ = store.select('groups');
  }

  async ngOnInit() {
    console.log('Dispatch [Groups Page] Load Groups');
    this.store.dispatch({ type: '[Groups Page] Load Groups' });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GroupCreateComponent,
    });
    return await modal.present();
  }

}
