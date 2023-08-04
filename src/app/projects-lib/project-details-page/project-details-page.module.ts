import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ProjectDetailsPageRoutingModule } from './project-details-page-routing.module';

import { TableModule } from 'primeng/table';

// ui folder
import { GeneralInfoComponent } from './ui/components/general-info/general-info.component';
import { DashboardsListComponent } from './ui/components/dashboards-list/dashboards-list.component';
import { DashboardRowComponent } from './ui/components/dashboard-row/dashboard-row.component';
import { ProjectDetailsPageComponent } from './ui/components/project-details-page/project-details-page.component';

// core folder
import { AbstractProjectDetailData } from './core/abstract-project-dertails.data';
import { ProjectDetailsService } from './core/project-details.service';

// data folder
import { ProjectDetailData } from './data/project-dertails.data';



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
  ],
  providers: [
    { provide: AbstractProjectDetailData, useClass: ProjectDetailData },
    ProjectDetailsService,
  ]
})
export class ProjectDetailsPageModule { }
