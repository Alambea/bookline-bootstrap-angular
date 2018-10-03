import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  category: Category;
  route : any;

  constructor( private _route: ActivatedRoute, private bs: BookService) { }

  ngOnInit() {
    this.route = this._route.url;

    //get the book object through url
    this._route.params.subscribe(params => {
      this.bs.bookByIsbn(params['isbn'], (book: Book)=>{
        this.book = book;
        this.category = book.category;}) //log the value of id
    });

  }

}