import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
