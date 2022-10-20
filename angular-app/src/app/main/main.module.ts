import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainArticle1Component } from './main-article1/main-article1.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MainArticle1Component,
  
  ],
  imports: [
    CommonModule,
    FormsModule, 
    FlexLayoutModule
  ],
  exports:[
    MainArticle1Component
  ]
})
export class MainModule { }
