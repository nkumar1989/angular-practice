import { Component } from '@angular/core';
import { Student } from '../mymodels/student.model';

@Component({
  selector: 'jlc-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  sid:number;
  sname:string;
  email:string;
  phone:number;

  mystudent:Student;

  constructor(){

    this.sid=101;
    this.sname="Srinivash";
    this.email="jlc@gmail.com";
    this.phone=12345;

    this.mystudent=new Student();
    this.mystudent.sid=102;
    this.mystudent.sname="vas";
    this.mystudent.email="vas@gmail.com";
    this.mystudent.phone=12345;
  }

}
