import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsPageComponent } from './project-details-page.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { DashboardsListComponent } from './components/dashboards-list/dashboards-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsPageComponent,
    children: [
      { path: '', component: GeneralInfoComponent },
      { path: 'dashboards', component: DashboardsListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailsPageRoutingModule { }
