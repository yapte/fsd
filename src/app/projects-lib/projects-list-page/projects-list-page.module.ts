import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListPageComponent } from './project-list-page.component';
import { RouterModule } from '@angular/router';
import { ProjectsListPageRoutingModule } from './projects-list-page-routing.module';
import { ProjectRowComponent } from './components/project-row/project-row.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';



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
  ]
})
export class ProjectsListPageModule { }
