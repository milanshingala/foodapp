import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food-App';
  constructor(private route:Router){}
  logout(){
    localStorage.removeItem('registeredRole')
    localStorage.removeItem('loginadminID')
    localStorage.removeItem('loginmanagerID')
    localStorage.removeItem('loginstaffID')
    window.alert("Logged Out")
    this.route.navigate(['home'])

  }
}
