import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/foodorder/order.service';
import { FoodOrder } from '../class/food-order';

@Component({
  selector: 'app-add-food-order',
  templateUrl: './add-food-order.component.html',
  styleUrls: ['./add-food-order.component.css']
})
export class AddFoodOrderComponent implements OnInit {
  result:any
  order = new FoodOrder()
  constructor(private order1:OrderService,private route:Router) { }

  ngOnInit(): void {
  }

  addFoodOrder(form:NgForm){
    this.order1.addData(this.order).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("Food Order has been Saved")
      
    })
  }


}
