import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./projects-list-page/projects-list-page.module').then(m => m.ProjectsListPageModule) },
  { path: ':projectId', loadChildren: () => import('./project-details-page/project-details-page.module').then(m => m.ProjectDetailsPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsLibRoutingModule { } 
