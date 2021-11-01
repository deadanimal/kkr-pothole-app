import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  //   canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
  //     const expectedRole = route.data?.role || null;
  //     return this.authService.isAuthenticated.pipe(
  //       filter((val) => val !== null), // Filter out initial Behaviour subject value
  //       take(1), // Otherwise the Observable doesn't complete!
  //       map((isAuthenticated) => {
  //         if (isAuthenticated) {
  //           this.authService.getAuthUser().subscribe()
  //           return true;
  //         } else {
  //           this.router.navigateByUrl('/login');
  //           return false;
  //         }
  //       })
  //     );
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data?.role || null;
    return this.authService.getAuthUser().pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((user) => {
        if (user.role === expectedRole) {
          console.log('current role:', user.role);
          console.log('expected role:', expectedRole);
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
