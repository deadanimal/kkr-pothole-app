import { AuthService } from './../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  toLogin() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
