import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsListPageRoutingModule } from './projects-list-page-routing.module';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


/// ui folder
import { ProjectRowComponent } from './ui/components/project-row/project-row.component';
import { ProjectCreateComponent } from './ui/components/project-create/project-create.component';
import { ProjectListPageComponent } from './ui/components/project-list-page/project-list-page.component';

// core folder
import { AbstrastProjectsListData } from './core/abstract-projects-list.data';
import { ProjectsListService } from './core/project-list.service';

// data folder
import { ProjectsListData } from './data/projects-list.data';


@NgModule({
  declarations: [
    ProjectListPageComponent,
    ProjectRowComponent,
    ProjectCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    SidebarModule,

    ProjectsListPageRoutingModule,
  ],
  providers: [
    { provide: AbstrastProjectsListData, useClass: ProjectsListData },
    ProjectsListService,
  ]
})
export class ProjectsListPageModule { }
