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
  
  constructor (private _categoryService: CategoryService) {
    this.getCategories();
  }

  ngOnInit() {
    document.getElementById("brand-header").removeAttribute('hidden');
    document.getElementById("random-quote").removeAttribute('hidden');
    document.getElementById("brand-header-s").setAttribute('hidden', 'true');
  }

  getCategories(){
    this.categories = this._categoryService.categories;
  }
  
}
