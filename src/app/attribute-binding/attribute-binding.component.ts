import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {
  col:number =6
  c:number=50
  isBold:boolean = true
  fontSize:string ="40px"
  applyclass:string = "one two"
  constructor() { }

  ngOnInit(): void {
  }

}
