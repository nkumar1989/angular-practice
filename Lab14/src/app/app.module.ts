import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { AppComponent } from "./app.component"; 
import { MyupperPipe } from './myupper.pipe'; 
import { MysearchPipe } from './mysearch.pipe'; 
import { FormsModule } from "@angular/forms"; 
import { MyphonePipe } from './myphone.pipe'; 
@NgModule({ 
 declarations: [ 
 AppComponent, 
 MyupperPipe, 
 MysearchPipe, 
 MyphonePipe, 
 ], 
 imports: [ 
 BrowserModule,FormsModule
 ], 
 providers: [], 
 bootstrap: [AppComponent] 
}) 
export class AppModule { }