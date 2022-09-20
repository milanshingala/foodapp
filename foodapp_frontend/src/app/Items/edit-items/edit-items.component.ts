import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item/item.service';
import { Items } from '../class/items';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  result:any
  items = new Items()
  constructor(private item:ItemService, private route:ActivatedRoute, private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.item.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.items=r
          console.log(this.items);
        }
        }
      })
  }

  onupdate(form:NgForm){
    this.item.updateitems(this.items.id,this.items).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      
    })
  }

}
