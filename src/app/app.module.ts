import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BooksComponent } from './components/books/books.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';



import { BookService } from './services/book.service';
import { QuoteService } from './services/quote.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BrandHeaderComponent } from './components/brand-header/brand-header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: ':category.category', component: CategoryComponent},
  {path: ':category.category/:isbn', component: BookDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooksComponent,
    BookDetailComponent,
    HomeComponent,
    CategoryComponent,
    FilterPipe,
    BrandHeaderComponent,
    QuoteComponent,
    SearchBarComponent,
    CategoryNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, QuoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
