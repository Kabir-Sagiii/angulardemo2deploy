import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  img:string = "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
   isDisabled:boolean = true
  constructor() { }
  changeImage1(){
    this.img = "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }
  changeImage(e:string) {
    console.log(e)
    this.img ="https://images.pexels.com/photos/735978/pexels-photo-735978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }
  changeImage2() {
     this.isDisabled = true
  }
  changeImage3() {
    this.isDisabled = false
  }
  ngOnInit(): void {
  }

}
