import { CanActivate } from '@angular/router';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |UrlTree> | boolean | UrlTree {
            if (this.authService.isAuth) {
                return true;
            } else {
                this.router.navigate(['/auth']);
            }
        }
        constructor(private authService: AuthService,
            private router: Router) { }
}
