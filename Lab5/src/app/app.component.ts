import { Component } from '@angular/core';
import { Student } from './mymodels/student.model';
import { Course } from './mymodels/course.model';

@Component({
  selector: 'myroot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Welcome To Java Learning Center';
  mystudent:Student;

  constructor(){

    
    this.mystudent=new Student();
    this.mystudent.sid=102;
    this.mystudent.sname="vas";
    this.mystudent.email="vas@gmail.com";
    this.mystudent.phone=12345;


    this.mystudent.course=new Course();
    this.mystudent.course.courseId="C-11";
    this.mystudent.course.courseName="Angular Training";
    this.mystudent.course.trainer="Srinivash Dande";
    this.mystudent.course.cost=15000;

    console.log(this.mystudent);

  }

  }

