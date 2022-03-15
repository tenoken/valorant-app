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
    
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        debugger;
        if (event['url'] == '/' || event['url'] == '/register') {
          this.showHead = false;
          this.showFooter = false;
        } else {
           
          const path = this.router.config.find(r => r.path?.includes(event['url'].substring(1)) != undefined);          

          if (this.router.config.find(r => r.path == event['url'].substring(1)) != undefined ||
              path?.path != '') {
            this.showHead = true;
            this.showFooter = true;
          } else {

          let pathMathces = false;

          this.router.config.forEach(element => {
            
            let test:string  = element.path!;

            if(test != '' && event['url'].includes(test))
              pathMathces = true;            

          });

            if(pathMathces)
              return;

            this.showHead = false;
            this.showFooter = false;
          }
        }
      }
    });
  }
}
