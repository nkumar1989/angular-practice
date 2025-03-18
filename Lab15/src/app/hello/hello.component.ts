import { Component ,OnDestroy,OnInit} from '@angular/core';

@Component({
  selector: 'myhello',
  templateUrl: './hello.component.html',
})
export class HelloComponent implements  OnInit,OnDestroy{


  constructor(){ 

  console.log("[Hello]---------------constructor");
 } 
  ngOnInit(): void {
     console.log("[Hello]---------------ngOnInit()");
  }

  ngOnDestroy(): void {
      console.log("[Hello]---------------ngOnDestroy()");
  }

  

}
