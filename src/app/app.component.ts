import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todong';
addTasktoCart(item:any){
  this.cartItems.push(item)
}
  cartItems:any=[
   
    "This is a default task."

  ]
}
