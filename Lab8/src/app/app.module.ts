import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { CourseListComponent } from './course-list/course-list.component'; 
import { CourseComponent } from './course/course.component'; 
@NgModule({ 
 declarations: [ 
 AppComponent, 
 CourseListComponent, 
 CourseComponent 
 ], 
 imports: [ 
 BrowserModule 
 ], 
providers: [], 
 bootstrap: [AppComponent] 
}) 
export class AppModule { } 
