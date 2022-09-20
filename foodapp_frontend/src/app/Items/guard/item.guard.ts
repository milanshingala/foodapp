import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/Services/item/item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.items.isitems()== true){
        return true

      }
      else{
        window.alert("Login first")
        return false
      }
    }
    constructor(private items:ItemService){}
    }