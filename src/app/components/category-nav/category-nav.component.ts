import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

import { Category } from '../../models/category';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  selectedCat: Category;
  categories: Category[]=new Array();
  
  constructor(private _categoryService: CategoryService) {
    this.getCategories();
   }

  ngOnInit() {
  }

  homePage(){
    this.selectedCat = undefined;
  }

  onSelectCat(category){
    this.selectedCat = category;
    this.changeHeader();
  }

  getCategories(){
    this.categories = this._categoryService.categories;
  }

  changeHeader(){
    document.getElementById("brand-header-s").removeAttribute('hidden');
    document.getElementById("brand-header").setAttribute('hidden', 'true');
    document.getElementById("random-quote").setAttribute('hidden', 'true');  
  }

}
