import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 @Input() getClientData:string = ""
 @Output() sendDataFromServer = new EventEmitter()
  constructor() { }
  getServerData(value:string,server:any){
 this.sendDataFromServer.emit(value)
 server.value=""
  }
  ngOnInit(): void {
  }

}
