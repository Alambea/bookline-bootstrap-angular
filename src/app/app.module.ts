import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './pipes/filter.pipe';

import { LocalStorageService } from 'ngx-webstorage';
import { CartService } from './services/cart.service';
import { BookService } from './services/book.service';
import { QuoteService } from './services/quote.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BooksComponent } from './components/books/books.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BrandHeaderComponent } from './components/brand-header/brand-header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { BrandHeaderSComponent } from './components/brand-header-s/brand-header-s.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shopping_cart', component: ShoppingCartComponent},
  {path: ':category.category', component: CategoryComponent, },
  {path: ':category.category/:isbn', component: BookDetailComponent},

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
    CategoryNavComponent,
    BrandHeaderSComponent,
    ShoppingCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, QuoteService, CartService,LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }