import { Component } from '@angular/core'; 
@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
}) 
export class AppComponent { 
 constructor(){ 
 console.log("AppComponent - constructor"); 
 } 
} 