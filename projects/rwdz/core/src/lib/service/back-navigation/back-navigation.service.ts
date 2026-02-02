import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackNavigationService {
  private backRoute: string | null = null;
  private previousUrl: string | null = null;

  constructor(private router: Router, private location: Location) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        this.previousUrl = event.url;
      });
  }

  setBackRoute(route: string) {
    this.backRoute = route;
  }

  goBack() {
    if (this.backRoute) {
      this.router.navigate([this.backRoute]);
      this.backRoute = null;
    } else if (this.previousUrl) {
      this.location.back();
    } else {
      // Fallback to home or another default route
      this.router.navigate(['/']);
    }
  }
}
