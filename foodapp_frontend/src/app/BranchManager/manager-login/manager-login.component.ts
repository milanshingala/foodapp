import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/Admin/class/admin';
import { BranchmanagerService } from 'src/app/Services/branchmanager/branchmanager.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  constructor(private manager:BranchmanagerService) { }
  result:any
  Role:any
  admin = new Admin()
  requiredRoleManager='Manager'
  Id:any


  ngOnInit(): void {
    localStorage.setItem('requiredRoleManager',this.requiredRoleManager)
  }

  loginManager(form:NgForm){
    this.manager.getmanager(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
      this.Role=this.result.role
      this.Id=this.result.id
      localStorage.setItem('loginmanagerID',this.Id)
      localStorage.setItem('registeredRole',this.Role)
      window.alert("Manager logged in")
      },error=>{  
      alert("Enter Valid Details")
      })
    }

}