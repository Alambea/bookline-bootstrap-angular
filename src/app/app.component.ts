import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';

import {CategoryService} from './services/category.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  router: string;

  constructor( private _categoryService : CategoryService, private route: ActivatedRoute, private _router: Router) {  
  }

  ngOnInit(){
  }

}
