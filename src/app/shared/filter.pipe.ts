import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    const result = [...value].filter(project => project.name.toLowerCase().includes(searchText));
    return result;
  }

}
