import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class BookManagementService{
    book=[{
        namebook: "Laskar Pelangi",
        authorbook: "Andrea Hirata",
        publisher: "Bentang Pustaka",
        publishdate: "2005"
      },{
        namebook: "Bumi",
        authorbook: "Tere Liye",
        publisher: "Gramedia Pustaka Jakarta",
        publishdate: "2014"
      },{
        namebook: "Rindu ",
        authorbook: "Tere Liye",
        publisher: "Bentang Pustaka",
        publishdate: "2014"
      }];
      array=new BehaviorSubject(this.book);
      bookDetail= new BehaviorSubject("You dont have any selected book yet, Please select from list of book that available");

      
}