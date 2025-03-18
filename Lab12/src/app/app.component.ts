import { Component } from '@angular/core'; 
import { Student } from './student.model';

@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html'
 
}) 

export class AppComponent { 

    mystudents:Student[];
 
 constructor(){ 

    this.mystudents=[

        {sid:101,sname:"Srinivas",email:"email@jlc",phone:12345,city:"Gaya"},
        {sid:102,sname:"Srinivas",email:"email@jlc",phone:12345,city:"Gaya"},
        {sid:103,sname:"Srinivas",email:"email@jlc",phone:12345,city:"Gaya"},
        {sid:104,sname:"Srinivas",email:"email@jlc",phone:12345,city:"Gaya"},
        {sid:105,sname:"Srinivas",email:"email@jlc",phone:12345,city:"Gaya"},


    ];
 
 } 
 
 }

