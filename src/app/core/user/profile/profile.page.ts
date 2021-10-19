import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logout();
  }

}
