import { Component, OnInit } from '@angular/core';
import { PCServService } from '../pcserv.service';
@Component({
  selector: 'app-ccomp',
  templateUrl: './ccomp.component.html',
  styleUrls: ['./ccomp.component.css']
})
export class CCompComponent implements OnInit {
 Data:any = []
  constructor(private service:PCServService) {
    this.Data = this.service.parentdata
   }

  ngOnInit(): void {
 
  }


}
