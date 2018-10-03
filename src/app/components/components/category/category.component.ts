import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { debug } from 'util';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: Category;
  books: Book[];
  categoryLink : boolean;

  constructor(private route: ActivatedRoute, private _bookService: BookService, private _categoryService: CategoryService, private _router: Router) {
    
    this.categoryLink = true;
    this.booksByUrl();
  }

  ngOnInit() {
    this.categoryLink = true;
    this.booksByUrl();
    this.booksByCategory(this.category);

  }


  booksByCategory(category) {
    this._bookService.getBooksByCategory(category.category, (booksCat: Book[]) => { 
      this.books = booksCat; 
    });
  };

  booksByUrl() {
    if (!this.category) {
      this.route.params.subscribe(params => {
        this._bookService.getBooksByCategory(params['category.category'], (booksCat: Book[]) => { 
          this.books = booksCat;
          this.category = this.books[0].category;

          this.categoryLink = false;
          
        }) //log the value of 
      });
    }
  }

  goSearch(){
    var categoryUrl = "/"+this.category.category;
    this._router.navigate([categoryUrl]); 
  }
}





