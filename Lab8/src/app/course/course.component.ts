import { Component, OnInit, Input } from '@angular/core'; 
import Course from '../course.model'; 
@Component({ 
selector: 'jlc-course', 
templateUrl: './course.component.html', 
}) 
export class CourseComponent { 
@Input() 
MyCourseData :Course ; 
showCourseFlag:boolean = false; 
constructor() { 
console.log("CourseComponent - Con"); 
} 
showCourseInfo(){ 
this.showCourseFlag= ! this.showCourseFlag; 
} 
} 
