import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent implements OnInit {
  parentData:string = ""
  childData:string =""
  constructor() { }
   getchildData(data:string) {
      this.childData = data
   }
  ngOnInit(): void {
  }

}
