import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer/class/customer';
import { BillService } from '../Services/bill/bill.service';
import { OrderService } from '../Services/foodorder/order.service';

@Component({
  selector: 'app-email-bill',
  templateUrl: './email-bill.component.html',
  styleUrls: ['./email-bill.component.css']
})
export class EmailBillComponent implements OnInit {
  bill = new Customer()
  result:any
  message:any
  constructor(private bills:BillService,private order:OrderService ,private route:ActivatedRoute,private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.order.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.bill=r
          console.log(this.bill);

        }
        }
      })

  }

  billData(form:NgForm){
    window.alert("Bill sent Successfully")
    this.bills.generateBill(this.bill.id,this.bill).subscribe((res)=>{
      this.message=res
      console.log(this.message); 
    })
  }


}