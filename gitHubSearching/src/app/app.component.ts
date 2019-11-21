import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, Router } from '@angular/router';
import { routingAnimation } from './shared/animations/routing.animation';

@Component({
  selector: 'nggit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent implements AfterViewInit {
  title = 'gitHubSearching';
  loading = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loading = true;
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
                ) {
                this.loading = false;
            }
        });
}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
