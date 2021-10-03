import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInputComponent } from './card-input/card-input.component';
import { CartTodoComponent } from './cart-todo/cart-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardInputComponent,
    CartTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
