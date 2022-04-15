import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() serverData:string=""
@Output() sendDataToMainFromClient = new EventEmitter()
  constructor() { }
  getClientData(v:string,s:any) {
 this.sendDataToMainFromClient.emit(v)
 s.value=""
  }

  ngOnInit(): void {
  }

}
