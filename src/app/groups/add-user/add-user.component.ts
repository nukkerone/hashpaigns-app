import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from '../../state/users.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  public users$: Observable<Array<any>>;

  public userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('member'),
  });

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public store: Store<{ users: Array<any> }>
  ) {
    this.users$ = store.pipe(select('users'));
  }

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

  add(close = false) {
    const data = this.userForm.value;
    data.bio = 'A newbie over here';

    this.store.dispatch(add(data));
    this.presentToast('The user has been added');
    if (close) { this.done(); }
  }

}
