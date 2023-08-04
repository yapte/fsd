import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// CURRENT ui folder
import { ProjectDetailsMediator } from '../../services/project-details-page.mediator';

// core folder
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss'],
  providers: [ProjectDetailsMediator],
})
export class ProjectDetailsPageComponent implements OnInit {
  projectId!: number;
  project$: Observable<Project> = this.mediator.getProject$();

  constructor(
    private mediator: ProjectDetailsMediator,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.projectId = +this.activatedRoute.snapshot.params['projectId'];
    this.mediator.init(this.projectId);
  }
}
