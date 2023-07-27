import { Component, Input } from '@angular/core';
import { ProjectDashboard } from '../../models/project-dashboard';
import { ProjectDetailsMediator } from '../../services/project-details-page.mediator';

@Component({
  selector: 'app-dashboard-row',
  templateUrl: './dashboard-row.component.html',
  styleUrls: ['./dashboard-row.component.scss']
})
export class DashboardRowComponent {
  @Input() dashboard!: ProjectDashboard;

  constructor(private mediator: ProjectDetailsMediator) {}
}
