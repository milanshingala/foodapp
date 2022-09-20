import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from 'src/app/Branch/class/branch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }
  public addBranch(branch: Branch): Observable<object> {
    return this.http.post("http://localhost:8080/branch", branch)
  }
  getData() {
    return this.http.get("http://localhost:8080/getallbranch");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/deletebranch/${id}`);
  }
  checkForbranch() {
    if (this.isregisteredAdmin() != 'undefined' && this.isregisteredAdmin() == 'Admin') {
      return true
    }
    else {
      return false
    }
  }
  isregisteredAdmin() {
    return localStorage.getItem('registeredRole')
  }
  updateBranch(id: any, branch: any) {
    return this.http.put(`http://localhost:8080/updatebranch/${id}`, branch)
  }
}
