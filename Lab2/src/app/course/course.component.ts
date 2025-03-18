import { Component } from '@angular/core';
import { Course } from '../mymodels/course.model';

@Component({
  selector: 'jlc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  mycourse:Course;

  constructor(){
    this.mycourse=new Course();
    this.mycourse.courseId="C001";
    this.mycourse.courseName="Master Angular";
    this.mycourse.cost=15000;
    this.mycourse.trainer="Srinivas Dande";
  }

}
