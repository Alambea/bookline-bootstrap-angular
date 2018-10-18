import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { BookService } from '../../services/book.service';
import { Category } from '../../models/category';
import { Book } from '../../models/book';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTitle: boolean;
  public searchText : string;
  categories: Category[]=new Array();
  books: Book[] = new Array();

  constructor(private _categoryService: CategoryService, private _bookService: BookService) { 
  }

  ngOnInit() {
    this.searchTitle = true;
    this.getBooks();
  }
  

  getBooks(){
    this._bookService.getAllBooks((books: Book[]) => { 
      this.books = books; 
    });
  }

  autofocusModal(){
    var searchModal = <HTMLInputElement> document.getElementById("searchModal");
    searchModal.focus();
  }

  searchFilter(){
    var radioTitle = <HTMLInputElement> document.getElementById("customRadioInline1");   
    var radioAuthor = <HTMLInputElement> document.getElementById("customRadioInline2");   
    if(radioTitle.checked === true){
      this.searchTitle=true;
    } else if (radioAuthor.checked === true){
        this.searchTitle=false;
    }
  }
  
}
