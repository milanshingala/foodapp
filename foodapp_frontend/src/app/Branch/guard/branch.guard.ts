import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchService } from 'src/app/Services/branch/branch.service';

@Injectable({
  providedIn: 'root'
})
export class BranchGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.branchService.checkForbranch()==true){
        return true
      }
      else{
        window.alert("Restricted to Admin")
        return false
      }
  }
  
  constructor(private branchService:BranchService){}
}
