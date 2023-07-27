import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsPageComponent } from './project-details-page.component';
import { ButtonModule } from 'primeng/button';
import { ProjectDetailsPageRoutingModule } from './project-details-page-routing.module';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { DashboardsListComponent } from './components/dashboards-list/dashboards-list.component';
import { DashboardRowComponent } from './components/dashboard-row/dashboard-row.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    ProjectDetailsPageComponent,
    GeneralInfoComponent,
    DashboardsListComponent,
    DashboardRowComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsPageRoutingModule,

    ButtonModule,
    TableModule,
  ]
})
export class ProjectDetailsPageModule { }
