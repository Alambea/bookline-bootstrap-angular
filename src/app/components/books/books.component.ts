import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Category } from '../../models/category';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService : BookService) { }

  category: Category;
  ngOnInit() {
    this.getCategory();
  }

  @Input("book") book: Book;
  @Input("categoryLink") categoryLink: boolean;


  getCategory(){
    this.category = this.book.category;


  }
}
