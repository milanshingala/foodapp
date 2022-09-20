import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/Admin/class/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerService {

  constructor(private http: HttpClient) { }
  addData(admin: any) {
    return this.http.post("http://localhost:8080/manager", admin);
  }
  getData() {
    return this.http.get("http://localhost:8080/manager");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/manager/${id}`);
  }
  loginData(manager: any) {
    return this.http.post("http://localhost:8080/getbymanager", manager);

  }
  public getmanager(admin: Admin): Observable<object> {
    return this.http.post("http://localhost:8080/getbymanager", admin)
  }
  isLoggedIn() {
    if (localStorage.getItem('rmanagerPassword') == localStorage.getItem('managerPassword')
      && localStorage.getItem('rmanagerEmail') == localStorage.getItem('managerEmail')) {
      return true;
    }
    else {
      return false;
    }
  }
  public addManager(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/manager",admin)
  }
}
