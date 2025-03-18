import { Component } from '@angular/core'; 
import { Student } from './student.model'; 
@Component({ 
selector: 'myroot', 
templateUrl: './app.component.html' 
}) 
export class AppComponent { 
mystudents:Student[]; 
courseName:string; 
constructor(){ 
this.courseName=""; 

   this.mystudents=[
     {sid:101,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),countryCode:"+91-"},
     {sid:102,sname:"srinivas",phone:12345,course:"Python",feepaid:15000,doj:new Date(),countryCode:"+41-"},
     {sid:103,sname:"srinivas",phone:12345,course:"Spring Boot",feepaid:15000,doj:new Date(),countryCode:"+91-"},
     {sid:104,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),countryCode:"+1-"},
     {sid:105,sname:"srinivas",phone:12345,course:"Python",feepaid:15000,doj:new Date(),countryCode:"+51-"},
     {sid:106,sname:"srinivas",phone:12345,course:"Angular",feepaid:15000,doj:new Date(),countryCode:"+91-"},
     {sid:107,sname:"srinivas",phone:12345,course:"Angular",feepaid:15000,doj:new Date(),countryCode:"+1-"},
     {sid:108,sname:"srinivas",phone:12345,course:"Python",feepaid:15000,doj:new Date(),countryCode:"+41-"},
     {sid:109,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),countryCode:"+91-"},
     {sid:110,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),countryCode:"+51-"},
     {sid:111,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),countryCode:"+1-"},



   ];
 } 
 
 }

