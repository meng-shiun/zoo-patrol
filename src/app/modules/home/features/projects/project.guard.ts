import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProjectService } from './project.service';

@Injectable()
export class CanActivateProject implements CanActivate {
  constructor(private projectService: ProjectService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = +state.url.split('/')[2];

    return this.projectService.getProject(id)
      .pipe(
        take(1),
        map(project => {
          if (!!project) {
            return true;
          } else {
            this.router.navigate(['/projects']);
            return false;
          }
        })
      );
  }
}
