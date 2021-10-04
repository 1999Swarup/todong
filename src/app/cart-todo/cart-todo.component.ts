import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-todo',
  templateUrl: './cart-todo.component.html',
  styleUrls: ['./cart-todo.component.css']
})
export class CartTodoComponent implements OnInit {
  
@Input() cartItems:any={}
taskList: Array<number> = []; 
  constructor() { }
   
itemtoRemove(index:number){
  if(this.taskList.length != 0){
  for(let i=0; i<this.taskList.length; i++){
    if(this.taskList[i] != index){
   this.taskList.push(index)
   break;
    }else{
      this.taskList.pop();
      break;
    }
  }
}else{
  this.taskList.push(index)
}
  //console.log(this.taskList)
}

removeItem(){
   //console.log(this.cartItems)
  
 for(let i=0; i<this.taskList.length; i++){
    this.taskList[i]=this.taskList[i]-i;
    this.cartItems.splice(this.taskList[i],1)
    //console.log(this.taskList[i])
   //console.log(this.cartItems[i])
}
this.taskList=[]
}
  ngOnInit(): void {
  }

}






//const element=document.getElementsByName('imp')[index]
  //const element = Array.from(document.getElementsByClassName('binding'))[index];
  //element.textContent = data
  //element.innerHTML = `<h6 class="imp">Task${index+1} : ${data}</h6>`
  //console.log(element);