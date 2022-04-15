import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, gender:string): string {
    console.log(gender.toLowerCase())
     if(gender.toLowerCase()==='male') {
       return "Mr "+value
     } else {
       return "Miss "+value
     }


  }

}
