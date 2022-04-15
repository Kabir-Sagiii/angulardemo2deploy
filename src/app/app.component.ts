
import { Component, OnInit } from '@angular/core';

class A {
  name1:string;
  constructor(){
  this.name1 = 'ss'
  }
  getData() {
    console.log("HELOOO")
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   viewProviders:[A]
})

export class AppComponent  {
  title = 'app1';
  person = [
    {
      name:"sagar",
      country :'India'
    },
    {
      name:"rahul",
      country:"UK"
    },
    {
      name:"rahul",
      country:"USA"
    }
  ]
  userData:string="sagar"
  gender:boolean = true
  country = 'UK'

  constructor(public a:A) {
     
     a.getData()
     
  }
  change(v:boolean) {
       this.gender = v 
  }
  // getColor(country:any) {
  //    switch(country) {
  //      case 'India':
  //        return 'red'
  //        case 'UK':
  //          return 'green'
  //          case 'USA':
  //            return 'blue'
  //    }
  //   return
  // }
  // getData() {
  //    this.myservice.getUserData().subscribe((response)=>{
       
  //     //  console.log(response)
  //          this.userData = response
  //          console.log(this.userData)
  //    })
     
  // }
}
