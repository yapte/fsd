import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ui folder
import { GeneralInfoComponent } from './ui/components/general-info/general-info.component';
import { DashboardsListComponent } from './ui/components/dashboards-list/dashboards-list.component';
import { ProjectDetailsPageComponent } from './ui/components/project-details-page/project-details-page.component';

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
