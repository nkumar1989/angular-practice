import { Component } from '@angular/core'; 
@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
 styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
 companyName:string; 
 courseName:string; 
 constructor(){ 
 this.companyName="Java Learning Center"; 
 this.courseName="Angular 10"; 
 } 
} 