import { Component, OnInit } from '@angular/core';
import { ProjectDetailsMediator } from './services/project-details-page.mediator';
import { ProjectDetailData } from './data/project-dertails.data';
import { Observable } from 'rxjs';
import { Project } from './models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss'],
  providers: [ProjectDetailsMediator, ProjectDetailData],
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
