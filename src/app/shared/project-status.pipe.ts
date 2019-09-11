import { Pipe, PipeTransform } from '@angular/core';

import { projectStatusData } from '@app/core/data';

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {

  private list = projectStatusData;

  transform(statusId: number): string {
    const matchList = this.list.find(list => list.id === statusId);
    return `${matchList.id}. ${matchList.status}`;
  }

}
