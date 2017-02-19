import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  subtitle: string;
  menuItems: Object[];

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    this.title = "Geo Business Intelligence Application.";

    this.menuItems = [
      { "title": "Map", "routerLink": "/map" },
      { "title": "About", "routerLink": "/about" }
    ];
  }

  toggleIsOpen(event: any) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
