import { Component } from '@angular/core'; 
import { Course } from './mymodels/course.model'; 
@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
 styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
 
 //1.Simple Type Properties 
 sid:number=1001; 
 sname:string="Hello"; 
 dob:Date= new Date(); 
 isActive:boolean= true; 
 // 2. Object of ANY Type 
 mycourse1:any = { 
 cid:'C-101', 
 cname:"Master Angular", 
 price:15000, 
 trainer:"Srinivas Dande" 
 }; 
 // 3. Object of Course Type 
 mycourse2:Course = { 
 courseId:'C-102', 
 courseName:"Master React", 
 cost:15000, 
 trainer:"Srinivas Dande" 
 }; 
 //4.Array of Simple Types 
 mycourseNames:string[] = 
 ["Angular","React","MongoDB","Node JS","Express JS"]; 
 //5.Array of Objects 
 mycourseList:Course[] = [ 
 {courseId:"C-101",courseName:"Angular",cost:15000,trainer:"srinivas"}, 
 {courseId:"C-102",courseName:"React",cost:15000,trainer:"srinivas"}, 
 {courseId:"C-103",courseName:"Angular",cost:15000,trainer:"srinivas"}, 
 {courseId:"C-104",courseName:"React",cost:15000,trainer:"srinivas"}, 
 {courseId:"C-105",courseName:"Angular",cost:15000,trainer:"srinivas"}, 
 ];
 constructor(){ 
 } 
public showMoreInfo(mycid:string) { 
 console.log("Selected CourseId : ", mycid); 
 } 
 } 