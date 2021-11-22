import {
  ROUTESSUPERADMIN,
  ROUTESUSER,
  ROUTESADMIN,
} from './shared/menu/menu-items';
/* eslint-disable eqeqeq */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from './shared/services/auth/auth.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public menu;

  locationCoords: any;
  timetest: any;

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    await this.authService.logout();
  }

  ngOnInit() {}
}
