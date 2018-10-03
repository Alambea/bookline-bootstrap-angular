import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { Router } from '@angular/router';

import { BookService } from '../../../services/book.service';
import { CategoryService} from '../../../services/category.service';

import { Category } from '../../../models/category';
import { Book } from '../../../models/book';


declare const window: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: Category[]=new Array();
  category: Category;
  navItem: string;
  book: Book;
  number: number;
  
  constructor(private _bookService: BookService, private _categoryService: CategoryService, private _router: Router) {
    this.categories = this._categoryService.categories;
   }

  ngOnInit() {
    this.getRandomBook();


  }
//  Change navbar onScroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    var navbar = document.getElementById("nav");
    navbar.style.transition = "all 0.5s"

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 470) {
      navbar.classList.add("nav-scroll");
      navbar.classList.remove("bg-white");
    } else if (number < 470) {
      navbar.classList.add("bg-white");
      navbar.classList.remove("nav-scroll");
    }
  }

  getRandomBook(){
    this._bookService.getRandomBook((randomBook: Book) =>{
      this.book = randomBook;
      this.category = this.book.category;
    }); 
    this.goSearchBook();
  }

  goSearchBook(){
    var bookUrl = "/"+this.book.category.category+"/"+this.book.isbn;
    this._router.navigate([bookUrl]); 
  }

  onSelectedItem(num){
    this.navItem = this.categories[num].category;

  }
  
  goHome(){
    this._router.navigate([""]); 
  }

}
