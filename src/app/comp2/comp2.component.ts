import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
 data:any
  constructor(private datashareService:DatashareService) { 
    
    
  }
getData() {
  this.data= this.datashareService.data 
  console.log(this.data)
}
  ngOnInit(): void {
  }

}
