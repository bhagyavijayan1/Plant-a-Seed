import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavService } from './nav.service';
import { FootService } from './foot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantASeed';
  showDetail: boolean = true;
  id;

  constructor(private _router: Router, public nav: NavService , public foot: FootService )  {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event[`url`] === '/') {
          this.showDetail = true;
        }
        else {
          // console.log("NU")
          this.showDetail = false;
        }
      }
    });
  }


    ngOnInit() {
      this.nav.show();
      this .foot.show();
      document.body.className = "selector";

    }

    ngOnDestroy(){
      document.body.className = "bg-img";
    }
}

