import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-header-s',
  templateUrl: './brand-header-s.component.html',
  styleUrls: ['./brand-header-s.component.css']
})
export class BrandHeaderSComponent implements OnInit {

  public title = "Bookline";

  constructor() { }

  ngOnInit() {
  }

}
