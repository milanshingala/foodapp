import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/Product/class/products';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  result:any
  products = new Products()
  constructor(private product:ProductService,private route:Router) { }

  ngOnInit(): void {
  }

  addProduct(form:NgForm){
    this.product.addData(this.products).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("Product has been Added")
    })
  }

}

