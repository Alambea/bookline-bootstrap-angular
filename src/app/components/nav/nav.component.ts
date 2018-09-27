import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

import { BookService } from '../../services/book.service';
import { CategoryService} from '../../services/category.service';

import { Category } from '../../models/category';
import { Book } from '../../models/book';


declare const window: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: Category[]=new Array();
  navItem: string;
  book: Book;
  number: number;
  
  constructor(private _bookService: BookService, private _categoryService: CategoryService) {
    this.categories = this._categoryService.categories;
    this.getRandomBook();
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
      debugger;
      this.book = randomBook;
    }); 
  }

  onSelectedItem(num){
    this.navItem = this.categories[num].category;

  }
  
}
