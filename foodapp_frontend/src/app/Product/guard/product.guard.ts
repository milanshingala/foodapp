import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.products.isproducts()== true){
        return true

      }
      else{
        window.alert("Login First")
        return false
      }
    }

    constructor(private products:ProductService){}
  
  
}

