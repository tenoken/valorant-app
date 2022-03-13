import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'valorant-app';

  showHead: boolean = false;
  showFooter: boolean = false; 

  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {

        if (event['url'] == '/') { 
          this.showHead = false;
          this.showFooter = false;
        } else { 
          // console.log("NU")
          this.showHead = true;
          this.showFooter = true;
        }
      }
    });
  }
}
