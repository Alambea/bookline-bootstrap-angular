import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.css']
})
export class BrandHeaderComponent implements OnInit {

  public title = "Bookline";

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this._router.navigate([""]); 
  }
  
}
