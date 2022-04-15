import { Component, OnInit } from '@angular/core';
import {FilterDataService} from '../filter-data.service'

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {
  information :any;
  numb:any
  constructor(private filterdata:FilterDataService) { 
    this.information = filterdata.info
  }
  male():void {
  this.information = this.filterdata.info.filter((d:any)=>{
      return d.gender==="Male"
   })
  }
  female():void {
    this.information = this.filterdata.info.filter((d:any)=>{
        return d.gender==="Female"
     })
    }

  ngOnInit(): void {
  }

}
