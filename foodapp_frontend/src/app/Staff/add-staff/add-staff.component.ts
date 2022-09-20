import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/class/admin';
import { StaffService } from 'src/app/Services/Staff/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  admin= new Admin()
  result:any
  constructor(private register:StaffService) { }

  ngOnInit(): void {
  }

  addStaff(form:NgForm){
      this.register.addData(this.admin).subscribe((res)=>{
        this.result=res
        console.log(this.result)
        window.alert("Staff has been Added")
        
    })
  }

}
