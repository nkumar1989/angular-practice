import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNavbar = true;
   constructor(private router: Router) {}
  title = 'angular-auth-demo';
  ngOnInit() {
    // Listen to route changes and determine whether to show the navbar
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavbar = currentRoute !== '/login'; // Hide navbar on login page
    });
  }
}
