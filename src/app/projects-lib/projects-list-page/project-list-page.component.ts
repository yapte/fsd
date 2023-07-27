import { Component } from '@angular/core';
import { ProjectsListData } from './data/projects-list.data';
import { ProjectsListMediator } from './services/projects-list.mediator';
import { Observable } from 'rxjs';
import { ProjectShort } from './models/project-short';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  providers: [ProjectsListMediator, ProjectsListData]
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
