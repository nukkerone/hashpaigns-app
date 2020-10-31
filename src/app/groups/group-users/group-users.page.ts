import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddUserComponent } from '../add-user/add-user.component';
import { remove } from '../../state/users.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.page.html',
  styleUrls: ['./group-users.page.scss'],
})
export class GroupUsersPage implements OnInit {

  /* public users: Array<any> = [
    { id: 1, email: 'user1@mail.com', name: 'Gabriel Medina', role: 'Administrator', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, email: 'user2@mail.com', name: 'Ramon Medina', role: 'Member', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, email: 'user3@mail.com', name: 'Udriel Medina', role: 'Member', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  ]; */

  public groupId: string = null;

  public query = '';

  public users$: Observable<Array<any>>;
  public users: Array<any> = [];

  protected groupUsers$: Observable<any>;
  protected groupUsers: any = [];

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public route: ActivatedRoute,
    public store: Store<{ groupUsers: any }>
  ) {
    this.groupId = this.route.snapshot.paramMap.get('id');

    // NGRX selector
    this.groupUsers$ = store.pipe(
      select('groupUsers'),
      map(state => state[this.groupId] ? state[this.groupId] : [] )
    );
    this.groupUsers$.subscribe(groupUsers => {
      this.groupUsers = groupUsers;
      console.log('New group users ', groupUsers);
    });

    this.store.dispatch({ type: '[Groups Page] Load Group Users', groupId: this.groupId });
  }

  async ngOnInit() {

  }

  onSearchChange(event) {
    const value = event ? event.detail.value : '';
    this.query = value;
  }

  filteredUsers() {
    const q = this.query.toLowerCase();
    if (!q) {
      return this.groupUsers;
    } else {
      return this.groupUsers
        // tslint:disable-next-line:max-line-length
        .filter(u => (u.displayName.toLowerCase().indexOf(q) >= 0 || u.username.toLowerCase().indexOf(q) >= 0 || u.description.toLowerCase().indexOf(q) >= 0));
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddUserComponent,
    });
    return await modal.present();
  }

  remove(id) {
    this.users = this.users.filter(u => u.id !== id);
    this.store.dispatch(remove({ id }));
    this.presentToast('The user has been removed');
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
