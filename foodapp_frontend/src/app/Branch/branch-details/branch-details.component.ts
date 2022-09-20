import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/Services/branch/branch.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  result:any;
  role='Admin'
  registeredRole=localStorage.getItem('registeredRole')
  adminid=localStorage.getItem('adminID')
  loginadminID=localStorage.getItem('loginadminID')
  constructor(private branch:BranchService) { }

  ngOnInit(): void {
    this.branch.getData().subscribe((data)=>{
      this.result = data;
      console.log(this.result);

    })
  }
  deleteBranch(id:any){
    this.branch.deleteData(id).subscribe((res)=>{
      console.log(res);
    })
  }

}
