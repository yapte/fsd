import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListPageComponent } from './ui/components/project-list-page/project-list-page.component';

const routes: Routes = [
  { path: '', component: ProjectListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsListPageRoutingModule { }
