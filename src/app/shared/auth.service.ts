import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  additionalUserInfo: any;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const localAdditionalUserInfo = JSON.parse(localStorage.getItem('additionalUserInfo'));
    this.userData = localUser ? localUser : null;
    this.additionalUserInfo = localAdditionalUserInfo ? localAdditionalUserInfo : null;
    console.log('User data ', this.userData);
    console.log('additionalUserInfo data ', this.additionalUserInfo);

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('additionalUserInfo', null);
        JSON.parse(localStorage.getItem('user'));
        JSON.parse(localStorage.getItem('additionalUserInfo'));
      }
    });
  }

  // Auth logic to run auth providers
  login() {
    const provider = new auth.TwitterAuthProvider();
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.additionalUserInfo = JSON.stringify(result.additionalUserInfo.profile);
        localStorage.setItem('additionalUserInfo', this.additionalUserInfo);
        console.log('You have been successfully logged in!', result);
        this.router.navigate(['dashboard']);
      }).catch((error) => {
        console.log(error);
      });
  }

  get isLoggedIn(): boolean {
    const additionalUserInfo = JSON.parse(localStorage.getItem('additionalUserInfo'));
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null || additionalUserInfo !== null) ? true : false;
  }

  currentUser() {
    return this.afAuth.currentUser;
  }

  // Sign out
  logout() {
    return this.afAuth.signOut().then(() => {
      this.userData = null;
      this.additionalUserInfo = null;
      localStorage.removeItem('user');
      localStorage.removeItem('additionalUserInfo');
      this.router.navigate(['auth']);
    });
  }
}
