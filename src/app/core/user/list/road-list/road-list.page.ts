import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/data/roadlist.json';

@Component({
  selector: 'app-road-list',
  templateUrl: './road-list.page.html',
  styleUrls: ['./road-list.page.scss'],
})
export class RoadListPage implements OnInit {

  tableStyle = 'dark';
  private roads = data;

  constructor() {
    console.log(this.roads);
  }

  ngOnInit() {
  }

}


