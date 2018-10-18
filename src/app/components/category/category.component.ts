import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

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
    this.checkSections();
  }

  ngOnInit() {
    this.categoryLink = true;
    if (!this.category) {
      this.booksByUrl();
    } else {
      this.booksByCategory(this.category);
    }
  }


  booksByCategory(category) {
    this._bookService.getBooksByCategory(category.category, (booksCat: Book[]) => { 
      this.books = booksCat; 
    });
  };

  booksByUrl() {
      this.route.params.subscribe(params => {
        this._bookService.getBooksByCategory(params['category.category'], (booksCat: Book[]) => { 
          this.books = booksCat;
          this.category = this.books[0].category;
          this.categoryLink = false;
        })  
      });
    
  }

  goSearch(){
    var categoryUrl = "/"+this.category.category;
    this._router.navigate([categoryUrl]); 
    this.changeHeader();
  }

  checkSections(){
    var numSections = document.getElementsByTagName("section");
    if( numSections.length == 0){
      this.changeSimpleHeader();
    } else {
      this.changeHeader();
    }
  }

  changeSimpleHeader(){
    document.getElementById("brand-header-s")
    document.getElementById("brand-header").setAttribute('hidden', 'true');
    document.getElementById("random-quote").setAttribute('hidden', 'true');  
  }
  
  changeHeader(){
    document.getElementById("brand-header-s").setAttribute('hidden', 'true');
    document.getElementById("brand-header").removeAttribute('hidden');
    document.getElementById("random-quote").removeAttribute('hidden');
  }
}





