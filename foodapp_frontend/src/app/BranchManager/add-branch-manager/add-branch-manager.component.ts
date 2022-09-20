import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchmanagerService } from 'src/app/Services/branchmanager/branchmanager.service';
import { Manager } from '../class/manager';

@Component({
  selector: 'app-add-branch-manager',
  templateUrl: './add-branch-manager.component.html',
  styleUrls: ['./add-branch-manager.component.css']
})
export class AddBranchManagerComponent implements OnInit {
  manager = new Manager()
  result:any
  constructor(private branchService:BranchmanagerService) { }

  ngOnInit(): void {
  }

  addManager(form:NgForm){
    this.branchService.addManager(this.manager).subscribe((res:any)=>{
      this.result=res
      console.log(this.result);
      window.alert("Manager has been added")
      
  })
}


}
