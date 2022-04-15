import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataComponent } from './get-data/get-data.component';
import {HttpClientModule} from '@angular/common/http';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { StudentComponent } from './student/student.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassComponent } from './class/class.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { NamePipe } from './name.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { StockComponent } from './stock/stock.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { ParentCComponent } from './Components/parent-c/parent-c.component';
import { ChildCComponent } from './Components/child-c/child-c.component';
import { ParentCompComponent } from './ServiceData/parent-comp/parent-comp.component';
import { ChildCompComponent } from './ServiceData/child-comp/child-comp.component';
import { MainComponent } from './ComponentInteraction/main/main.component';
import { ClientComponent } from './ComponentInteraction/client/client.component';
import { ServerComponent } from './ComponentInteraction/server/server.component';
import { PCompComponent } from './ServiceTask/pcomp/pcomp.component';
import { CCompComponent } from './ServiceTask/ccomp/ccomp.component';
import { CccComponent } from './ServiceTask/ccc/ccc.component'

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    Task1Component,
    Task2Component,
    StudentComponent,
    Comp1Component,
    Comp2Component,
    AttributeBindingComponent,
    ClassComponent,
    FilterDataComponent,
    NamePipe,
    SqrtPipe,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    StockComponent,
    ParentComponent,
    ChildComponent,
    ParentCComponent,
    ChildCComponent,
    ParentCompComponent,
    ChildCompComponent,
    MainComponent,
    ClientComponent,
    ServerComponent,
    PCompComponent,
    CCompComponent,
    CccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
