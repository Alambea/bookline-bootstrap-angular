import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand-header-s',
  templateUrl: './brand-header-s.component.html',
  styleUrls: ['./brand-header-s.component.css']
})
export class BrandHeaderSComponent implements OnInit {

  public title = "Bookline";

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  goHome(){
    this._router.navigate([""]); 
  }
  
}
