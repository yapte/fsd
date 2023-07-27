import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApplicationDetailsComponent } from 'widgets';
import { ApplicationStepCreateComponent } from 'src/app/4-widgets/applications/application-step-create/application-step-create.component';

@Component({
  selector: 'app-applications-details-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    ApplicationDetailsComponent,
    ApplicationStepCreateComponent,
  ],
  templateUrl: './applications-details-page.component.html',
  styleUrls: ['./applications-details-page.component.scss']
})
export class ApplicationsDetailsPageComponent implements OnInit {
  applicationId!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.applicationId = this.activatedRoute.snapshot.params['applicationId'];
  }
}
