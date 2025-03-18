import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'myhai',
  templateUrl: './hai.component.html',
})
export class HaiComponent {//implements OnInit,OnDestroy {

  constructor(){ 

  console.log("[Hai---------------constructor");
 } 
  ngOnInit(): void {
     console.log("[Hai]---------------ngOnInit()");
  }

  ngOnDestroy(): void {
      console.log("[Hai]---------------ngOnDestroy()");
  }

}
