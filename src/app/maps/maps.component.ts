import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit, AfterViewInit {

  constructor() { }
  loading = true;
  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.loading = false;
  }

}
