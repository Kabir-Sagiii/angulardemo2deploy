import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {
@Input() parentData:string = ""
@Output() sendDataToParent = new EventEmitter()
  constructor() { }
  SendData(v:string) {
    this.sendDataToParent.emit(v)

  }

  ngOnInit(): void {
  }

}
