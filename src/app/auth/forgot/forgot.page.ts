import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(
    private router: Router,
    private platform: Platform
  ) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/login'])
    });
  }

  ngOnInit() {
  }

}
