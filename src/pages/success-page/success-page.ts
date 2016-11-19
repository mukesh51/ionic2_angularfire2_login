import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-success-page',
  templateUrl: 'success-page.html'
})
export class SuccessPagePage {

  showLogoutButton: boolean = false;
  displayName: string;

  constructor(public navCtrl: NavController, private _auth: AuthService) {
    this.displayName = this._auth.displayName();
  }

  logoutFacebook() {
    this.showLogoutButton = false;
    this._auth.signOut();
    this.navCtrl.push(HomePage);
  }

}
