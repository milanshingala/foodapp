import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/Services/item/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  result:any
  role='Staff'
  loginstaffrole=localStorage.getItem('registeredRole')
  loginstaffID=localStorage.getItem('loginstaffID')
  constructor(private items:ItemService) { }

  ngOnInit(): void {
    this.items.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
    })
  }

  delete(id:any){
    this.items.deleteData(id).subscribe((res)=>{
      console.log(res);
      this.items.getData().subscribe((data)=>{
        this.result=data
        console.log(this.result);
        
      })
      
    })
  }
}

