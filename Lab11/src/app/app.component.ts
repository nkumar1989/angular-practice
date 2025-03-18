import { Component } from '@angular/core'; 
@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
 styleUrls:['./app.component.css'] 
}) 
export class AppComponent { 
 mycolor:string; 
 myfontSize:number; 
 myborder:string; 
 myborderRadius:number; 
 mypadding:string; 
 styleFlag:boolean; 
 myclassList:string[]; 
 classFlag:boolean; 
 welcomeMsg:string; 
 constructor(){ 
 console.log("AppComponent - constructor"); 
 this.myfontSize = 25; 
 this.mycolor='blue'; 
 this.myborder='2px solid red'; 
 this.myborderRadius=5; 
 this.mypadding='10px'; 
 this.styleFlag=false; 
 this.myclassList=["myclass1","myclass2"]; 
 this.myclassList.push("myred"); 
 this.classFlag=false; 
 this.welcomeMsg="Welcome to CourseCube!!!" 
 } 
 public changeStyles() : void{ 
 console.log("button clicked"); 
 if(this.styleFlag===true){ 
 this.myfontSize = 25; 
 this.mycolor='blue'; 
 this.myborder='2px solid red'; 
 this.myborderRadius=15; 
 this.mypadding='10px'; 
 this.styleFlag=false; 
 }else{ 
 this.myfontSize = 25; 
 this.mycolor='red'; 
 this.myborder='5px solid blue'; 
 this.myborderRadius=5; 
 this.mypadding='10px'; 
 this.styleFlag=true; 
 } 
 } 
 
 public changeClasses() : void{ 
 console.log("button clicked"); 
 
 if(this.classFlag===true){ 
 this.myclassList=["myclass1","myclass2"]; 
 this.myclassList.push("myblue"); 
 this.classFlag=false; 
 }else{ 
 this.myclassList=["myclass1","myclass2"]; 
 this.myclassList.push("myred"); 
 this.classFlag=true; 
 } 
 } 
} 

