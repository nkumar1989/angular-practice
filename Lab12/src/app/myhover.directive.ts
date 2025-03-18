import { Directive} from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[jlcMyhover]'
})
export class MyhoverDirective {


  
constructor(private myelementRef:ElementRef) {

 }

  @HostListener("mouseover") 
 doRowHighlight(){ 
 console.log("----doRowHighlight------") 
 this.myelementRef.nativeElement.classList.add('bg-success'); 
 this.myelementRef.nativeElement.style.color='red'; 
 this.myelementRef.nativeElement.style.fontSize='25px'; 
 this.myelementRef.nativeElement.style.border='2px solid blue'; 
 } 

 @HostListener("mouseout") 
 removeRowHighlight(){ 
 console.log("----removeRowHighlight------") 
 this.myelementRef.nativeElement.classList.remove('bg-success'); 
 this.myelementRef.nativeElement.style.color='black'; 
 this.myelementRef.nativeElement.style.fontSize='18px'; 
 this.myelementRef.nativeElement.style.border=''; 
 } 

}
