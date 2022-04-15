import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() getParentData:string = ''

@Output() sendChildData  = new EventEmitter<string>()
  constructor() { }
  sendData(value:string) {
    this.sendChildData.emit(value)
  }

  ngOnInit(): void {
  }

}
