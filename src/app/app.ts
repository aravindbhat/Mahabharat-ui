import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //lamo="";
  a=10;
  b=20;
  sum=0;
  protected readonly title = signal('Mahabharat-ui');
  clickEvent(){
    console.log("clicked");
    

  }
  mouseEnterEvent(){
    console.log("Mouse entered");
    
  }
  mouseLeaveEvent(){
    console.log("Mouse left");
    
  }
  add(x:string, y:string){
    this.sum=parseInt(x)+parseInt(y);
  }
  assignA(valA:HTMLInputElement){
    this.a=parseInt(valA.value);
    console.log("A",this.a);
    
  }
  assignB(valB:HTMLInputElement){
    this.b=parseInt(valB.value);
    console.log("B", this.b);
    
  }
  reset(){
    this.sum=this.a=this.b=0;
    
  }
}
