import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/foodorder/order.service';
import { FoodOrder } from '../class/food-order';

@Component({
  selector: 'app-edit-food-order',
  templateUrl: './edit-food-order.component.html',
  styleUrls: ['./edit-food-order.component.css']
})
export class EditFoodOrderComponent implements OnInit {

  constructor(private order:OrderService, private route:ActivatedRoute,private root:Router) { }
  result:any
  orders = new FoodOrder()
  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.order.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.orders=r
          console.log(this.orders);

        }
        }
      })
  }

  editOrder(form:NgForm){
    this.order.updateorders(this.orders.id,this.orders).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      
    })
  }

}

