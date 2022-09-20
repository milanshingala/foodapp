import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/Services/branch/branch.service';
import { Branch } from '../class/branch';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  branch = new Branch()
  constructor(private branchService:BranchService,private r:Router) { }

  ngOnInit(): void {
  }

  addBranch(form:NgForm){
    this.branchService.addBranch(this.branch).subscribe((res:any)=>{
      console.log(res);
      window.alert("New Branch has been added")
    })

  }

}
