var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddtravelPage } from '../pages/addtravel/addtravel';
import { MapPage } from '../pages/map/map';
import { TravelPage } from '../pages/travel/travel';
import { AdditemPage } from '../pages/additem/additem';
import { ChatPage } from '../pages/chat/chat';
import { ChatlistPage } from '../pages/chatlist/chatlist';
import { ContinuechatPage } from '../pages/continuechat/continuechat';
import { ProfilePage } from '../pages/profile/profile';
import { ViewprofilePage } from '../pages/viewprofile/viewprofile';
import { ChoosereceiverPage } from '../pages/choosereceiver/choosereceiver';
import { MytravelsPage } from '../pages/mytravels/mytravels';
import { MytravelPage } from '../pages/mytravel/mytravel';
import { ViewphotoPage } from '../pages/viewphoto/viewphoto';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { CommonProvider } from '../providers/common/common';
import { PlsdalaProvider } from '../providers/plsdala/plsdala';
import { Camera } from '@ionic-native/camera';
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyATmp3oSFtqK4gHK2ZQs9-NBrBYcXjvakc",
    authDomain: "plsdala-8609a.firebaseapp.com",
    databaseURL: "https://plsdala-8609a.firebaseio.com",
    projectId: "plsdala-8609a",
    storageBucket: "plsdala-8609a.appspot.com",
    messagingSenderId: "861667074134"
};
firebase.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                LoginPage,
                RegisterPage,
                AddtravelPage,
                MapPage,
                TravelPage,
                AdditemPage,
                ChatPage,
                ChatlistPage,
                ContinuechatPage,
                ProfilePage,
                ViewprofilePage,
                ChoosereceiverPage,
                MytravelsPage,
                MytravelPage,
                ViewphotoPage
            ],
            imports: [
                BrowserModule,
                AngularFireDatabaseModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
                AngularFirestoreModule,
                HttpModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                LoginPage,
                RegisterPage,
                AddtravelPage,
                MapPage,
                TravelPage,
                AdditemPage,
                ChatPage,
                ChatlistPage,
                ContinuechatPage,
                ProfilePage,
                ViewprofilePage,
                ChoosereceiverPage,
                MytravelsPage,
                MytravelPage,
                ViewphotoPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthenticationProvider,
                CommonProvider,
                PlsdalaProvider,
                Camera
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map