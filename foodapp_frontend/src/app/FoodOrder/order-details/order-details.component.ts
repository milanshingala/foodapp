import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/foodorder/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  result:any
  role='Staff'
  loginstaffrole=localStorage.getItem('registeredRole')
  loginstaffID=localStorage.getItem('loginstaffID')
  constructor(private orders:OrderService) { }

  ngOnInit(): void {
    this.orders.getData().subscribe((data)=>{
    this.result=data
    console.log(this.result);
    
    })
  }

  delete(id:any){
    this.orders.deleteData(id).subscribe((res)=>{
      console.log(res);
      this.orders.getData().subscribe((data)=>{
        this.result=data
        console.log(this.result);
        
      })
      
    })
  }

}