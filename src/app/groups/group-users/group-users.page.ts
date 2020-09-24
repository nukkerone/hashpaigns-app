import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.page.html',
  styleUrls: ['./group-users.page.scss'],
})
export class GroupUsersPage implements OnInit {

  public users: Array<any> = [
    {id: 1, email: 'user1@mail.com', name: 'Gabriel Medina', role: 'Administrator', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 2, email: 'user2@mail.com', name: 'Ramon Medina', role: 'Member', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 3, email: 'user3@mail.com', name: 'Udriel Medina', role: 'Member', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'},
  ];

  public query = '';

  constructor(public modalController: ModalController, public toastController: ToastController) { }

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
    this.presentToast();
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
