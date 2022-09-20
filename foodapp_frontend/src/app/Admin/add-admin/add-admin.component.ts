import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { Admin } from '../class/admin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  
  result: any
  constructor(private adminService: AdminService) { }
  admin = new Admin()

  ngOnInit(): void {
  }

  addAdmin(form: NgForm) {
    this.adminService.addData(this.admin).subscribe((res:any) => {
      this.result = res
      console.log(this.result);
      window.alert("New Admin has been added")

    })
  }

}
