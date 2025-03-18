import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({ name: 'myphone'}) 
export class MyphonePipe implements PipeTransform { 
 transform(phoneNumber: any, countryCode: any): any { 
 //console.log("MyphonePipe- transform()"); 
 // console.log(phoneNumber,countryCode); 
 return countryCode+phoneNumber; 
 } 
}