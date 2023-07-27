import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('pages').then(m => m.DashboardsListPageModule) },
  { path: 'dashboards/:dashboardId', loadChildren: () => import('pages').then(m => m.DashboardDetailsPageModule) },

  { path: 'signals', loadChildren: () => import('pages').then(m => m.SignalsListPageModule) },
  // { path: 'signals', loadComponent: () =>  },

  { path: 'applications', loadChildren: () => import('pages').then(m => m.ApplicationsListPageModule) },
  {
    path: 'applications/:applicationId',
    loadComponent: () => import('pages').then(m => m.ApplicationsDetailsPageComponent),
    children: [
      { path: '', loadComponent: () => import('widgets').then(m => m.ApplicationEditComponent) },
      { path: 'steps/:stepId', loadComponent: () => import('widgets').then(m => m.ApplicationStepEditComponent) },
    ],
  },
  // { path: 'applications/:applicationId', loadChildren: () => import('pages').then(m => m.ApplicationDetailsPageModule) },
  // { path: 'projects', loadChildren: () => import('./projects-lib/projects-lib.module').then(m => m.ProjectsLibModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
