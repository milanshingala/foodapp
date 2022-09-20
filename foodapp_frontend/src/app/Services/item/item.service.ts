import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  addData(item: any) {
    return this.http.post("http://localhost:8080/saveitems", item);

  }
  getData() {
    return this.http.get("http://localhost:8080/getitems");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/deleteitems/${id}`);
  }
  updateitems(id: any, item: any) {
    return this.http.post(`http://localhost:8080/updateitems/${id}`, item)
  }
  isitems() {
    if ((this.isregisteredStaff() != 'undefined' && ((this.isregisteredStaff() == 'Staff') || (this.isregisteredStaff() == 'Manager') || (this.isregisteredStaff() == 'Admin')))) {
      return true
    }
    else {
      return false
    }
  }
  isregisteredStaff() {
    return localStorage.getItem('registeredRole')
  }
}
