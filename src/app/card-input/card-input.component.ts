import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
@Output() addCartEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
/*
newTask: string = '';
clickMe(){
console.log( this.newTask );
this.addCartEvent.emit(this.newTask )
}*/
 clickMe(newTask:string) {
    console.log('Task : ',newTask);
    this.addCartEvent.emit(newTask )
  }
}
