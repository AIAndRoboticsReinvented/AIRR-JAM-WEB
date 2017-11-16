import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(properties: any, term: any): any {
    //check if search term is undefined
      if (term === undefined) return properties;
      //return properties array
      return properties.filter(function (property) {
          return property.location.toLowerCase().includes(term.toLowerCase());
      })
  }

}
