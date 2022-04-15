import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private datashareService:DatashareService) { }
  getData(s1:string,s2:string):void {
       console.log(s1,s2)
       this.datashareService.data = {
         name:s1,
         password:s2
       }
  }

  ngOnInit(): void {
  }

}
