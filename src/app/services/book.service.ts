import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book'
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl : string;
  categories: Category[];


  constructor(private _http : HttpClient) {
    this.booksUrl = "https://gist.githubusercontent.com/Alambea/c5acd917eafe1f7337b872c998920973/raw/b578c561e0059f0c1241726f05b72f588c0d8b15/bookrray.json";
  }
  
  getBooks() : Promise<Book[]>{
    return this._http.get<Book[]>(this.booksUrl).toPromise();
  }

  getAllBooks(callback){
    this.getBooks().then((books : Book[])=>{
      callback(books);
    })
  }

  bookByIsbn(isbn, callback){
    this.getBooks().then((books : Book[])=>{
  for(let i=0; i<books.length; i++) {
      if (books[i].isbn == isbn) 
        callback(books[i]);
      }
    })
  }

  getBooksByCategory(category,callback){
    this.getBooks().then((books : Book[]) => {
      let bookCat: Book[]=new Array();
      for (let i=0 ; i<books.length ; i++){
        if (books[i].category.category === category){
          bookCat.push(books[i]);
        }
      }
      callback(bookCat);
    } )
  }

  getRandomBook(callback){
    this.getBooks().then((books : Book[])=>{
      let randomBook = Math.floor(Math.random() * books.length );
      callback(books[randomBook]);
    })
  }
  
}
