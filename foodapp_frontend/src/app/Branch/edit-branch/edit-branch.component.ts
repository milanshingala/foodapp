import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from 'src/app/Services/branch/branch.service';
import { Branch } from '../class/branch';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  branch = new Branch()
  result: any
  constructor(private updatebranch: BranchService, private r1: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.r1.snapshot.params['id']
    this.updatebranch.getData().subscribe((data) => {
      this.result = data
      console.log(this.result);

      for (let r of this.result.t) {
        if (id == r.id) {
          this.branch = r
          console.log(this.branch)
        }

      }
    })
  }
  editBranch(form: NgForm) {
    this.updatebranch.updateBranch(this.branch.id, this.branch).subscribe((res) => {
      console.log(res);
      window.alert("Branch has been edited")
    })
  }
}
