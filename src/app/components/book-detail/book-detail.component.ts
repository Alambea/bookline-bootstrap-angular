import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {Location} from '@angular/common';

import { CartService } from '../../services/cart.service';
import { BookService } from '../../services/book.service';

import { Book } from '../../models/book';
import { Category } from '../../models/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  category: Category;
  route : any;
  descLength: boolean;
  itsLongDesc: boolean;

  constructor( private _route: ActivatedRoute, private bs: BookService, private _location: Location, private _cartService: CartService) { }

  ngOnInit() {
    document.getElementById("brand-header-s").removeAttribute('hidden');
    document.getElementById("brand-header").setAttribute('hidden', 'true');
    document.getElementById("random-quote").setAttribute('hidden', 'true');
    this.changeHeader();
    this.route = this._route.url;

    //get the book object through url
    this._route.params.subscribe(params => {
      this.bs.bookByIsbn(params['isbn'], (book: Book)=>{
        this.book = book;
        this.category = book.category;
        this.itsAShortDesc();
      }) 
    });
  }

  changeHeader(){
    document.getElementById("brand-header-s").removeAttribute('hidden');
    document.getElementById("brand-header").setAttribute('hidden', 'true');
    document.getElementById("random-quote").setAttribute('hidden', 'true');  
  }
  
  addBook(){
    this._cartService.addBook(this.book);
  }

  itsAShortDesc(){
    if(this.book.description.length < 300){
      this.descLength = true;
    } else {
      this.descLength = false;
      this.itsLongDesc = true;

    }
  }

  //El libro no está definido aun y por lo tanto el booleano tiene el valor "false"
  showMore(){
    this.descLength = true;
  }

  showLess(){
    this.descLength = false;
  }

  goBack() {
    this._location.back();
  }
  
}