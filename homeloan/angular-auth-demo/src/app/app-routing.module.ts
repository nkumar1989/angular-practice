import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeLoanOffersComponent } from './home-loan-offers/home-loan-offers.component';
import { ApplyHomeLoanComponent } from './apply-home-loan/apply-home-loan.component';
import { ApplicationSuccessComponent } from './application-success/application-success.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home-loan-offers', component: HomeLoanOffersComponent },
  { path: 'apply-home-loan', component: ApplyHomeLoanComponent },
  { path: 'application-success', component: ApplicationSuccessComponent },
  { path: '**', redirectTo: 'login' } // Default fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}