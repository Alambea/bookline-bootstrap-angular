import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { Router } from '@angular/router';

import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';

import { Book } from '../../models/book';


declare const window: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItem: string;
  book: Book;
  number: number;
  cartItems: boolean;;

  constructor(private _bookService: BookService, private _cartService: CartService, private _router: Router) {  }

  ngOnInit() {
    this.getRandomBook();
    this.getCartItems();
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
    }); 
    this.goSearchBook();
  }

  getCartItems(){
    return this._cartService.numberOfItems;
  }

  goSearchBook(){
    var bookUrl = "/"+this.book.category.category+"/"+this.book.isbn;
    this._router.navigate([bookUrl]); 
  }
  
  goHome(){
    this._router.navigate([""]); 
  }

  goShoppingCart(){
    this._router.navigate(["shopping_cart"]); 
  }

}
