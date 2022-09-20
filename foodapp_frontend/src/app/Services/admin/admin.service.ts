import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/Admin/class/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  public addData(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/admin",admin)
  }
  public loginData(admin:any):Observable<object>{
    return this.http.post("http://localhost:8080/getby",admin);

  }
  getData(){
    return this.http.get("http://localhost:8080/getalladmin");
  }
  updateData(id:any,admin:any){
    return this.http.put(`localhost:8080/editadmin/${id}`,admin);
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/deleteadmin/${id}`);
  }
  isLoggedIn() {
    //logic
    if(localStorage.getItem('radminPassword')==localStorage.getItem('adminPassword')
    && localStorage.getItem('radminEmail')==localStorage.getItem('adminEmail')) {
      return true;
    } 
    else{
    return false;
  }
}
}
