import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slider = [
    {
      image:"assets/imgs/a.png"
    },
    {
      image:"assets/imgs/c.png"
    },
    {
      image:"assets/imgs/d.1.png"
    },
    {
      image:"assets/imgs/e.png"
    }
    

  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
