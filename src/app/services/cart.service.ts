import { Injectable } from '@angular/core';

import { Cart } from '../models/cart';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  shoppingCart: Cart[]=new Array();
  cartItem: Cart;
  book: Book;
  numberOfItems: number;
  totalPrice: number;

  constructor() { }

  addBook(book){
    //check if it's the first push and set the Array
    this.createCartItem(book);
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    this.getItemQuantity();
  }

  createCartItem(book){
    this.book = book;
    var notInCart = true;
    if(this.shoppingCart.length == 0){
      this.cartItem = {book: this.book, items:  1};
      this.shoppingCart.push(this.cartItem);
    } else {
      for(let i=0; i<this.shoppingCart.length; i++){
        if(this.shoppingCart[i].book.isbn == book.isbn){
          this.shoppingCart[i].items+= 1;
          notInCart = false;
        } 
      }
      if(notInCart){
        this.cartItem = {book: this.book, items:  1};
        this.shoppingCart.push(this.cartItem);
      }
    }
    this.setTotal();
  }

  getItemQuantity(){
    var items = 0;
    for(let i=0; i<this.shoppingCart.length; i++){
      items+= this.shoppingCart[i].items;
    }
    this.numberOfItems = items;
  }

  setItemQuantity(book, quantity){
    for(let i=0; i<this.shoppingCart.length; i++){
      if(this.shoppingCart[i].book.isbn == book.isbn){
        this.shoppingCart[i].items = quantity;
      } 
    } 
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    this.getItemQuantity();
    this.setTotal();
  }


  //Get books from the local storage
  getShoppingCart(){
    this.totalPrice = 0;
    this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if(this.shoppingCart){ 
      for(let i=0; i<this.shoppingCart.length; i++){
        this.totalPrice+= (this.shoppingCart[i].book.price * this.shoppingCart[i].items) ;
    }}
    return this.shoppingCart;
  }

  removeFromLS(rmvBook){
    for(let i=0; i<this.shoppingCart.length; i++){
      if(this.shoppingCart[i].book.isbn == rmvBook.isbn){
        this.shoppingCart.splice(i, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
      }
    }
    this.setTotal();
    this.getItemQuantity();
  }

  setTotal(){
    this.totalPrice = 0
    for( let i=0; i<this.shoppingCart.length; i++){
      this.totalPrice+= (this.shoppingCart[i].book.price * this.shoppingCart[i].items);
    }    
  }
  
}