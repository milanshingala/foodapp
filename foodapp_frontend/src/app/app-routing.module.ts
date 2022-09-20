import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
//import { AdminDetailsComponent } from '../../../Food_App/src/app/trash/admin-details/admin-details.component';
//import { EditAdminComponent } from '../../../Food_App/src/app/trash/edit-admin/edit-admin.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { AddBranchComponent } from './Branch/add-branch/add-branch.component';
import { BranchDetailsComponent } from './Branch/branch-details/branch-details.component';
import { AddBranchManagerComponent } from './BranchManager/add-branch-manager/add-branch-manager.component';
//import { BranchmanagerDetailsComponent } from '../../../Food_App/src/app/trash/branchmanager-details/branchmanager-details.component';
import { AuthGuard1 } from './BranchManager/guard/auth.guard';
import { ManagerLoginComponent } from './BranchManager/manager-login/manager-login.component';
import { AddFoodOrderComponent } from './FoodOrder/add-food-order/add-food-order.component';
import { OrderDetailsComponent } from './FoodOrder/order-details/order-details.component';
import { AddItemsComponent } from './Items/add-items/add-items.component';
import { ItemDetailsComponent } from './Items/item-details/item-details.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { MenuDetailsComponent } from './Menu/menu-details/menu-details.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { AddStaffComponent } from './Staff/add-staff/add-staff.component';
//import { StaffDetailsComponent } from '../../../Food_App/src/app/trash/staff-details/staff-details.component';
import { StaffLoginComponent } from './Staff/staff-login/staff-login.component';
import { EditFoodOrderComponent } from './FoodOrder/edit-food-order/edit-food-order.component';
import { EditBranchComponent } from './Branch/edit-branch/edit-branch.component';
import { EditMenuComponent } from './Menu/edit-menu/edit-menu.component';
import { EditItemsComponent } from './Items/edit-items/edit-items.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { EmailBillComponent } from './email-bill/email-bill.component';
import { ProductGuard } from './Product/guard/product.guard';
import { BranchGuard } from './Branch/guard/branch.guard';
import { FoodOrderGuard } from './FoodOrder/guard/food-order.guard';
import { MenuGuard } from './Menu/guard/menu.guard';
import { ItemGuard } from './Items/guard/item.guard';


const routes: Routes = [
  {path:"admin-login",component:LoginAdminComponent},
  {path:"manager-login",component:ManagerLoginComponent},
  {path:"staff-login",component:StaffLoginComponent},
  {path:"add-admin",component:AddAdminComponent},
  {path:"add-branchmanager",component:AddBranchManagerComponent},
  {path:"add-staff",component:AddStaffComponent},
  {path:"updateorders/:id",component:EditFoodOrderComponent},
  {path:"edit-branch/:id",component:EditBranchComponent},
  {path:"updatemenu/:id",component:EditMenuComponent},
  {path:"edititem/:id",component:EditItemsComponent},
  {path:"edit-products/:id",component:EditProductComponent},
  {path:"add-branch",component:AddBranchComponent,canActivate:[BranchGuard]},
  {path:"add-menu",component:AddMenuComponent,canActivate:[MenuGuard]},
  {path:"add-order",component:AddFoodOrderComponent,canActivate:[FoodOrderGuard]},
  {path:"add-product",component:AddProductComponent,canActivate:[ProductGuard]},
  {path:"add-item",component:AddItemsComponent,canActivate:[ItemGuard]},
  {path:"product-details",component:ProductDetailsComponent,canActivate:[ProductGuard]},
  {path:"branch-details",component:BranchDetailsComponent,canActivate:[BranchGuard]},
  {path:"order-details",component:OrderDetailsComponent,canActivate:[FoodOrderGuard]},
  {path:"menu-details",component:MenuDetailsComponent,canActivate:[MenuGuard]},
  {path:"item-details",component:ItemDetailsComponent,canActivate:[ItemGuard]},
  {path:"bill/:id",component:EmailBillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
