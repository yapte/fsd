import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter, map, tap } from "rxjs";
import { Router } from "@angular/router";

import { ConfirmationService, MessageService } from "primeng/api";

// core folder
import { Project } from "../../core/models/project";
import { ProjectDashboard } from "../../core/models/project-dashboard";
import { ProjectDetailsService } from "../../core/project-details.service";

@Injectable()
export class ProjectDetailsMediator {

    // TODO: Use InProgress indicator in action if it needs

    private projectId!: number;
    private project$ = new BehaviorSubject<Project | null>(null);
    private dashboards$ = new BehaviorSubject<ProjectDashboard[] | null>(null);
    private selectedTableRows$ = new BehaviorSubject<ProjectDashboard[]>([]);

    constructor(
        private projectDetailsService: ProjectDetailsService,
        private snack: MessageService,
        private confirmService: ConfirmationService,
        private router: Router,
    ) { }

    init(projectId: number): void {
        this.projectId = projectId;
        this.fetchProject();
    }

    private fetchProject(): void {
        this.projectDetailsService.getProject(this.projectId)
            .pipe(
                tap({
                    next: p => this.project$.next(p),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            )
            .subscribe();
    }

    fetchDashboards(): void {
        this.projectDetailsService.getDashboards(this.projectId)
            .pipe(
                tap({
                    next: ds => this.dashboards$.next(ds),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            )
            .subscribe();
    }


    getProject$(): Observable<Project> {
        return this.project$.pipe(
            filter(value => !!value),
            map(value => value as Project),
        );
    }

    getDashboards$(): Observable<ProjectDashboard[]> {
        return this.dashboards$.pipe(
            filter(value => !!value),
            map(value => value as ProjectDashboard[]),
        );
    }

    getSelectedTableRows$(): Observable<ProjectDashboard[]> {
        return this.selectedTableRows$.asObservable();
    }

    moveDashboardToProject(dashboard: ProjectDashboard, project: Project): void {
        this.confirmService.confirm({
            header: 'Are you sure?',
            message: `${dashboard.name} => ${project.name}`,
            accept: () => {

                this.projectDetailsService.moveDashboardToProject(dashboard.id, project.id)
                    .pipe(
                        tap({
                            next: () => this.fetchDashboards(),
                            error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                        }),
                    )
                    .subscribe();
            }
        });

    }

    removeDashboard(dashboard: ProjectDashboard): void {
        this.confirmService.confirm({
            header: `Delete ${dashboard.name}?`,
            accept: () => {

                this.projectDetailsService.removeDashboard(dashboard.id)
                    .pipe(
                        tap({
                            next: () => this.fetchDashboards(),
                            error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                        }),
                    )
                    .subscribe();
            }
        });

    }

    removeProject(project: Project): void {
        this.confirmService.confirm({
            header: `Delete ${project.name}?`,
            accept: () => {

                this.projectDetailsService.removeProject(project.id)
                    .pipe(
                        tap({
                            next: () => this.router.navigate(['/projects']),
                            error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                        }),
                    )
                    .subscribe();
            }
        });

    }

    onTableItemSelect(items: ProjectDashboard[]): void {
        // TODO: implement
        // this.selectedTableRows$.next(items);
    }
}