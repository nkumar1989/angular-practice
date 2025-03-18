import { Component } from '@angular/core'; 
import { Student } from './student.model';


@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html'
 
}) 

export class AppComponent { 

   mystudents:Student[];
   mystart:number;
   myend:number;
 
 constructor(){ 
  this.mystart=2;
  this.myend=5;

   this.mystudents=[
     {sid:101,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"INR",dateFormat:"dd-MM-yyyy"},
     {sid:102,sname:"srinivas",phone:12345,course:"Python",feepaid:15000,doj:new Date(),currencyCode:"EUR",dateFormat:"dd-MM-yyyy"}, 
     {sid:103,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"USD",dateFormat:"dd-MM-yyyy"}, 
     {sid:104,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"AUD",dateFormat:"dd-MM-yyyy"}, 
     {sid:105,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"INR",dateFormat:"dd-MM-yyyy"}, 
     {sid:106,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"USD",dateFormat:"dd-MM-yyyy"}, 
      {sid:107,sname:"srinivas",phone:12345,course:"Java",feepaid:15000,doj:new Date(),currencyCode:"USD",dateFormat:"dd-MM-yyyy"}, 



   ];
 } 
 
 }

