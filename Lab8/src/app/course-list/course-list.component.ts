import { Component, OnInit } from '@angular/core'; 
import Course from '../course.model'; 
@Component({ 
selector: 'jlc-course-list', 
templateUrl: './course-list.component.html', 
}) 
export class CourseListComponent { 
mycoursesToDisplay :Course[] = []; 
courseCount:number=0; 
mycourses = [ 
{ cid : 101,cname : "React JS",trainer : "Srinivas",price : 15000,isOnline : true}, 
{ cid : 102,cname : "Angular",trainer : "Srinivas",price : 15000,isOnline : true}, 
{ cid : 103,cname : "Java FSD",trainer : "Srinivas",price : 55000,isOnline : false}, 
{ cid : 104,cname : "Spring Boot",trainer : "Srinivas",price : 25000,isOnline : true}, 
{ cid : 105,cname : "MicroServices",trainer : "Srinivas",price : 25000,isOnline : true} ]; 
constructor() { 
console.log("CourseListComponent - Con"); 
this.mycoursesToDisplay= [...this.mycourses]; 
this.courseCount= this.mycoursesToDisplay.length; 
} 
showLowpriceCourses(){ 
console.log("Lowprice Cousrse - Clicked"); 
this.mycoursesToDisplay= this.mycourses.filter(mycourse => mycourse.price<=15000); 
this.courseCount= this.mycoursesToDisplay.length; 
} 
showOnlineCourses(){ 
console.log("Online Cousrse - Clicked"); 
this.mycoursesToDisplay= this.mycourses.filter(mycourse => mycourse.isOnline===true); 
this.courseCount= this.mycoursesToDisplay.length; 
}
showAllCourses(){ 
console.log("All Cousrse - Clicked"); 
this.mycoursesToDisplay= [...this.mycourses]; 
this.courseCount= this.mycoursesToDisplay.length; 
} 
} 
