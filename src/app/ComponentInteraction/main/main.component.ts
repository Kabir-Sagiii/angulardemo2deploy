import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clientData:string = ""
  serverData:string=""
  constructor() { }
  getDataFromClient(value:string) {
    this.clientData = value
  }
  getdataFromServer(value:string) {
       this.serverData = value
  }

  ngOnInit(): void {
  }

}
