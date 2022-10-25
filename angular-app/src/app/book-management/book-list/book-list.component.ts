import { Component, OnInit } from '@angular/core';
import {BookManagementService} from '../book-management.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public book: BookManagementService) { }

  ngOnInit(): void {
  }
  bookData= this.getData();

  getData(){
    let data;
    this.book.array.subscribe((items)=>{
      data=items;
    });
    return data;
  }

  addDataBooks(event:any){

  }
  
  

}
