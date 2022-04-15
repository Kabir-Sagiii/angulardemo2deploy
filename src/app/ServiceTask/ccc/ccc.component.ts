import { Component, OnInit } from '@angular/core';
import { PCServService } from '../pcserv.service';

@Component({
  selector: 'app-ccc',
  templateUrl: './ccc.component.html',
  styleUrls: ['./ccc.component.css']
})
export class CccComponent implements OnInit {

  Data:any = []
  constructor(private service:PCServService) {
  
    this.Data = this.service.parentdata
    console.log(this.Data)
   }

  ngOnInit(): void {
  }

}
