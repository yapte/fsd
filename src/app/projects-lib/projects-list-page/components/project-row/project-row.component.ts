import { Component, Input } from '@angular/core';
import { ProjectsListMediator } from '../../services/projects-list.mediator';
import { ProjectShort } from '../../models/project-short';

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
