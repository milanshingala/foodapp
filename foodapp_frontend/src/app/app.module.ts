import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DeleteAdminComponent } from '../../../Food_App/src/app/trash/delete-admin/delete-admin.component';
import { AddBranchComponent } from './Branch/add-branch/add-branch.component';
import { EditBranchComponent } from './Branch/edit-branch/edit-branch.component';
import { AddBranchManagerComponent } from './BranchManager/add-branch-manager/add-branch-manager.component';
//import { EditBranchManagerComponent } from '../../../Food_App/src/app/trash/edit-branch-manager/edit-branch-manager.component';
import { EditCustomerComponent } from './Customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './Customer/delete-customer/delete-customer.component';
import { AddFoodOrderComponent } from './FoodOrder/add-food-order/add-food-order.component';
import { EditFoodOrderComponent } from './FoodOrder/edit-food-order/edit-food-order.component';
import { AddItemsComponent } from './Items/add-items/add-items.component';
import { EditItemsComponent } from './Items/edit-items/edit-items.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { EditMenuComponent } from './Menu/edit-menu/edit-menu.component';
import { DeleteMenuComponent } from './Menu/delete-menu/delete-menu.component';
import { AddStaffComponent } from './Staff/add-staff/add-staff.component';
//import { EditStaffComponent } from '../../../Food_App/src/app/trash/edit-staff/edit-staff.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
//import { EditAdminComponent } from '../../../Food_App/src/app/trash/edit-admin/edit-admin.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { BranchmanagerDetailsComponent } from '../../../Food_App/src/app/trash/branchmanager-details/branchmanager-details.component';
//import { StaffDetailsComponent } from '../../../Food_App/src/app/trash/staff-details/staff-details.component';
import { BranchDetailsComponent } from './Branch/branch-details/branch-details.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { ManagerLoginComponent } from './BranchManager/manager-login/manager-login.component';
import { StaffLoginComponent } from './Staff/staff-login/staff-login.component';
import { OrderDetailsComponent } from './FoodOrder/order-details/order-details.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { MenuDetailsComponent } from './Menu/menu-details/menu-details.component';
import { ItemDetailsComponent } from './Items/item-details/item-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
//import { AdminDetailsComponent } from '../../../Food_App/src/app/trash/admin-details/admin-details.component';
import { EmailBillComponent } from './email-bill/email-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
  //  EditAdminComponent,
//    DeleteAdminComponent,
 //   DeleteAdminComponent,
    AddBranchComponent,
    EditBranchComponent,
    AddBranchManagerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    AddFoodOrderComponent,
    EditFoodOrderComponent,
    AddItemsComponent,
    EditItemsComponent,
    AddMenuComponent,
    EditMenuComponent,
    DeleteMenuComponent,
    AddStaffComponent,
  //  EditStaffComponent,
   // BranchmanagerDetailsComponent,
  //  StaffDetailsComponent,
    BranchDetailsComponent,
    LoginAdminComponent,
    ManagerLoginComponent,
    StaffLoginComponent,
    OrderDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    MenuDetailsComponent,
    ItemDetailsComponent,
    CustomerDetailsComponent,
 //  AdminDetailsComponent,
    EmailBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
