import { Injectable } from '@angular/core';
import { Route, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Globals } from '../models/globals';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private globals: Globals) {}

  canActivate(route:ActivatedRouteSnapshot): boolean{
    if (localStorage.getItem("ingresoExitoso")) {
      localStorage.removeItem("ingresoExitoso");
      return true;  
    }

    if (!this.globals || !this.globals.user || !this.globals.user.Menus || !this.globals.user.Menus.length) {
      return false;
    }
    
    return true;
    // return this.findRoute(route.url.toString(), this.globals.user.Menus);
  }

  findRoute(route: string, menus: Menu[]): boolean {
    for (const menu of menus) {
      for (const subMenu of menu.SubMenus) {
        if (subMenu.Url === route) {
          return true;
        }
      }
    }
    return false;
  }
}
