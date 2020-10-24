import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';
import { remove } from '../../state/users.actions';

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

  public query = '';

  public users$: Observable<Array<any>>;
  public users: Array<any> = [];

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public store: Store<{ users: Array<any> }>
  ) {
    // NGRX selector
    this.users$ = store.pipe(select('users'));
    this.users$.subscribe(users => this.users = users);
  }

  ngOnInit() {
  }

  onSearchChange(event) {
    const value = event ? event.detail.value : '';
    this.query = value;
  }

  filteredUsers() {
    const q = this.query.toLowerCase();
    if (!q) {
      return this.users;
    } else {
      return this.users
        .filter(u => (u.name.toLowerCase().indexOf(q) >= 0 || u.email.indexOf(q) >= 0 || u.bio.indexOf(q) >= 0));
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
