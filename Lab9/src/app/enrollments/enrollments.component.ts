import { Component} from '@angular/core'; 
@Component({ 
 selector: 'jlc-enrollments', 
 templateUrl: './enrollments.component.html', 
}) 
export class EnrollmentsComponent { 
 myEnrollmentsData = { 
 enrollmentCount : 5, 
 enrollmentShow : true, 
 myenrollments : [ 
 {leadId:101,sid:501,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
 {leadId:102,sid:502,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
 {leadId:103,sid:503,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
 {leadId:104,sid:504,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
 {leadId:105,sid:505,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
 ] }; 
 constructor() { } 
}