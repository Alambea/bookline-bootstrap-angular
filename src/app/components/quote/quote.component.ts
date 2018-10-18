import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

import { Quote } from '../../models/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  randomQuote : Quote;

  constructor(private _quoteService : QuoteService) {
    this.getQuotes();
  }

  ngOnInit() {}

  getQuotes() {
    this.randomQuote = this._quoteService.getRandomQuote();
  }

}
