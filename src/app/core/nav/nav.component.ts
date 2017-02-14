import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  menuItems: Object[];

  constructor() { }

  ngOnInit() {
    this.title = "Geo Bi Application";

    this.menuItems = [
      { "title": "Map", "routerLink": "/map" }
    ];
  }

}
