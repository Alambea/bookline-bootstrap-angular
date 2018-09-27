import { Component, OnInit } from '@angular/core';


import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[]=new Array();
  
  constructor(  private _categoryService: CategoryService) {
    this.getCategories();
   }

  ngOnInit() {

  }

  getCategories(){
    this.categories = this._categoryService.categories;
    }
  
}
