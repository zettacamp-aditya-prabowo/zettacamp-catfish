import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input('cardItem') data: any
  @Output('addItem') addData = new EventEmitter<{title: string, desc: string, status: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  status(item: any){
    if (item.status == "active") {
      item.status = "danger"
    } else {
      item.status = "active"
    }
  }

  addDatas(item: {title: string, desc: string, status: string}){
    this.addData.emit({
      title: item.title,
      desc: item.desc,
      status: item.status
    })
  }

}
