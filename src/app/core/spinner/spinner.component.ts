import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  providers: [SpinnerService]
})
export class SpinnerComponent implements OnInit {
  public active: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.statusUpdated$.subscribe((status: boolean) => this.active = status);
  }

  ngOnInit() { }
}
