import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';
import { InputCardComponent } from './input-card/input-card.component';



@NgModule({
  declarations: [
    CardItemComponent,
    InputCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardItemComponent,
    InputCardComponent
  ]
})
export class MainModule { }
