import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage'

import { CartService } from '../../services/cart.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Category } from '../../models/category';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService : BookService, private _router: Router, private _cartService: CartService, private _localStorage: LocalStorageService) { 
  }

  category: Category;
  titleLength: boolean;

  ngOnInit() {
    this.getCategory();
    this.itsAShortTitle();
  }

  @Input("book") book: Book;
  @Input("categoryLink") categoryLink: boolean;

  getCategory(){
    this.category = this.book.category;
  }

  goSearch(){
    var bookUrl = "/"+this.book.category.category+"/"+this.book.isbn;
    this._router.navigate([bookUrl]); 
  }

  itsAShortTitle(){
    if(this.book.title.length < 26){
      this.titleLength = true;
    } else {
      this.titleLength = false;
    }
  }

  addBook(){
    this._cartService.addBook(this.book);
  }

  favBook(){
    var favList =[];
    var favBook= this.book;
    var firstBook = localStorage.getItem("favList");
    //check if it's the first push and set the Array
    if (!firstBook){
      favList.push({favBook});
      localStorage.setItem("favList", JSON.stringify(favList));
      console.log(firstBook);
    } else {
    //push book
      var stored = JSON.parse(localStorage.getItem("favList"));
      stored.push({favBook});
      localStorage.setItem("favList", JSON.stringify(stored));
    }    
  }
  
}
