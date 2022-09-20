import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Admin/class/admin';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http:HttpClient) { }
  public addData(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/staff",admin)
  }
  getData(){
  return this.http.get("http://localhost:8080/getallstaff");
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/deletestaff/${id}`);
  }
  loginData(admin:any){
    return this.http.post("http://localhost:8080/getbystaff",admin);

  }
  public getstaff(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getbystaff",admin)
  }
  
}
