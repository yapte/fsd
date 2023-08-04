import { Component, Input } from '@angular/core';

// core folder
import { ProjectShort } from '../../../core/models/project-short';

// CURRENT ui folder
import { ProjectsListMediator } from '../../services/projects-list.mediator';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent {
  @Input() project!: ProjectShort;

  constructor(private mediator: ProjectsListMediator) { }

  remove(): void {
    this.mediator.removeProject(this.project);
  }
}
