import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ChatlistPage } from '../pages/chatlist/chatlist';
import { TravelPage } from '../pages/travel/travel'; //temporary working directory

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Chat Threads', component: ChatlistPage }
    ];

    if(localStorage.getItem('loggedIn')==='1')
    {
      this.rootPage = HomePage; //HomePage
    }
    else{
      this.rootPage = LoginPage;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutUser() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}
