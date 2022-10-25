import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input('cardItem') data: any
  @Output('addItem') addBook = new EventEmitter<{namebook: string, authorbook: string, publisher: string, publishdate: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  addDataBooks(item: {namebook: string, authorbook: string, publisher: string, publishdate: string}){
    this.addBook.emit({
      namebook: item.namebook,
      authorbook: item.authorbook,
      publisher: item.publisher,
      publishdate: item.publishdate
    })
  }

}