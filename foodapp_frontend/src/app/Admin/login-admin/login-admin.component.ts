import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { Admin } from '../class/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  result: any
  Role: any
  admin = new Admin()
  Admin = 'Admin'
  Id: any
  constructor(private adminService: AdminService, private route: Router) { }

  ngOnInit(): void {
    localStorage.setItem('requiredRoleAdmin', this.Admin)
  }

  adminLogin(form: NgForm) {
    this.adminService.loginData(this.admin).subscribe((res) => {
      this.result = res
      this.Role = this.result.role
      this.Id = this.result.id
      localStorage.setItem('loginadminID', this.Id)
      localStorage.setItem('registeredRole', this.Role)
      window.alert("Admin logged in")
    }, error => {
      alert("Please Provide Valid Details")
    })

  }

}
