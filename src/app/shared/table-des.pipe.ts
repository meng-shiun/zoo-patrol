import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableDes'
})
export class TableDesPipe implements PipeTransform {
  transform(id: number, list: any[]): any {
    const matchItem = list.find(item => item.id === id);
    return `(${matchItem.id}): ${matchItem.des} - ${matchItem.assign}`;
  }
}
