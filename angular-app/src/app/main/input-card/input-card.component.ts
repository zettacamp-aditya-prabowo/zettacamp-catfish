import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {
  
  @Output('addItem') addForm= new EventEmitter<{title: string, desc: string, status: string}>()
  
  addForms(items: {title: string, desc: string, status: string}){
    this.addForm.emit({
      title: items.title,
      desc: items.desc,
      status: items.status
    })
  }
    
  constructor() { }

  ngOnInit(): void {
  }


}
