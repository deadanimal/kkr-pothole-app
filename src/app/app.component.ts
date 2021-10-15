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
import { AuthService, User } from './shared/services/auth/auth.service';
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

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
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

  async ngOnInit() {
    if (this.authService) {
      await setTimeout(() => {
        this.authService.getUser().subscribe((user) => {
          console.log('LOL', user);
          const userRole = user.role;
          if (userRole === 'ADMIN') {
            this.menu = ROUTESSUPERADMIN;
          } else if (userRole === 'USER') {
            this.menu = ROUTESADMIN;
          }
        });
        this.menuItems = this.menu.filter((menuItem) => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      }, 3000);
    }
  }

  async ionViewWillEnter() {}
}
