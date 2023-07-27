import { Injectable } from "@angular/core";
import { ProjectsApi } from "api";
import { Observable, delay, of } from "rxjs";
import { ProjectShort } from "../models/project-short";
import { ProjectCreate } from "../models/project-create";

@Injectable()
export class ProjectsListData {

    constructor(private projectsApi: ProjectsApi) { }

    getProjects(model: { search: string, page: number }): Observable<ProjectShort[]> {
        // projectsApi + Adapter
        return of([]);
    }

    createProject(model: ProjectCreate): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }

    removeProject(projectId: number): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }

    removeProjects(projectIds: number[]): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }
}