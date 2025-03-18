import { Component,} from '@angular/core'; 
@Component({ 
 selector: 'jlc-leads', 
 templateUrl: './leads.component.html', 
}) 
export class LeadsComponent { 
 myLeadsData = { 
 leadCount : 5, 
 leadShow : true, 
 myleads : [ 
 {leadId:101,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
 {leadId:102,name:'Vas',email:'vas@jlc',phone:22222,course:'React'}, 
 {leadId:103,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
 {leadId:104,name:'Vas',email:'vas@jlc',phone:22222,course:'React'}, 
 {leadId:105,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
 ]}; 
 constructor() { } 
} 
