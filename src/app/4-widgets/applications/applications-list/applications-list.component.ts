import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Application, ApplicationsListRowComponent } from 'entities';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { GetApplicationsListFeature } from 'features';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    ButtonModule,
    InputTextModule,
    TableModule,

    ApplicationsListRowComponent,
  ],
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent {
  applications$: Observable<Application[]> = this.getApplicationsListFeature.execute({});

  constructor(private getApplicationsListFeature: GetApplicationsListFeature) { }

}
