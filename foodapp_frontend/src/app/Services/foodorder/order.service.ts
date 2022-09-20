import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  deleteorders(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  addData(order: any) {
    return this.http.post("http://localhost:8080/saveorders", order);
  }
  getData() {
    return this.http.get("http://localhost:8080/orders");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/orders/${id}`);
  }
  isregisteredStaff() {
    return localStorage.getItem('registeredRole')
  }
  updateorders(id:any,order:any){
    return this.http.post(`http://localhost:8080/updateorders/${id}`,order)
  }
  isorders() {
    if ((this.isregisteredStaff() != 'undefined' && ((this.isregisteredStaff() == 'Staff') || (this.isregisteredStaff() == 'Manager') || (this.isregisteredStaff() == 'Admin')))) {
      return true
    }
    else {
      return false
    }
  }
}
