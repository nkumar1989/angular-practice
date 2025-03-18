import { Component } from '@angular/core'; 
@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
 styleUrls:['./app.component.css'] 
}) 
export class AppComponent { 
 courseName:string; 
 mycourse:string; 
 mycourses:string[]; 
 constructor(){ 
 console.log("AppComponent - constructor"); 
 this.courseName=""; 
 this.mycourse=""; 
 this.mycourses=["Java","Angular","Spring","React","MongoDB"]; 
 } 
} 
