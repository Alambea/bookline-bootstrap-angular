import { Injectable } from '@angular/core';

import { Quote } from '../models/quote';
import { QUOTES } from '../mocks/mock-quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes: Quote[]=new Array();

  constructor() {
    this.quotes = QUOTES;
   }

  getRandomQuote(): Quote {
    let randomNum = Math.floor(Math.random()*(this.quotes.length))
    let randomQuote = this.quotes[randomNum];
    return randomQuote;
  }

}
