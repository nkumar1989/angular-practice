import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { AppComponent } from "./app.component";
import { MyhoverDirective } from './myhover.directive'; 

@NgModule({ 
 declarations: [ AppComponent, MyhoverDirective], 
 imports: [ 
 BrowserModule
 ], 
 providers: [], 
 bootstrap: [AppComponent] 
}) 
export class AppModule {

    
 }
