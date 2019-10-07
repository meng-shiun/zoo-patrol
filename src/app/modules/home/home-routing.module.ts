import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from '@app/auth/auth.guard';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.module').then(mod => mod.ProjectsModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./features/clients/clients.module').then(mod => mod.ClientsModule)
      },
      { path: '**', redirectTo: '/404'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
  static components = [
    HomeComponent,
    DashboardComponent,
    NotFoundComponent
  ];
}
