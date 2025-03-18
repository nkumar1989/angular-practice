import { Pipe, PipeTransform } from '@angular/core'; 
@Pipe({ name: 'myupper',pure:false}) 
export class MyupperPipe implements PipeTransform { 
 constructor(){ 
 console.log("MyupperPipe- cons()"); 
 } 
 transform(items: any, ...value: any): any { 
 console.log("MyupperPipe- transform()"); 
 //console.log(items,value); 
 return items.toUpperCase(); 
 } 
} 
