import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

import { Category } from '../../models/category';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchText : string;
  categories: Category[]=new Array();

  constructor(private _categoryService: CategoryService) { 
    this.getCategories();
  }

  ngOnInit() {
  }
  getCategories(){
    this.categories = this._categoryService.categories;
  }
}
