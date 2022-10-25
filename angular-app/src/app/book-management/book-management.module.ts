import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ]
})
export class BookManagementModule { }
