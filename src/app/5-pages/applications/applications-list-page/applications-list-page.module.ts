import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar'

import { ApplicationsListPageRoutingModule } from './applications-list-page-routing.module';
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { ApplicationCreateComponent, ApplicationsListComponent } from 'widgets';


@NgModule({
  declarations: [
    ApplicationsListPageComponent
  ],
  imports: [
    CommonModule,
    ApplicationsListPageRoutingModule,

    SidebarModule,

    ApplicationsListComponent,
    ApplicationCreateComponent,
  ]
})
export class ApplicationsListPageModule { }
