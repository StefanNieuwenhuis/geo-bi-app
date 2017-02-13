import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() heading: string;

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(event:MouseEvent){
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
