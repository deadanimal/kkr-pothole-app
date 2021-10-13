import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/data/userlist.json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  tableStyle = 'dark';
  private users = data;

  constructor() {
    console.log(this.users);
  }

  ngOnInit() {
  }
}
