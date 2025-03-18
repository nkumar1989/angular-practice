import { Component,Input } from '@angular/core';
import { Course } from '../mymodels/course.model';

@Component({
  selector: 'jlc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  @Input()
   MyCourseData:Course;

  courseFlag:boolean=false;

  constructor(){
    
  }

  showCourseInfo(){
    this.courseFlag=!this.courseFlag;
  }

}
