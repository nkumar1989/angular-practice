import { Component } from '@angular/core'; 

@Component({ 
 selector: 'myroot', 
 templateUrl: './app.component.html', 
 styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 


 coursesToDisplay : any[]; 
 sidToDisplay : number ; 
 showCourseFlag:boolean=false; 
mystudentsData: any[] = [ 

 { 
    
 studentId: 5001, 
 studentName: 'Sri', 
 emailId: 'sri@jlc.com', 
 phones: { office: 1111, home: 2222 }, 
 address: { city: 'Blore', state: 'KA' }, 
 mycourses: [ 
 { cid: 101, cname: 'Angular', price: 15000, trainer: 'Srinivas' }, 
 { cid: 102, cname: 'React', price: 15000, trainer: 'Srinivas' }, 
 { cid: 103, cname: 'MicroServices', price: 15000, trainer: 'Srinivas' }, 
 ],

 }, 

{ studentId: 5002, 
 studentName: 'Vas', 
 emailId: 'vas@jlc.com', 
 phones: { office: 5555, home: 6666 }, 
 address: { city: 'Blore', state: 'KA' }, 
 mycourses: [ 
 { cid: 201, cname: 'Angular', price: 15000, trainer: 'Srinivas' }, 
 { cid: 202, cname: 'React', price: 15000, trainer: 'Srinivas' }, 
 { cid: 203, cname: 'MicroServices', price: 15000, trainer: 'Srinivas' }, 
 ], 
 }, 


 { 
 studentId: 5003, 
 studentName: 'SD', 
 emailId: 'sd@jlc.com', 
 phones: { office: 3333, home: 4444 }, 
 address: { city: 'Blore', state: 'KA' }, 
 mycourses: [ 
 { cid: 301, cname: 'Angular', price: 15000, trainer: 'Srinivas' }, 
 { cid: 302, cname: 'React', price: 15000, trainer: 'Srinivas' }, 
 { cid: 303, cname: 'MicroServices', price: 15000, trainer: 'Srinivas' }, 
 ], 
 }, 


];
 
 
 constructor(){ 
 } 

 public showCourseInfo(mysid:number){ 
 console.log(mysid); //5002 
 this.showCourseFlag=true; 
 this.sidToDisplay = mysid; 
 //Task A : get the Courses of Selected Student 
 let filteredStudent = this.mystudentsData.filter( 
 mystudent => mystudent.studentId ===mysid 
 ); 
 this.coursesToDisplay = filteredStudent[0].mycourses; 
 //Task B : Display the Course Details 
 } 
 
 public showCourseData(mycourses:any[],mysid:number){ 
 this.showCourseFlag=true; 
 this.coursesToDisplay = mycourses; 
 this.sidToDisplay = mysid; 
 
 } 

 } 