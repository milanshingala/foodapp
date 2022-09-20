import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item/item.service';
import { Items } from '../class/items';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private item:ItemService, private route:Router) { }
  result:any
  items = new Items()

  ngOnInit(): void {
  }

  addItem(form:NgForm){
    this.item.addData(this.items).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("New Item added successfully")
      this.route.navigate(['items'])
      
    })
  }

}

