import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeLoanOffersComponent } from './home-loan-offers/home-loan-offers.component';
import { ApplyHomeLoanComponent } from './apply-home-loan/apply-home-loan.component';
import { ApplicationSuccessComponent } from './application-success/application-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { UserHomeLoanDetailsComponent } from './user-home-loan-details/user-home-loan-details.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    HomeLoanOffersComponent,
    ApplyHomeLoanComponent,
    ApplicationSuccessComponent,
    LandingComponent,
     UserHomeLoanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add this import here
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
