import { Injectable } from "@angular/core";
import { ProjectDetailData } from "../data/project-dertails.data";
import { BehaviorSubject, Observable, filter, map, tap } from "rxjs";
import { Project } from "../models/project";
import { ProjectDashboard } from "../models/project-dashboard";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Injectable()
export class ProjectDetailsMediator {

    // TODO: Use InProgress indicator in action if it needs

    private projectId!: number;
    private project$ = new BehaviorSubject<Project | null>(null);
    private dashboards$ = new BehaviorSubject<ProjectDashboard[] | null>(null);
    private selectedTableRows$ = new BehaviorSubject<ProjectDashboard[]>([]);

    constructor(
        private data: ProjectDetailData,
        private snack: MessageService,
        private confirmService: ConfirmationService,
        private router: Router,
    ) { }

    init(projectId: number): void {
        this.projectId = projectId;
        this.fetchProject();
    }

    private fetchProject(): void {
        this.data.getProject(this.projectId)
            .pipe(
                tap({
                    next: p => this.project$.next(p),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            )
            .subscribe();
    }

    fetchDashboards(): void {
        this.data.getDashboards(this.projectId)
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

                this.data.moveDashboardToProject(dashboard.id, project.id)
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

                this.data.removeDashboard(dashboard.id)
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

                this.data.removeProject(project.id)
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