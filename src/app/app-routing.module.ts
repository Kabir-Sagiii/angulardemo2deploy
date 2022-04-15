import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import {PCompComponent} from './ServiceTask/pcomp/pcomp.component'
import {CccComponent} from './ServiceTask/ccc/ccc.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee',component:PCompComponent},
  {path:'stock',component:CccComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
