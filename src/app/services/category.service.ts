import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { CATEGORY } from '../mocks/mock-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[]=new Array();

  constructor() {
    this.categories = CATEGORY;
   }

}
