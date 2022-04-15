import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentDate:any
  constructor(private myservice:MyServiceService) {
      this.studentDate = myservice.mydata
   }

  ngOnInit(): void {
  }

}
