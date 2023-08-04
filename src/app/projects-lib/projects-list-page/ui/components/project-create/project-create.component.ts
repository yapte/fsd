import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// core folder
import { ProjectCreate } from '../../../core/models/project-create';

// CURRENT ui folder
import { ProjectsListMediator } from '../../services/projects-list.mediator';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent {
  form = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  constructor(private mediator: ProjectsListMediator) { }

  submit(): void {
    this.mediator.createProject(this.form.value as ProjectCreate)
      .subscribe(() => { /** close psidebar panel */ });
  }
}
