import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { AppComponent } from "./app.component";
import { HelloComponent } from './hello/hello.component';
import { HaiComponent } from './hai/hai.component'; 


@NgModule({ 
 declarations: [ 
 AppComponent, HelloComponent, HaiComponent
 ], 
 imports: [ 
 BrowserModule
 ], 
 providers: [], 
 bootstrap: [AppComponent] 
}) 
export class AppModule { 

    
}