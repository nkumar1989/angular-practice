import { Pipe, PipeTransform } from '@angular/core'; 
import { Student } from './student.model';
@Pipe({ name: 'mysearch' }) 

export class MysearchPipe implements PipeTransform { 
  
 transform(studentsList: any, courseName: any): any { 
 console.log("MysearchPipe - transform()"); 
 console.log(studentsList,courseName); // 
 
 if(courseName==''|| courseName==null){ 
 return studentsList; 
 }else{ 
 courseName = courseName.toLowerCase(); 
 let mystudents=studentsList.filter((mystudent:Student)=> mystudent.course.toLowerCase().includes(courseName)); 
  console.log(mystudents);
 } 

 return studentsList; 
 } 
} 
