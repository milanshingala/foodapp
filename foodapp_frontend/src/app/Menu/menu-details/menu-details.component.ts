import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/Menu/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  result:any
  loginmanagerID=localStorage.getItem('loginmanagerID')
  registeredRole = localStorage.getItem('registeredRole')
  role='Manager'
  constructor(private menu:MenuService) { }

  ngOnInit(): void {
    this.menu.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
  })
  }

}