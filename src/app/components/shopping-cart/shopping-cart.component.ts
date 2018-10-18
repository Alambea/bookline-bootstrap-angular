import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Cart } from '../../models/cart';
import { Book } from '../../models/book';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  books : Book[] =  new Array();
  totalPrice : number;
  totalItem : number[];
  bookCart : Cart[] = new Array;;
  theresBookCart : boolean;;

  constructor(private _router: Router, private _cartService: CartService) { }

  ngOnInit() {
    this.changeHeader();
    this.totalPrice = 0; //
    this.getShoppingCart();
  }

  //Get books from the local storage
  getShoppingCart(){
   this.bookCart = this._cartService.getShoppingCart();
    this.checkBookCart();
  }

  // Check if there're books in the local storage
  checkBookCart(){
    if (this.bookCart.length == 0){
      this.theresBookCart = false;
    } else if (this.bookCart.length > 0 ){
      this.theresBookCart = true;
    }
  }
  
  bookQuantity(book){
    var items = parseInt((<HTMLInputElement> document.getElementById('input'+book.isbn)).value);
    this.updateQuantity(book, items);
  }

  variousItems(items){
    if (items > 1){
      return true;
    } else {
      return false;
    }
  }

  updateQuantity(book, items: number){
    this._cartService.setItemQuantity(book, items);
  }
  //Remove book from the view
  removeBook(rmvBook: Book){
    if (rmvBook){
      var selectedBook= rmvBook.isbn;
      for (let i=0; i<this.bookCart.length; i++){
        if(this.bookCart[i].book.isbn == selectedBook){
          this._cartService.removeFromLS(rmvBook);
          this.bookCart.splice(i, 0);
        }
      }
    }
    this.checkBookCart();
    this.ngOnInit;
  }

  getTotal(){
    return this._cartService.totalPrice;
  }

  //Navigate to the selected book
  goSearch(book: Book){
    if(book){
      var bookUrl = "/"+book.category.category+"/"+book.isbn;
      this._router.navigate([bookUrl]); 
    }
        //tarda en cargar/no carga el libro y por lo tanto no accede a la ruta indicada
  }

  changeHeader(){
    document.getElementById("brand-header-s").removeAttribute('hidden');
    document.getElementById("brand-header").setAttribute('hidden', 'true');
    document.getElementById("random-quote").setAttribute('hidden', 'true'); 
  }
  
}
