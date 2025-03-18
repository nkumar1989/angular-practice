import { Component, OnDestroy, OnInit } from '@angular/core'; 

@Component({ 
selector: 'myroot', 
templateUrl: './app.component.html' 
}) 
export class AppComponent implements OnInit,OnDestroy{ 

   display:boolean=false;

constructor(){ 

  console.log("[APP]---------------constructor");
  this.display=!this.display;
 } 
  ngOnInit(): void {
     console.log("[APP]---------------ngOnInit()");
  }

  ngOnDestroy(): void {
      console.log("[APP]---------------ngOnDestroy()");
  }

  showHideHello():void{
    console.log("[Hello]---------------showHideHello()");
    this.display=!this.display;
  }
 
 }

