import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Observable, map, tap } from 'rxjs';
import { Application } from 'entities';
import { GetApplicationByIdFeature } from 'src/app/3-features/applications/get-application-by-id.feature';
import { ApplicationStepRowComponent } from 'src/app/2-entities/applications/application-step-row/application-step-row.component';
import { RemoveApplicationFeature } from 'src/app/3-features/applications/remove-application.feature';
import { titleAnimation } from 'src/app/1-shared/theme/animations/title.animation';

@Component({
  selector: 'app-application-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    ButtonModule,
    ApplicationStepRowComponent,
  ],
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
  animations: [titleAnimation],
})
export class ApplicationDetailsComponent implements OnInit {
  @Input({ required: true }) applicationId!: string;

  application$!: Observable<Application>;

  constructor(
    private getApplicationByIdFeature: GetApplicationByIdFeature,
    private removeApplicationFeature: RemoveApplicationFeature,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.application$ = this.getApplicationByIdFeature.execute(this.applicationId);
  }

  remove(): void {
    this.removeApplicationFeature.execute(this.applicationId);
  }
}
