import { Component, OnInit } from '@angular/core';
import { ProjectDetailsMediator } from '../../services/project-details-page.mediator';
import { Observable } from 'rxjs';
import { ProjectDashboard } from '../../models/project-dashboard';

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
