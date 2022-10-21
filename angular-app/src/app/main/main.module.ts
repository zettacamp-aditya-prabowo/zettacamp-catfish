import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports:[
    CardComponent,
    MainComponent
  ]
})
export class MainModule { }
