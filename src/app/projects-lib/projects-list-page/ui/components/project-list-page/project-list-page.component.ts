import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// core folder
import { ProjectShort } from '../../../core/models/project-short';

// CURRENT ui folder
import { ProjectsListMediator } from '../../services/projects-list.mediator';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  providers: [ProjectsListMediator]
})
export class ProjectListPageComponent {
  isSidebarVisible = false;
  projects$: Observable<ProjectShort[]> = this.mediator.getProjects$();

  constructor(private mediator: ProjectsListMediator) { }

  showCreateSidebar(): void {
    this.isSidebarVisible = true;
  }

  removeSelected(): void {
    this.mediator.removeSelected();
  }

  moveSelectedToProject(projectId: number): void {
    // TODO: implement
    // this.mediator.
  }

  onTableRowSelect(): void {
    // TODO: implement
    // this.mediator.
  }
}
