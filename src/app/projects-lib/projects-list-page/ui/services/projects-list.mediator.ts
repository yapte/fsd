import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, filter, map, tap } from "rxjs";

import { ConfirmationService, MessageService } from "primeng/api";

// core folder
import { ProjectShort } from "../../core/models/project-short";
import { ProjectCreate } from "../../core/models/project-create";
import { ProjectsListService } from "../../core/project-list.service";

@Injectable()
export class ProjectsListMediator {

    // TODO: Use InProgress indicator in action if it needs

    private requestModel = { search: '', page: 1 };

    projects$ = new BehaviorSubject<ProjectShort[] | null>(null);
    selectedTableRows$ = new BehaviorSubject<ProjectShort[]>([]);

    constructor(
        private projectListService: ProjectsListService,
        private snack: MessageService,
        private confirmService: ConfirmationService,
        private router: Router,
    ) { }

    private fetch(): void {
        this.projectListService.getProjects(this.requestModel)
            .pipe(
                tap({
                    next: ps => this.projects$.next(ps),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            )
            .subscribe()
    }

    init(): void {
        this.fetch();
    }

    search(text: string): void {
        this.requestModel.search = text;
        this.fetch();
    }

    goToPage(pageNumber: number): void {
        this.requestModel.page = pageNumber;
        this.fetch();
    }

    getProjects$(): Observable<ProjectShort[]> {
        return this.projects$.pipe(
            filter(value => !!value),
            map(value => value as ProjectShort[])
        )
    }

    removeProject(project: ProjectShort): void {
        this.projectListService.removeProject(project.id)
            .pipe(
                tap({
                    next: () => this.fetch(),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            )
            .subscribe()
    }

    removeSelected(): void {
        if (!this.projects$.value) return;

        const projectIds: number[] = this.projects$.value.map(p => p.id);

        this.confirmService.confirm({
            header: 'Remove',
            message: `Are you sure (${projectIds.length})?`,
            accept: () => {
                this.projectListService.removeProjects(projectIds)
                    .pipe(
                        tap({
                            next: () => this.fetch(),
                            error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                        }),
                    )
                    .subscribe();
            }
        });
    }

    createProject(model: ProjectCreate): Observable<void> {
        return this.projectListService.createProject(model)
            .pipe(
                tap({
                    next: () => this.fetch(),
                    error: err => this.snack.add({ summary: 'ERROR', detail: err['message'] }),
                }),
            );
    }
}