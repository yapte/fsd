import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// core folder
import { ProjectDashboard } from '../../../core/models/project-dashboard';

// CURRENT ui folder
import { ProjectDetailsMediator } from '../../services/project-details-page.mediator';

@Component({
  selector: 'app-dashboards-list',
  templateUrl: './dashboards-list.component.html',
  styleUrls: ['./dashboards-list.component.scss']
})
export class DashboardsListComponent implements OnInit {
  dashboards$: Observable<ProjectDashboard[]> = this.mediator.getDashboards$();

  constructor(private mediator: ProjectDetailsMediator) { }

  ngOnInit(): void {
      this.mediator.fetchDashboards();
  }
}
