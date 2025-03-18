import { Component } from '@angular/core';
import { Student } from '../mymodels/student.model';

@Component({
  selector: 'jlc-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  

  mystudent:Student;
  studentFlag:boolean=false;

  constructor(){
    this.mystudent=new Student();
    this.mystudent.sid=102;
    this.mystudent.sname="vas";
    this.mystudent.email="vas@gmail.com";
    this.mystudent.phone=12345;
  }

  showStudentInfo(){
    this.studentFlag=!this.studentFlag;
  }

}
