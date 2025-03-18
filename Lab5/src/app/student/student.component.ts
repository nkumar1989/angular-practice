import { Component,Input } from '@angular/core';
import { Student } from '../mymodels/student.model';
import { Course } from '../mymodels/course.model';

@Component({
  selector: 'jlc-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input()
  MyStudentData:Student;

  constructor(){
    
  }
  
}
